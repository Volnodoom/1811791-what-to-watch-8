import { createSelector } from 'reselect';
import { ALL_GENRES } from '../../components/const/const';
import { State } from '../../components/types/state';
import { Comment, MovieInfo } from '../../components/types/types';
import { NameSpace } from '../root-reducer';

export const selectFilms = (state: State): MovieInfo[] => state[NameSpace.data].films;
export const selectPromoFilm = (state: State): MovieInfo | undefined => state[NameSpace.data].promoFilm;
export const selectComments = (state: State): Comment[] => state[NameSpace.data].comments;
export const selectLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export const selectGenreList = createSelector([selectFilms], (films: MovieInfo[]): string[] => {
  const uniqueGenreList: Set <string> = new Set();
  uniqueGenreList.add(ALL_GENRES);
  films.forEach((film) => uniqueGenreList.add(film.genre));

  return Array.from(uniqueGenreList);
});

