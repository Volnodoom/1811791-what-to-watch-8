import React, { MouseEvent, useCallback, useMemo, useState } from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import { State } from '../types/state';
import { ALL_GENRES } from '../const/const';
import MovieThumbnails from '../general/movie-thumbnails';
import * as selectors from '../../store/selectors';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = (state: State) => ({
  films: selectors.getFilms(state),
  genreList: selectors.getGenreList(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = PropsFromRedux;

function MainGenreFilters(props: ConnectedComponentProps):JSX.Element {
  const {genreList, films} = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const getActiveFilm = useCallback(() => setActiveFilm, []);

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
                activeStateHandler={getActiveFilm}
              />
            )) : filmsByGenre
          .map((film) =>
            (
              <MovieThumbnails
                film={film}
                key={film.id}
                activeStateHandler={getActiveFilm}
              />
            ))}
      </div>
    </>
  );
}

export  {MainGenreFilters};
export default React.memo(connector(MainGenreFilters));
