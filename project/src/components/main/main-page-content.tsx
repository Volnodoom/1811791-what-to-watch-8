import { MovieProps } from '../const/const';
import MainGenreFilters from './main-genre-filters';
import MovieCatalog from './main-movie-catalog';
import Logo from '../general/logo';
const CATALOG = 'Catalog';

function PageContent(film: MovieProps): JSX.Element {
  return(
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">{CATALOG}</h2>
        {MainGenreFilters(film)}
        <div className="catalog__films-list">
          {new Array(20)
            .fill('')
            .map((line, index) => MovieCatalog(film, index))}
        </div>
        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>
      <footer className="page-footer">
        {Logo()}
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default PageContent;
