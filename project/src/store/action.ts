import { MovieInfo } from '../components/types/types';
import { ActionType } from '../components/types/action-types';

export const resetMovieFilter = () => ({
  type: ActionType.ResetFilter,
} as const);

export const setMovieFilter = (specificGenre: string) => ({
  type: ActionType.SetFilter,
  payload: {
    genreKind: specificGenre,
  },
} as const);

export const filtrateMovies = (films:MovieInfo[]) => ({
  type: ActionType.FiltrateMovies,
  payload: {
    arrayData: films,
  },
} as const);
