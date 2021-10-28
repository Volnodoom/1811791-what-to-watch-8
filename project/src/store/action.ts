import { MovieInfo } from '../components/types/types';
import { ActionType, GetAllGenresAction, GetSpecificGenreAction } from '../components/types/action-types';
import { ListOfGenres } from '../components/const/const';

export const getAllGenres = (allAvailableMovies: MovieInfo[]): GetAllGenresAction  => ({
  type: ActionType.AllGenres,
  payload:
  {
    genreKind: ListOfGenres.AllGenres,
    arrayData: allAvailableMovies,
  },
});

export const getSpecificGenre = (specificGenre: ListOfGenres, films:MovieInfo[]): GetSpecificGenreAction  => ({
  type: ActionType.SpecificGenre,
  payload: {
    genreKind: specificGenre,
    arrayData: films,
  },
});
