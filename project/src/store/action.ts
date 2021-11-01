import { AuthorizationStatus } from '../components/const/const';
import { ActionType } from '../components/types/action-types';

export const onFilmsFiltration = (specificGenre?: string) => ({
  type: ActionType.FiltrateMovies,
  payload: {
    genreKind: specificGenre,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
}as const);
