import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import {
  loadCommentsToMovie,
  onFilmsFiltration,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  requireLogout,
  redirectToRout} from '../../store/action';


export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadMovies = 'data/loadMovies',
  LoadPromoMovie = 'data/loadPromoMovie',
  LoadCommentsToMovie = 'data/commentsToMovie',
  RedirectToRoute = 'signIn/redirectToRoute'
}

export type Actions =
  |ReturnType <typeof onFilmsFiltration>
  |ReturnType <typeof requireAuthorization>
  |ReturnType <typeof requireLogout>
  |ReturnType <typeof loadPromoMovie>
  |ReturnType <typeof loadCommentsToMovie>
  |ReturnType <typeof redirectToRout>
  |ReturnType <typeof loadMovies>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>
