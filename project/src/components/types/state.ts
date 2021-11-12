import { RootState } from '../../store/root-reducer';
import { AuthorizationStatus } from '../const/const';
import { Comment, MovieInfo } from './types';

export type State = RootState;

export type FilmsData = {
  films: MovieInfo[] | [],
  promoFilm?: MovieInfo,
  comments: Comment[] | [],
  genreList: Set<string> | [],
  filtratedFilms: MovieInfo[] | [],
}

export type FilmsProcess = {
  films: MovieInfo[] | [],
  activeGenre?: string,
  filtratedFilms: MovieInfo[] | [],
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
}
