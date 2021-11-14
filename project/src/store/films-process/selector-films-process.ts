import { createSelector } from 'reselect';
import { State } from '../../components/types/state';
import { MovieInfo } from '../../components/types/types';
import { selectFilms } from '../films-data/selector-films-data';

const selectGenre = (state: State, genreKind: string) => genreKind;
// const selectFiltratedFilms = createSelector(
//   [selectFilms, selectGenre],
//   (films: MovieInfo[], genreKind: string): MovieInfo[] =>
//     films.filter((film: MovieInfo) => film.genre === genreKind),
// );

export const makeSelectFilmsByGenre = () =>
  createSelector(
    [selectFilms, selectGenre],
    (films: MovieInfo[], genreKind: string): MovieInfo[] => {
      const filtratedData = films.filter((film: MovieInfo) => film.genre === genreKind);
      return filtratedData;
    },
  );

