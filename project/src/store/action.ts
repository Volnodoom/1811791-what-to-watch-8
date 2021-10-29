import { MovieInfo } from '../components/types/types';
import { ActionType, ResetFilterAction, SetFilterAction, FiltrateMoviesAction } from '../components/types/action-types';

export const resetMovieFilter = ():ResetFilterAction => ({
  type: ActionType.ResetFilter,
});

export const setMovieFilter = (specificGenre: string):SetFilterAction => ({
  type: ActionType.SetFilter,
  payload: {
    genreKind: specificGenre,
  },
});

export const filtrateMovies = (specificGenre: string, films:MovieInfo[]): FiltrateMoviesAction => ({
  type: ActionType.FiltrateMovies,
  payload: {
    genreKind: specificGenre,
    arrayData: films,
  },
});
