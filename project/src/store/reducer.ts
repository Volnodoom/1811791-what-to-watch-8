import { AuthorizationStatus, ListOfGenres } from '../components/const/const';
import { Actions, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { MovieInfo } from '../components/types/types';

const ALL_GENRES = 'All genres';

const initialState = {
  films: [],
  activeGenre: ListOfGenres.AllGenres,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.FiltrateMovies:
    {if (action.payload.genreKind === (undefined || ALL_GENRES)) {
      return {
        ...state,
        activeGenre: initialState.activeGenre,
        films: initialState.films,
      };
    } else {
      return {
        ...state,
        activeGenre: action.payload.genreKind,
        films: initialState.films.filter((film: MovieInfo) => film.genre === action.payload.genreKind),
      };
    }}
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    default:
      return state;
  }
};


export {reducer};
