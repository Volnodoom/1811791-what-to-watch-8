import { connect, ConnectedProps } from 'react-redux';
import {Route, Redirect, RouteProps} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { State } from '../types/state';
import * as selectors from '../../store/selectors';

export type PrivateRouteProps =  RouteProps & {
  authorizationStatus: AuthorizationStatus;
}

const mapStateToProps = (state: State) => ({
  authorizationStatus: selectors.getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps);
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
