import MainGenreFilters from './main-genre-filters';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import { MatchingComponent } from '../const/const';
import { connect, ConnectedProps } from 'react-redux';
import { State } from '../types/state';

const mapStateToProps = ({promoFilm, filtratedFilms}: State) => ({
  promoFilm,
  filtratedFilms,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main(props: ConnectedComponentProps): JSX.Element {
  const {promoFilm, filtratedFilms} = props;

  return(
    <>
      <MainMovieFrame promoFilm ={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters />
          <CatalogMovieThumbnails movieList={filtratedFilms} componentEqual={MatchingComponent.Main}/>
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
