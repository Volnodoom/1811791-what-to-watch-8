import { ListOfGenres } from '../components/const/const';
import { Actions, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { Films } from '../mocks/films';

const ALL_GENRES = 'All genres';

const initialState = {
  films: Films,
  activeGenre: ListOfGenres.AllGenres,
} as const;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.FiltrateMovies:
    {if (action.payload.genreKind === (undefined || ALL_GENRES)) {
      return { ...initialState};
    } else {
      return {
        activeGenre: action.payload.genreKind,
        films: initialState.films.filter((film) => film.genre === state.activeGenre),
      };
    }}
    default:
      return state;
  }
};


export {reducer};
