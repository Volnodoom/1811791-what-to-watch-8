import { MovieInfo } from '../components/types/types';
import { ActionType, GetAllGenresAction, GetSpecificGenreAction } from '../components/types/action-types';

export const getAllGenres = (allAvailableMovies: MovieInfo[]): GetAllGenresAction  => ({
  type: ActionType.AllGenres,
  payload: allAvailableMovies,
});

export const getSpecificGenre = (specificGenre: string): GetSpecificGenreAction  => ({
  type: ActionType.SpecificGenre,
  payload: specificGenre,
});
