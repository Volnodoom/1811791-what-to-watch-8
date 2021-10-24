import { MovieInfo } from './types';

export enum ActionType {
  AllGenres = 'filter/allGenres',
  SpecificGenre = 'filter/specificGenre',
}

export type GetAllGenresAction = {
  type: ActionType.AllGenres,
  payload: MovieInfo[],
};

export type GetSpecificGenreAction = () => {
  type: ActionType.SpecificGenre,
  payload: string,
};
