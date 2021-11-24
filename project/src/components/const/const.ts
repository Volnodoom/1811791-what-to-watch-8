import { PostMyListData } from '../types/types';

export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const ALL_GENRES = 'All genres';

export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
  PageIsNotAvailable: '/PageIsNotAvailable',
  Movie: (id: string | number = ':id') => `/films/${id}`,
  Details: (id: string | number = ':id') => `/films/${id}/details`,
  Reviews: (id: string | number = ':id') => `/films/${id}/reviews`,
  AddReview: (id: string | number = ':id') => `/films/${id}/review`,
  Player : (id: string | number = ':id') => `/player/${id}`,
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CardState = {
  Overview: 'OVERVIEW',
  Details: 'DETAILS',
  Reviews: 'REVIEWS',
} as const;

export const MatchingComponent = {
  MovieCard: 'MovieCard',
  Main: 'Main',
  Mylist: 'Mylist',
} as const;

export const APIRoute = {
  Movies: '/films',
  Login: '/login',
  Logout: '/logout',
  Promo: '/promo',
  CommentsGetPost: (filmId: number | string) => `/comments/${filmId}`,
  MyFavoritePost: ({id: filmId, actionToFilm}: PostMyListData ) => `/favorite/${filmId}/${actionToFilm}`,
  MyFavoriteGet: '/favorite',
  OneMovie: (filmId: number | string) => `/films/${filmId}`,
  SimilarMovies: (filmId: number | string) => `/films/${filmId}/similar`,
} as const;

export enum TimeDifferentiation {
  Total = 'Total time',
  LeftTime = 'Time left to watch',
}

export enum LineOfUpdate {
  Films = 'films',
  MyFavorite = 'myFavoriteMovies',
}

export enum CommentsStatus {
  Success = 'success',
  Failed = 'failed',
  NotProceeded  = 'not in the process',
}

export const STRING_MOVIE_RATING = [
  {
    value: 0,
    stringValue: 'Bad',
  },
  {
    value: 3,
    stringValue: 'Normal',
  },
  {
    value: 5,
    stringValue: 'Good',
  },
  {
    value: 8,
    stringValue: 'Very good',
  },
  {
    value: 10,
    stringValue: 'Awesome',
  },
] as const;
