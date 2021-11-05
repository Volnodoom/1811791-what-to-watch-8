import { APIRoute, AppRoute, AuthorizationStatus } from '../components/const/const';
import { ThunkActionResult } from '../components/types/action-types';
import { AuthData, Comment, RawFilm } from '../components/types/types';
import { adaptMovieToClient } from '../services/adapter';
import { dropToken, saveToken, Token } from '../services/token';
import {
  loadCommentsToMovie,
  loadMovies,
  loadPromoMovie,
  redirectToRout,
  requireAuthorization,
  requireLogout
} from './action';


export const fetchMovies = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm[]>(APIRoute.Films);
    const adaptedData = data.map((arrayData) => adaptMovieToClient(arrayData));
    dispatch(loadMovies(adaptedData));
  };

export const fetchPromoMovie = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm>(APIRoute.Promo);
    const adaptedData = adaptMovieToClient(data);
    dispatch(loadPromoMovie(adaptedData));
  };

export const fetchCommentsToMovie = (filmId: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Comment[]>(APIRoute.CommentsGet(filmId));
    dispatch(loadCommentsToMovie(data));
  };

export const fetchCheckAuth = (): ThunkActionResult =>
  async (dispatch, _getSate, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const fetchLogin = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRout(AppRoute.Main));
  };

export const fetchLogout = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
