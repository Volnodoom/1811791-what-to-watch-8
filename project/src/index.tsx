import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { FilmData } from './components/const/mockup';


ReactDOM.render(
  <React.StrictMode>
    <App film= {FilmData}/>;
  </React.StrictMode>,
  document.getElementById('root'));
