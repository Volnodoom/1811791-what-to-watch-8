import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const filmData = {
  poster: 'img/bg-the-grand-budapest-hotel.jpg',
  altPoster:'The Grand Budapest Hotel poster',
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  urlMovie: 'film-page.html',
  privateInfoWeb: {
    isInMyList: false,
    hasAddReview: false,
    isGenreActive: false,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App
      film = {filmData}
    />
  </React.StrictMode>,
  document.getElementById('root'));
