import { MouseEvent, useCallback, useMemo, useState } from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import { State } from '../types/state';
import { ALL_GENRES } from '../const/const';
import { selectGenreList } from '../../store/films-data/selector-films-data';
// import { MovieInfo } from '../types/types';
import MovieThumbnails from '../general/movie-thumbnails';
import { makeSelectFilmsByGenre } from '../../store/films-process/selector-films-process';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = (state: State) => ({
  genreList: selectGenreList(state),
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>
// type PropsMainGenreFilters = {movieList:MovieInfo[]}
type ConnectedComponentProps = PropsFromRedux;

function MainGenreFilters(props: ConnectedComponentProps):JSX.Element {
  const {genreList} = props;

  const [activeGenre, setActiveGenre] = useState (ALL_GENRES);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const getActiveFilm = useCallback(() => setActiveFilm, []);
  const selectFilmsByGenre = useMemo(makeSelectFilmsByGenre, [activeGenre]);
  const filmsByGenre = useSelector<State>((state) => {
    selectFilmsByGenre(state, activeGenre);
  });


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
        {filmsByGenre
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
export default connector(MainGenreFilters);
