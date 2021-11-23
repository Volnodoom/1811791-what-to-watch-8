import { APIRoute, AppRoute, AuthorizationStatus, CommentsStatus } from '../components/const/const';
import { ThunkActionResult } from '../components/types/action-types';
import { AuthData, Comment, CommentToServer, RawFilm, RawUserInfo } from '../components/types/types';
import { adaptMovieToClient, adaptUserInfoToClient } from '../services/adapter';
import { dropToken, saveToken } from '../services/token';
import {toast} from 'react-toastify';
import {
  checkCommentsUpdateStatus,
  loadCommentsToMovie,
  loadMovies,
  loadMyFavoriteMovies,
  loadPromoMovie,
  loadSimilarMovies,
  loadUserInfo,
  redirectToRout,
  requireAuthorization,
  requireLogout,
  updateCommentsData,
  updateFilmsByFavoriteMovie,
  updateMyFavoriteMovies
} from './action';


const AUTH_FAIL_MESSAGE = 'Assess to some pages on the web-site has only authorized users';
const POST_MESSAGE_FAIL = 'We faced some troubles updating your feedback, please retry or repeat it later';
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
    const {data} = await api.get<Comment[]>(APIRoute.CommentsGetPost(filmId));
    dispatch(loadCommentsToMovie(data));
  };

export const postComments= (id: number | string, commentData: CommentToServer): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<Comment[]>(APIRoute.CommentsGetPost(id), commentData);
      dispatch(updateCommentsData(data));
      dispatch(checkCommentsUpdateStatus(CommentsStatus.Success));
    } catch {
      toast.error(POST_MESSAGE_FAIL, {
        autoClose: TOAST_CLOSE,
        theme: TOAST_THEME,
        position: toast.POSITION.TOP_CENTER,
      });
      dispatch(checkCommentsUpdateStatus(CommentsStatus.Failed));
    }
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
    const {data} = await api.post<RawUserInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    const adaptedData = adaptUserInfoToClient(data);
    dispatch(loadUserInfo(adaptedData));
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
      const {data} = await api.post<RawFilm>(APIRoute.MyFavoritePost({id,actionToFilm}));
      const adaptedData = adaptMovieToClient(data);
      dispatch(updateMyFavoriteMovies(adaptedData));
      dispatch(updateFilmsByFavoriteMovie(adaptedData));
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

export const fetchSimilarMovie = (id: number | string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.get<RawFilm[]>(APIRoute.SimilarMovies(id));
    const adaptedData = data.map((arrayData) => adaptMovieToClient(arrayData));
    dispatch(loadSimilarMovies(adaptedData));
  };
