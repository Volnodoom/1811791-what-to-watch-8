import MainGenreFilters from './main-genre-filters';
import MainMovieFrame from './main-movie-frame';
import Footer from '../general/footer';
import { useSelector } from 'react-redux';
import * as selectors from '../../store/selectors';

function Main(): JSX.Element {
  const promoFilm = useSelector(selectors.getPromoFilm);

  return(
    <>
      <MainMovieFrame promoFilm ={promoFilm} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <MainGenreFilters />
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
