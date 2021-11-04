import MainGenreFilters from './main-genre-filters';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import { MatchingComponent } from '../const/const';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../types/state';

const mapStateToProps = ({films, promoFilm}: State) => ({
  films,
  promoFilm,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type MainProps = {authorizationStatus: string};
type ConnectedComponentProps = MainProps & PropsFromRedux;

function Main(props: ConnectedComponentProps): JSX.Element {
  const {promoFilm, films, authorizationStatus } = props;

  return(
    <>
      <MainMovieFrame promoFilm ={promoFilm} authorizationStatus={authorizationStatus}/>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters movieList={films}/>
          <CatalogMovieThumbnails movieList={films} componentEqual={MatchingComponent.Main}/>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export  {Main};
export default connector (Main);
