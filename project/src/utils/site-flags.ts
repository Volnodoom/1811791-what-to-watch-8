import { AuthorizationStatus } from '../components/const/const';

export const isCheckedAuth = (authorizationStatus:AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Unknown
);
