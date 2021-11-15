import { useSelector } from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import * as selectors from '../../store/selectors';

export type PrivateRouteProps =  RouteProps;

function PrivateRoute(props: PrivateRouteProps):JSX.Element {
  const {exact, path, render } = props;
  const authorizationStatus = useSelector(selectors.getAuthorizationStatus);

  return(
    <Route
      exact={exact}
      path={path}
      render={authorizationStatus === AuthorizationStatus.Auth ? render : () => <Redirect to={AppRoute.SignIn} />}
    />);
}

export default PrivateRoute;
