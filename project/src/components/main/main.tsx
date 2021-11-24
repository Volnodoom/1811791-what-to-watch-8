import MainGenreFilters from './main-genre-filters';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';
import { RouteProps } from 'react-router';

type MainProps = RouteProps & {
  onPlayVideoClick: (id: string | number) => void;
};

function Main(props: MainProps): JSX.Element {
  const {onPlayVideoClick} = props;
  const promoFilm = useSelector(selectors.getPromoMovie);

  return(
    <>
      <MainMovieFrame promoFilm ={promoFilm} onPlayFilm={onPlayVideoClick} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
