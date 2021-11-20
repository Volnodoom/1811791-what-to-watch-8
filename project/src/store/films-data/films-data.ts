import { createReducer } from '@reduxjs/toolkit';
import { FilmsData } from '../../components/types/state';
import { loadCommentsToMovie, loadMovies, loadMyFavoriteMovies, loadPromoMovie } from '../action';

const initialState: FilmsData = {
  films: [],
  promoFilm: undefined,
  comments: [],
  isDataLoaded: false,
  myFavoriteMovies: [],
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      const {films} = action.payload;
      state.films = films;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoMovie, (state, action) => {
      const promoFilm = action.payload.promoFilm;
      state.promoFilm = promoFilm;
    })
    .addCase(loadCommentsToMovie, (state, action) => {
      const {comments} = action.payload;
      state.comments = comments;
    })
    .addCase(loadMyFavoriteMovies, (state, action) => {
      const {myFavoriteMovies} = action.payload;
      state.myFavoriteMovies = myFavoriteMovies;
    });
});

export {filmsData};
