import { combineReducers } from 'redux';
import { filmsData } from './films-data/films-data';
import { userData } from './user-data/user-data';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmsData,
  [NameSpace.user]: userData,
});

export type RootState = ReturnType<typeof rootReducer>;
