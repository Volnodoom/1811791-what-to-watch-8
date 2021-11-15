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
  const films = useSelector(selectors.getFilms);
  const genreList = useSelector(selectors.getGenreList);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);

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
        {Array.from(genreList)
          .slice(0,8)
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
        {activeGenre === ALL_GENRES ? films
          .map((film) =>
            (
              <MovieThumbnails
                film={film}
                key={film.id}
                activeStateHandler={setActiveFilm}
              />
            )) : filmsByGenre
          .map((film) =>
            (
              <MovieThumbnails
                film={film}
                key={film.id}
                activeStateHandler={setActiveFilm}
              />
            ))}
      </div>
    </>
  );
}

export default MainGenreFilters;
