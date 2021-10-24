import {Route, Redirect, RouteProps} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';

export type PrivateRouteProps =  RouteProps & {
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps):JSX.Element {
  const {exact, path, render, authorizationStatus } = props;

  return(
    <Route
      exact={exact}
      path={path}
      render={authorizationStatus === AuthorizationStatus.Auth ? render : () => <Redirect to={AppRoute.SignIn} />}
    />);
}

export default PrivateRoute;
