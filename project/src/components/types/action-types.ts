import { filtrateMovies, resetMovieFilter, setMovieFilter } from '../../store/action';

export enum ActionType {
  ResetFilter = 'filter/resetFilter',
  SetFilter = 'filter/setFilter',
  FiltrateMovies = 'filter/filtrateMovies',
}

export type Actions =
  |ReturnType <typeof resetMovieFilter>
  |ReturnType <typeof setMovieFilter>
  |ReturnType <typeof filtrateMovies>;
