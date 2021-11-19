export const BACKEND_URL = 'https://8.react.pages.academy/wtw';
export const REQUEST_TIMEOUT = 5000;
export const ALL_GENRES = 'All genres';

export const KindOfButton = {
  AddToMyList: 'AddToMyList',
  InMyList: 'InMyList',
}as const;

export const AppRoute = {
  Main: '/',
  SignIn: '/login',
  MyList: '/mylist',
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
  Films: '/films',
  Login: '/login',
  Logout: '/logout',
  Promo: '/promo',
  CommentsGet: (filmId: number) => `/comments/${filmId}`,
} as const;

export enum TimeDifferentiation {
  Total = 'Total time',
  LeftTime = 'Time left to watch',
}
