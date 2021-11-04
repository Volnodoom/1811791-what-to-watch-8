import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import {
  onFilmsFiltration,
  // onLoadCommentsToMovie,
  onLoadMovies,
  onLoadPromoMovie,
  onRequireAuthorization,
  onRequireLogout} from '../../store/action';


export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadMovies = 'data/LoadMovies',
  LoadPromoMovie = 'data/LoadPromoMovie',
  LoadCommentsToMovie = 'data/CommentsToMovie',
}

export type Actions =
  |ReturnType <typeof onFilmsFiltration>
  |ReturnType <typeof onRequireAuthorization>
  |ReturnType <typeof onRequireLogout>
  |ReturnType <typeof onLoadPromoMovie>
  // |ReturnType <typeof onLoadCommentsToMovie>
  |ReturnType <typeof onLoadMovies>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>
