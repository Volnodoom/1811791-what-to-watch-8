import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { FilmData } from './components/const/mockup';

ReactDOM.render(
  <React.StrictMode>
    <App film={FilmData} authorizationStatus={AuthorizationStatus.NoAuth}/>
  </React.StrictMode>,
  document.getElementById('root'));
