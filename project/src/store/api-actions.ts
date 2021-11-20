import { APIRoute, AppRoute, AuthorizationStatus } from '../components/const/const';
import { ThunkActionResult } from '../components/types/action-types';
import { AuthData, Comment, PostMyListData, RawFilm } from '../components/types/types';
import { adaptMovieToClient } from '../services/adapter';
import { dropToken, saveToken, Token } from '../services/token';
import {toast} from 'react-toastify';
import {
  loadCommentsToMovie,
  loadMovies,
  loadMyFavoriteMovies,
  loadPromoMovie,
  redirectToRout,
  requireAuthorization,
  requireLogout
} from './action';

const AUTH_FAIL_MESSAGE = 'Assess to some pages on the web-site has only authorized users';
const TOAST_CLOSE = 5000;
const TOAST_THEME = 'colored';

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
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE, {
        autoClose: TOAST_CLOSE,
        theme: TOAST_THEME,
        position: toast.POSITION.TOP_CENTER,
      });
    }
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

export const postMyFavorite = (id: number | string, actionToFilm: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.post<PostMyListData>(APIRoute.MyFavoritePost({id,actionToFilm}));
    } catch {
      dispatch(redirectToRout(AppRoute.SignIn));
    }
  };

export const fetchMyFavorite = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<RawFilm[]>(APIRoute.MyFavoriteGet);
    const adaptedData = data.map((arrayData) => adaptMovieToClient(arrayData));
    dispatch(loadMyFavoriteMovies(adaptedData));
  };
