import { MovieInfo } from '../const/types';
import MainGenreFilters from './main-genre-filters';
import MainMovieCatalog from './main-movie-catalog';
import Logo from '../general/logo';
import MainMovieFrame from './main-movie-frame';

const CATALOG = 'Catalog';
const COPYRIGHT = '© 2019 What to watch Ltd.';

function Main(props: {film: MovieInfo}): JSX.Element {
  return(
    <>
      <MainMovieFrame film ={props.film} />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">{CATALOG}</h2>
          <MainGenreFilters />
          <div className="catalog__films-list">
            {new Array(20)
              .fill('')
            // eslint-disable-next-line react/no-array-index-key
              .map((line, index) => <MainMovieCatalog film={props.film} key = {index} />)}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>
        <footer className="page-footer">
          <Logo />
          <div className="copyright">
            <p>{COPYRIGHT}</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
