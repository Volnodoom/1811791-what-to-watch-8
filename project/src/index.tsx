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
import { onRequireAuthorization } from './store/action';
import { ThunkAppDispatch } from './components/types/action-types';
import { checkAuthAction, fetchMoviesAction, fetchPromoMovieAction } from './store/api-actions';

const api = createAPI(
  () => store.dispatch(onRequireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchMoviesAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoMovieAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
