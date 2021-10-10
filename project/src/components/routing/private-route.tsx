import {Route, Redirect} from 'react-router-dom';
import { AppRout } from '../const/const';
import { PrivateRouteProps } from '../types/types';

function PrivateRoute(props: PrivateRouteProps):JSX.Element {
  const {exact, path, render } = props;
  const {isLogged} = props.film.privateInfoWeb;

  return(
    <Route
      exact={exact}
      path={path}
      render={() => (
        isLogged
          ? render()
          : <Redirect to={AppRout.SignIn} />
      )}
    />
  );
}

export default PrivateRoute;
