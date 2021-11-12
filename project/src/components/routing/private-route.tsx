import { connect, ConnectedProps } from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { State } from '../types/state';

export type PrivateRouteProps =  RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = ({USER}: State) => ({
  authorizationStatus: USER.authorizationStatus,
});

const connector =connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & PrivateRouteProps;

function PrivateRoute(props: ConnectedComponentProps):JSX.Element {
  const {exact, path, render, authorizationStatus } = props;

  return(
    <Route
      exact={exact}
      path={path}
      render={authorizationStatus === AuthorizationStatus.Auth ? render : () => <Redirect to={AppRoute.SignIn} />}
    />);
}

export  {PrivateRoute};
export default connector(PrivateRoute);
