import { MouseEvent, useMemo, useState } from 'react';
import { useSelector} from 'react-redux';
import { State } from '../types/state';
import { ALL_GENRES } from '../const/const';
import MovieThumbnails from '../general/movie-thumbnails';
import * as selectors from '../../store/selectors';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

function MainGenreFilters():JSX.Element {
  const genreList = useSelector(selectors.getGenreList);

  const [activeGenre, setActiveGenre] = useState (ALL_GENRES);

  const selectFilmsByGenre = useMemo(() => selectors.makeSelectFilmsByGenre(activeGenre), [activeGenre]);
  const filmsByGenre = useSelector((state:State) => selectFilmsByGenre(state));

  const activeGenreHandler = (genre: string) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setActiveGenre (genre);
  };

  return (
    <>
      <ul className="catalog__genres-list">
        {genreList
          .map((genre) => (
            <li
              className={genre === activeGenre ? GenreState.Active : GenreState.NonActive}
              key={genre}
              onClick={activeGenreHandler(genre)}
            >
              <a href="#url" className="catalog__genres-link">{genre}</a>
            </li>
          ))}
      </ul>
      <div className="catalog__films-list">
        {filmsByGenre
          .map((film) =>
            (
              <MovieThumbnails
                film={film}
                key={film.id}
              />
            ))}
      </div>
    </>
  );
}

export default MainGenreFilters;
