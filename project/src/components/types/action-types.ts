import { ListOfGenres } from '../const/const';
import { MovieInfo } from './types';

export enum ActionType {
  AllGenres = 'filter/allGenres',
  SpecificGenre = 'filter/specificGenre',
}

export type GetAllGenresAction = {
  type: ActionType.AllGenres,
  payload:
  {
    genreKind: ListOfGenres.AllGenres,
    arrayData: MovieInfo[],
  },
};

export type GetSpecificGenreAction  = {
  type: ActionType.SpecificGenre,
  payload:
  {
    genreKind: ListOfGenres,
    arrayData: MovieInfo[],
  },
};

export type Action = GetAllGenresAction | GetSpecificGenreAction;
