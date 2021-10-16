import {Route, Redirect, RouteProps} from 'react-router-dom';
import { appRoute, AuthorizationStatus } from '../const/const';

export type PrivateRouteProps =  RouteProps & {
  render: () => JSX.Element;
  authorizationStatus: string;
}

function PrivateRoute(props: PrivateRouteProps):JSX.Element {
  const {exact, path, render, authorizationStatus } = props;

  return(
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={appRoute.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
