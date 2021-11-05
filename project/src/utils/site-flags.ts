import { AuthorizationStatus } from '../components/const/const';

export const isAuthUnKnown = (authorizationStatus:AuthorizationStatus): boolean => (
  authorizationStatus === AuthorizationStatus.Unknown
);
