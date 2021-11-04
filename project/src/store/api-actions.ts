import { APIRoute, AuthorizationStatus } from '../components/const/const';
import { ThunkActionResult } from '../components/types/action-types';
import { AuthData, RawFilm } from '../components/types/types';
import { adaptMovieToClient } from '../services/adapter';
import { dropToken, saveToken, Token } from '../services/token';
import { onLoadMovies, onLoadPromoMovie, onRequireAuthorization, onRequireLogout } from './action';


export const fetchMoviesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm[]>(APIRoute.Films);
    const adaptedData = data.map((arrayData) => adaptMovieToClient(arrayData));
    dispatch(onLoadMovies(adaptedData));
  };

export const fetchPromoMovieAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<RawFilm>(APIRoute.Promo);
    const adaptedData = adaptMovieToClient(data);
    dispatch(onLoadPromoMovie(adaptedData));
  };

// export const fetchCommentsToMovieAction = (filmId: number): ThunkActionResult =>
//   async (dispatch, _getState, api): Promise<void> => {
//     const {data} = await api.get<Comment[]>(APIRoute.CommentsGet(filmId));
//     dispatch(onLoadCommentsToMovie(data));
//   };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getSate, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(onRequireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(onRequireAuthorization(AuthorizationStatus.Auth));
  };

export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(onRequireLogout());
  };
