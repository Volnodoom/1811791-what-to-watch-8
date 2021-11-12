import { ALL_GENRES } from '../../components/const/const';
import { Actions, ActionType } from '../../components/types/action-types';
import { FilmsProcess } from '../../components/types/state';
import { MovieInfo } from '../../components/types/types';


const initialState: FilmsProcess = {
  films: [],
  filtratedFilms: [],
  activeGenre: ALL_GENRES,
};

const filmsProcess = (state = initialState, action: Actions): FilmsProcess => {
  switch (action.type) {
    case ActionType.FiltrateMovies:
    {
      if (action.payload.genreKind ===  ALL_GENRES) {
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
    default:
      return state;
  }
};

export {filmsProcess};
