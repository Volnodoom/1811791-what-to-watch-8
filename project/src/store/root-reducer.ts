import { combineReducers } from 'redux';
import { filmsData } from './films-data/films-data';
import { filmsProcess } from './films-process/films-process';
import { userProcess } from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  films = 'FILMS',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsData,
  [NameSpace.films]: filmsProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
