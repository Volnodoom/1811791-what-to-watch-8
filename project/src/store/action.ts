import { ActionType } from '../components/types/action-types';

export const resetMovieFilter = () => ({
  type: ActionType.ResetFilter,
} as const);

export const onFilmsFiltration = (specificGenre?: string) => ({
  type: ActionType.FiltrateMovies,
  payload: {
    genreKind: specificGenre,
  },
} as const);
