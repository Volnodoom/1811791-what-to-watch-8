import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadMovies = 'data/loadMovies',
  LoadPromoMovie = 'data/loadPromoMovie',
  LoadCommentsToMovie = 'data/commentsToMovie',
  RedirectToRoute = 'signIn/redirectToRoute'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>
