import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { mockComments } from './mocks/comments';
import { FilmData } from './mocks/film-data';
import { Films } from './mocks/films';
import { reducer } from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        film={FilmData}
        movieList={Films}
        authorizationStatus={AuthorizationStatus.Auth}
        comments={mockComments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
