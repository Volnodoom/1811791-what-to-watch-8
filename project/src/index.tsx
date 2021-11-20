import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { AuthorizationStatus } from './components/const/const';
import { createAPI } from './services/api';
import { requireAuthorization } from './store/action';
import { fetchCheckAuth, fetchMovies, fetchMyFavorite, fetchPromoMovie } from './store/api-actions';
import { redirect } from './store/middlewares/redirect';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { rootReducer } from './store/root-reducer';
import { configureStore } from '@reduxjs/toolkit';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchCheckAuth());
store.dispatch(fetchMovies());
store.dispatch(fetchPromoMovie());
store.dispatch(fetchMyFavorite());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
