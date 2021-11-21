import { createSelector } from 'reselect';
import { ALL_GENRES, CommentsStatus } from '../components/const/const';
import { State } from '../components/types/state';
import { Comment, MovieInfo } from '../components/types/types';
import { AuthorizationStatus } from '../components/const/const';
import { NameSpace } from './root-reducer';

export const getMovies = (state: State): MovieInfo[] => state[NameSpace.data].films;
export const getPromoMovies = (state: State): MovieInfo | undefined => state[NameSpace.data].promoFilm;
export const getMyFavoriteMovies = (state: State): MovieInfo[] | [] => state[NameSpace.data].myFavoriteMovies;
export const getComments = (state: State): Comment[] => state[NameSpace.data].comments;
export const getCommentsStatus = (state: State): CommentsStatus => state[NameSpace.data].commentStatus;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;

export const getMovieById = createSelector(
  [
    getMovies,
    (state: State, id: number | string) => id,
  ],
  (films, id): MovieInfo | undefined => {
    const result = films.find((filmCard) => filmCard.id === Number(id));
    return result;
  });

export const getGenreList = createSelector([getMovies], (films: MovieInfo[]): string[] => {
  const uniqueGenreList: Set <string> = new Set();
  uniqueGenreList.add(ALL_GENRES);
  films.forEach((film) => uniqueGenreList.add(film.genre));

  return Array.from(uniqueGenreList).slice(0,8);
});

export const makeSelectFilmsByGenre  = (genreKind: string) =>
  createSelector(
    [getMovies],
    (films: MovieInfo[]): MovieInfo[] => {
      if (genreKind === ALL_GENRES || undefined) {
        return films;
      }
      const filtratedData = films.filter((film: MovieInfo) => film.genre === genreKind);
      return filtratedData;
    },
  );
