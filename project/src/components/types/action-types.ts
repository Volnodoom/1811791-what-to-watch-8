import { AxiosInstance } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import {
  getInitialGenreList,
  loadCommentsToMovie,
  onFilmsFiltration,
  loadMovies,
  loadPromoMovie,
  requireAuthorization,
  requireLogout} from '../../store/action';


export enum ActionType {
  FiltrateMovies = 'filter/filtrateMovies',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadMovies = 'data/LoadMovies',
  LoadPromoMovie = 'data/LoadPromoMovie',
  LoadCommentsToMovie = 'data/CommentsToMovie',
  InitialGenreList = 'filter/genreList',
}

export type Actions =
  |ReturnType <typeof onFilmsFiltration>
  |ReturnType <typeof requireAuthorization>
  |ReturnType <typeof requireLogout>
  |ReturnType <typeof loadPromoMovie>
  |ReturnType <typeof loadCommentsToMovie>
  |ReturnType <typeof getInitialGenreList>
  |ReturnType <typeof loadMovies>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>
