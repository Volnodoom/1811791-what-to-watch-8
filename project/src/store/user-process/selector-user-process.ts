import { AuthorizationStatus } from '../../components/const/const';
import { State } from '../../components/types/state';
import { NameSpace } from '../root-reducer';

export const selectAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.user].authorizationStatus;
