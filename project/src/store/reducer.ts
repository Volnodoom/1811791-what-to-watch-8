import { ALL_GENRES, AuthorizationStatus } from '../components/const/const';
import { Actions, ActionType } from '../components/types/action-types';
import { State } from '../components/types/state';
import { MovieInfo } from '../components/types/types';
import { makeGenreNameLine } from '../utils/common';

const initialState: State = {
  films: [],
  filtratedFilms: [],
  promoFilm: undefined,
  genreList: [],
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
          activeGenre: ALL_GENRES,
          filtratedFilms: state.films,
        };
      } else {
        return {
          ...state,
          activeGenre: action.payload.genreKind,
          filtratedFilms: state.films.filter((film: MovieInfo) => film.genre === action.payload.genreKind),
        };
      }
    }

    case ActionType.LoadMovies:{
      const {films} = action.payload;
      return {
        ...state,
        films,
        filtratedFilms: films,
      };
    }

    case ActionType.LoadPromoMovie:{
      const promoFilm = action.payload.promoFilm;
      return {
        ...state,
        promoFilm,
      };
    }

    case ActionType.InitialGenreList:{
      const {films} = action.payload;
      const genreList = makeGenreNameLine(films);
      return {
        ...state,
        genreList,
      };
    }

    case ActionType.LoadCommentsToMovie:{
      const {comments} = action.payload;
      return {
        ...state,
        comments,
      };
    }

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
