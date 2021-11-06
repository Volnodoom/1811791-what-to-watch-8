import { AuthorizationStatus } from '../const/const';
import { Comment, MovieInfo } from './types';

export type State = {
  films: MovieInfo[] | [],
  filtratedFilms: MovieInfo[] | [],
  promoFilm?: MovieInfo,
  genreList: Set<string> | [],
  activeGenre?: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  comments: Comment[] | [],
}
