import { MouseEvent } from 'react';
import { genreFilterFrames } from '../const/const';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const activeGenreHandler = (evt: MouseEvent<HTMLElement>) => {
  evt.preventDefault();
  evt.currentTarget.classList.toggle(GenreState.Active);
};

function MainGenreFilters():JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genreFilterFrames
        .map(({filterGenre, filterUrl, isAllGenres}) => (
          <li
            className={isAllGenres ? GenreState.Active : GenreState.NonActive}
            key={Date.now()+Math.random()}
            onClick={activeGenreHandler}
          >
            <a href={filterUrl} className="catalog__genres-link">{filterGenre}</a>
          </li>
        ))}
    </ul>
  );
}

export default MainGenreFilters;
