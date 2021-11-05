import { composeWithDevTools } from 'redux-devtools-extension';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { reducer } from './store/reducer';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { ThunkAppDispatch } from './components/types/action-types';
import { fetchCheckAuth, fetchMovies, fetchPromoMovie } from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchCheckAuth());
(store.dispatch as ThunkAppDispatch)(fetchMovies());
(store.dispatch as ThunkAppDispatch)(fetchPromoMovie());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
