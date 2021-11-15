import { createSelector } from 'reselect';
import { ALL_GENRES } from '../components/const/const';
import { State } from '../components/types/state';
import { Comment, MovieInfo } from '../components/types/types';
import { AuthorizationStatus } from '../components/const/const';
import { NameSpace } from './root-reducer';

export const getFilms = (state: State): MovieInfo[] => state[NameSpace.data].films;
export const getPromoFilm = (state: State): MovieInfo | undefined => state[NameSpace.data].promoFilm;
export const getComments = (state: State): Comment[] => state[NameSpace.data].comments;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

export const getGenreList = createSelector([getFilms], (films: MovieInfo[]): string[] => {
  const uniqueGenreList: Set <string> = new Set();
  uniqueGenreList.add(ALL_GENRES);
  films.forEach((film) => uniqueGenreList.add(film.genre));

  return Array.from(uniqueGenreList).slice(0,8);
});

export const makeSelectFilmsByGenre  = (genreKind: string) =>
  createSelector(
    [getFilms],
    (films: MovieInfo[]): MovieInfo[] => {
      if (genreKind === ALL_GENRES || undefined) {
        return films;
      }
      const filtratedData = films.filter((film: MovieInfo) => film.genre === genreKind);
      return filtratedData;
    },
  );
