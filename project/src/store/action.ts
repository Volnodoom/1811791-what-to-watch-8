import { AuthorizationStatus } from '../components/const/const';
import { ActionType } from '../components/types/action-types';
import { Comment, MovieInfo } from '../components/types/types';

export const onFilmsFiltration = (specificGenre?: string) => ({
  type: ActionType.FiltrateMovies,
  payload: {
    genreKind: specificGenre,
  },
} as const);

export const onLoadMovies = (films: MovieInfo[]) => ({
  type: ActionType.LoadMovies,
  payload: {films},
} as const);

export const onLoadPromoMovie = (promoFilm: MovieInfo) => ({
  type: ActionType.LoadPromoMovie,
  payload: {promoFilm},
} as const);

export const loadCommentsToMovie = (comments: Comment[]) => ({
  type: ActionType.LoadCommentsToMovie,
  payload: {comments},
} as const);

export const onRequireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const onRequireLogout = () => ({
  type: ActionType.RequireLogout,
}as const);
