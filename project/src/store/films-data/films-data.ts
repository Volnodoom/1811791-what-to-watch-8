import { createReducer } from '@reduxjs/toolkit';
import { CommentsStatus, LineOfUpdate } from '../../components/const/const';
import { FilmsData } from '../../components/types/state';
import { findMovieIndexInArray, updateArrowData } from '../../utils/common';
import {loadCommentsToMovie, loadMovies, loadMyFavoriteMovies, loadOneMovie, loadPromoMovie, loadSimilarMovies, updateCommentsData, updateCommentsStatus, updateFilmsByFavoriteMovie, updateMyFavoriteMovies } from '../action';

const initialState: FilmsData = {
  films: [],
  promoFilm: undefined,
  comments: [],
  isDataLoaded: false,
  myFavoriteMovies: [],
  commentStatus: CommentsStatus.NotProceeded,
  similarMovies: [],
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadMovies, (state, action) => {
      const {films} = action.payload;
      state.films = films;
      state.isDataLoaded = true;
    })
    .addCase(loadOneMovie, (state, action) => {
      const film = action.payload.oneFilm;
      const id = film.id;
      state.films[findMovieIndexInArray(state.films, id)] = film;
    })
    .addCase(loadPromoMovie, (state, action) => {
      const promoFilm = action.payload.promoFilm;
      state.promoFilm = promoFilm;
    })
    .addCase(loadMyFavoriteMovies, (state, action) => {
      const {myFavoriteMovies} = action.payload;
      state.myFavoriteMovies = myFavoriteMovies;
    })
    .addCase(loadSimilarMovies, (state, action) => {
      const {similarMovies} = action.payload;
      state.similarMovies = similarMovies;
    })
    .addCase(loadCommentsToMovie, (state, action) => {
      const {comments} = action.payload;
      state.comments = comments;
    })
    .addCase(updateCommentsData, (state, action) => {
      const {comments} = action.payload;
      state.comments = comments;
    })
    .addCase(updateCommentsStatus, (state, action) => {
      const {commentStatus} = action.payload;
      state.commentStatus = commentStatus;
    })
    .addCase(updateMyFavoriteMovies, (state, action) => {
      const updatedFilm = action.payload.myFavoriteMovies;
      updateArrowData(state, updatedFilm, LineOfUpdate.MyFavorite);
    })
    .addCase(updateFilmsByFavoriteMovie, (state, action) => {
      const updatedFilm = action.payload.film;
      updateArrowData(state, updatedFilm, LineOfUpdate.Films);
    });
});

export {filmsData};
