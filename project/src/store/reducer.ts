import { ListOfGenres } from '../components/const/const';
import { Action, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { Films } from '../mocks/films';

const initialState = {
  films: Films,
  activeGenre: ListOfGenres.AllGenres,
} as const;

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.AllGenres:
      return {
        ...state,
        films: action.payload.arrayData,
        activeGenre: action.payload.genreKind,
      };
    case ActionType.SpecificGenre:
      return {
        ...state,
        films: action.payload.arrayData.filter((film) => film.genre === action.payload.genreKind),
        activeGenre: action.payload.genreKind,
      };
    default:
      return state;
  }
};


export {reducer};
