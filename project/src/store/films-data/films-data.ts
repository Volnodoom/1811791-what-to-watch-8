import { Actions, ActionType } from '../../components/types/action-types';
import { FilmsData } from '../../components/types/state';
import { makeGenreNameLine } from '../../utils/common';


const initialState: FilmsData = {
  films: [],
  promoFilm: undefined,
  comments: [],
  genreList: [],
  filtratedFilms: [],
};

const filmsData = (state = initialState, action: Actions): FilmsData => {
  switch (action.type) {
    case ActionType.LoadMovies:{
      const {films} = action.payload;
      const genreList = makeGenreNameLine(films);
      return {
        ...state,
        films,
        genreList,
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
