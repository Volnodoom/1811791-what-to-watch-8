import { AuthorizationStatus } from '../components/const/const';
import { Actions, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { MovieInfo } from '../components/types/types';

const ALL_GENRES = 'All genres';

const initialState: State = {
  films: [],
  promoFilm: undefined,
  activeGenre: ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  comments: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.FiltrateMovies:
    {
      if (action.payload.genreKind === (undefined || ALL_GENRES)) {
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
      }
    }

    case ActionType.LoadMovies:{
      const {films} = action.payload;
      initialState.films = films;
      return {
        ...state,
        films,
      };
    }

    case ActionType.LoadPromoMovie:{
      const promoFilm = action.payload.promoFilm;
      initialState.promoFilm = promoFilm;
      return {
        ...state,
        promoFilm,
      };
    }

    // case ActionType.LoadCommentsToMovie:{
    //   const {comments} = action.payload;
    //   initialState.comments = comments;
    //   return {
    //     ...state,
    //     comments,
    //   };
    // }

    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
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
