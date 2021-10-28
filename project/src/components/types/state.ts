import { ListOfGenres } from '../const/const';
import { MovieInfo } from './types';

export type State = {
  films: MovieInfo[],
  activeGenre: ListOfGenres,
}
