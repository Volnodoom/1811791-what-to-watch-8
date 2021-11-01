import { onFilmsFiltration, requireAuthorization, requireLogout } from '../../store/action';

export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  |ReturnType <typeof onFilmsFiltration>
  |ReturnType <typeof requireAuthorization>
  |ReturnType <typeof requireLogout>;
