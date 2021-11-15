import {Middleware} from 'redux';
import browserHistory from '../../components/routing/browser-history';
import { ActionType } from '../../components/types/action-types';
import { State } from '../../components/types/state';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
