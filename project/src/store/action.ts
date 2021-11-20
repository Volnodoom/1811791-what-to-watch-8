import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../components/const/const';
import { ActionType } from '../components/types/action-types';
import { Comment, MovieInfo, ValuesOfAppRoute } from '../components/types/types';

export const requireLogout = createAction (ActionType.RequireLogout);

export const loadMovies = createAction (
  ActionType.LoadMovies,
  (films: MovieInfo[]) => ({payload: {films}}),
);

export const loadPromoMovie = createAction (
  ActionType.LoadPromoMovie,
  (promoFilm: MovieInfo) => ({payload: {promoFilm}}),
);

export const loadCommentsToMovie = createAction (
  ActionType.LoadCommentsToMovie,
  (comments: Comment[]) => ({payload: {comments}}),
);

export const requireAuthorization = createAction (
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({payload: authStatus}),
);

export const redirectToRout = createAction (
  ActionType.RedirectToRoute,
  (url: ValuesOfAppRoute) => ({payload: url}),
);

export const updateMyFavoriteMovies = createAction (
  ActionType.UpdateMyFavoriteMovies,
  (filmId: number, actionToFilm: number) => ({payload: filmId, actionToFilm}),
);
