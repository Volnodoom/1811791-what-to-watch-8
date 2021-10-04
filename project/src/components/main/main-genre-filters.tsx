import { filmTs } from '../const/const';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

type filterTemplateProps = {
  filterGenre: string,
  filterUrl: string,
};

const genreFilterFrames = [
  {
    filterGenre: 'All filterGenres',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Comedies',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Crime',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Documentary',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Dramas',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Horror',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Kids & Family',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Romance',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Sci-Fi',
    filterUrl: 'null',
  },
  {
    filterGenre: 'Thrillers',
    filterUrl: 'null',
  },
];


function MainGenreFilters(film: filmTs):JSX.Element {
  const {isGenreActive} = film.privateInfoWeb;

  function filterTemplate({filterGenre, filterUrl}: filterTemplateProps, keyId: number):JSX.Element {
    return(
      <li className={isGenreActive ? GenreState.Active : GenreState.NonActive} key={keyId}>
        <a href={filterUrl} className="catalog__genres-link">{filterGenre}</a>
      </li>
    );
  }

  return (
    <ul className="catalog__genres-list">
      {genreFilterFrames.map(({filterGenre, filterUrl}, index) => filterTemplate({filterGenre, filterUrl}, index))}
    </ul>
  );
}

export default MainGenreFilters;
