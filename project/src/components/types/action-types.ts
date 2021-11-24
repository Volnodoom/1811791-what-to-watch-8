import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';

export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RedirectToRoute = 'signIn/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadMovies = 'data/loadMovies',
  LoadOneMovie = 'data/loadOneMovie',
  LoadPromoMovie = 'data/loadPromoMovie',
  LoadCommentsToMovie = 'data/commentsToMovie',
  LoadSimilarMovie = 'data/similarMovie',
  LoadUserInfo = 'user/userInfo',
  UpdateCommentsData = 'data/comments/updateCommentsData',
  UpdateCommentsStatus = 'data/comments/Status',
  LoadMyFavoriteMovies = 'data/loadMyFavoriteMovies',
  UpdateMyFavoriteMovies = 'data/myFavorite/updateMylist',
  UpdateFilmsByFavoriteMovie = 'data/films/updateFilmsWithFavoriteMovie',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>
