import { Actions, ActionType } from '../../components/types/action-types';
import { FilmsData } from '../../components/types/state';

const initialState: FilmsData = {
  films: [],
  promoFilm: undefined,
  comments: [],
  isDataLoaded: false,
};

const filmsData = (state = initialState, action: Actions): FilmsData => {
  switch (action.type) {
    case ActionType.LoadMovies:{
      const {films} = action.payload;
      return {
        ...state,
        films,
        isDataLoaded: true,
      };
    }

    case ActionType.LoadPromoMovie:{
      const promoFilm = action.payload.promoFilm;
      return {
        ...state,
        promoFilm,
      };
    }

    case ActionType.LoadCommentsToMovie:{
      const {comments} = action.payload;
      return {
        ...state,
        comments,
      };
    }
    default:
      return state;
  }
};

export {filmsData};
