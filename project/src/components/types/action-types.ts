import { MovieInfo } from './types';

export enum ActionType {
  ResetFilter = 'filter/resetFilter',
  SetFilter = 'filter/setFilter',
  FiltrateMovies = 'filter/filtrateMovies',
}

export type ResetFilterAction = {
  type: ActionType.ResetFilter,
};

export type SetFilterAction  = {
  type: ActionType.SetFilter,
  payload:
  {
    genreKind: string,
  },
};

export type FiltrateMoviesAction  = {
  type: ActionType.FiltrateMovies,
  payload:
  {
    arrayData: MovieInfo[],
  },
};

export type Actions =
  |ResetFilterAction
  |SetFilterAction
  |FiltrateMoviesAction;
