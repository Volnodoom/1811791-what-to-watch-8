import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CommentsStatus } from '../components/const/const';
import { ActionType } from '../components/types/action-types';
import { UserData } from '../components/types/state';
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

export const loadOneMovie = createAction (
  ActionType.LoadOneMovie,
  (oneFilm: MovieInfo) => ({payload: {oneFilm}}),
);

export const loadCommentsToMovie = createAction (
  ActionType.LoadCommentsToMovie,
  (comments: Comment[]) => ({payload: {comments}}),
);

export const loadMyFavoriteMovies = createAction (
  ActionType.LoadMyFavoriteMovies,
  (myFavoriteMovies: MovieInfo[]) => ({payload: {myFavoriteMovies}}),
);

export const loadSimilarMovies = createAction (
  ActionType.LoadSimilarMovie,
  (similarMovies: MovieInfo[]) => ({payload: {similarMovies}}),
);

export const loadUserInfo = createAction (
  ActionType.LoadUserInfo,
  (userInfo: UserData) => ({payload: {userInfo}}),
);

export const updateCommentsData = createAction (
  ActionType.UpdateCommentsData,
  (comments: Comment[]) => ({payload: {comments}}),
);

export const updateCommentsStatus = createAction (
  ActionType.UpdateCommentsStatus,
  (commentStatus: CommentsStatus) => ({payload: {commentStatus}}),
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
  (myFavoriteMovies: MovieInfo) => ({payload: {myFavoriteMovies}}),
);

export const updateFilmsByFavoriteMovie = createAction (
  ActionType.UpdateFilmsByFavoriteMovie,
  (film: MovieInfo) => ({payload: {film}}),
);
