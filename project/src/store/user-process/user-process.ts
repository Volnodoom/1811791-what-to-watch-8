import { AuthorizationStatus } from '../../components/const/const';
import { Actions, ActionType } from '../../components/types/action-types';
import { UserProcess } from '../../components/types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.RequireLogout:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };

    default:
      return state;
  }
};

export {userProcess};
