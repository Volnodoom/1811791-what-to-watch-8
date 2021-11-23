import { MouseEvent, useMemo, useState } from 'react';
import { useSelector} from 'react-redux';
import { State } from '../types/state';
import { ALL_GENRES } from '../const/const';
import MovieThumbnails from '../general/movie-thumbnails';
import * as selectors from '../../store/selectors';
import MainShowMoreButton from './main-show-more-button';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const MOVIES_NUMBER_AT_START = 8;
const MOVIE_STEP = 8;
const START_OF_COPING = 0;

function MainGenreFilters():JSX.Element {
  const genreList = useSelector(selectors.getGenreList);

  const [activeGenre, setActiveGenre] = useState(ALL_GENRES);
  const [showMore, setShowMore] = useState(MOVIES_NUMBER_AT_START);

  const selectFilmsByGenre = useMemo(() => selectors.makeSelectFilmsByGenre(activeGenre), [activeGenre]);
  const filmsByGenre = useSelector((state:State) => selectFilmsByGenre(state));

  const handleActiveGenreClick = (genre: string) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    setActiveGenre (genre);
  };

  const arrayWithStep = filmsByGenre.slice(START_OF_COPING, showMore);

  return (
    <>
      <ul className="catalog__genres-list">

        {genreList
          .map((genre) => (
            <li
              className={genre === activeGenre ? GenreState.Active : GenreState.NonActive}
              key={genre}
              onClick={handleActiveGenreClick(genre)}
            >
              <a href="#url" className="catalog__genres-link">{genre}</a>
            </li>
          ))}

      </ul>
      <div className="catalog__films-list">

        {arrayWithStep
          .map((film) =>
            (
              <MovieThumbnails
                film={film}
                key={film.id}
              />
            ))}

      </div>

      <div className="catalog__more">
        {arrayWithStep.length < filmsByGenre.length
          ? < MainShowMoreButton onClick={() => setShowMore((prevState) => prevState + MOVIE_STEP)} />
          : ''}
      </div>

    </>
  );
}

export default MainGenreFilters;
