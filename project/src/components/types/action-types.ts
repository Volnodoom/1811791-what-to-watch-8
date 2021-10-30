import { onFilmsFiltration, resetMovieFilter } from '../../store/action';

export enum ActionType {
  ResetFilter = 'filter/resetFilter',
  FiltrateMovies = 'filter/filtrateMovies',
}

export type Actions =
  |ReturnType <typeof resetMovieFilter>
  |ReturnType <typeof onFilmsFiltration>;
