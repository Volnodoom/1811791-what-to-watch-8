import { MovieInfo } from './types';

export type State = {
  films: MovieInfo[],
  activeGenre: string | undefined,
}
