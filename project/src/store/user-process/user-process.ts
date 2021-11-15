import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/const/const';
import { UserProcess } from '../../components/types/state';
import { requireAuthorization, requireLogout } from '../action';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus =  AuthorizationStatus.NoAuth;
    });
});

export {userProcess};
