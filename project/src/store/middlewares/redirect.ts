import {Middleware} from 'redux';
import browserHistory from '../../components/routing/browser-history';
import { ActionType } from '../../components/types/action-types';
import {reducer} from '../reducer';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
