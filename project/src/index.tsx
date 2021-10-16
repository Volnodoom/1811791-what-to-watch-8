import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { FilmData } from './mocks/film-data';
import { Films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App film={FilmData} movieList={Films} authorizationStatus={AuthorizationStatus.Auth}/>
  </React.StrictMode>,
  document.getElementById('root'));
