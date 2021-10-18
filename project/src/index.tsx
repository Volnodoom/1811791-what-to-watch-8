import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { mockComments } from './mocks/comments';
import { FilmData } from './mocks/film-data';
import { Films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      film={FilmData}
      movieList={Films}
      authorizationStatus={AuthorizationStatus.Auth}
      comments={mockComments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
