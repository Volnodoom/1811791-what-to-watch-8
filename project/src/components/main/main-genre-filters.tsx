import { genreFilterFrames } from '../const/const';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};


function MainGenreFilters():JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genreFilterFrames
        .map(({filterGenre, filterUrl, isGenreActive}, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li className={isGenreActive ? GenreState.Active : GenreState.NonActive} key={index}>
            <a href={filterUrl} className="catalog__genres-link">{filterGenre}</a>
          </li>
        ))}
    </ul>
  );
}

export default MainGenreFilters;
