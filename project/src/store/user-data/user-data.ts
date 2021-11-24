import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../components/const/const';
import { UserData, UserProcess } from '../../components/types/state';
import { loadUserInfo, requireAuthorization, requireLogout } from '../action';

const initialState: UserProcess & UserData = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userName: '',
  userAvatar: '',
};

const userData = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus =  AuthorizationStatus.NoAuth;
    })
    .addCase( loadUserInfo, (state, action) => {
      const {userAvatar, userName} = action.payload.userInfo;
      state.userAvatar = userAvatar;
      state.userName = userName;
    });
});

export {userData};
