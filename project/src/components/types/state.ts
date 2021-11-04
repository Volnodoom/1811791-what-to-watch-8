import { AuthorizationStatus } from '../const/const';
import { Comment, MovieInfo } from './types';

export type State = {
  films: MovieInfo[] | [],
  promoFilm?: MovieInfo,
  activeGenre?: string,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  comments: Comment[] | [],
}
