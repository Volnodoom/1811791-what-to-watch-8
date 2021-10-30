import { ListOfGenres } from '../components/const/const';
import { Actions, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { Films } from '../mocks/films';

const initialState = {
  films: Films,
  activeGenre: ListOfGenres.AllGenres,
} as const;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ResetFilter:
      return { ...initialState};
    case ActionType.SetFilter:
      return {
        ...state,
        activeGenre: action.payload.genreKind,
      };
    case ActionType.FiltrateMovies:
      return {
        ...state,
        films: initialState.films.filter((film) => film.genre === state.activeGenre),
      };
    default:
      return state;
  }
};


export {reducer};
