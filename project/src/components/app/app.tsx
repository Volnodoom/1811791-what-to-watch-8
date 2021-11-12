import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Error404 from '../routing/Error404';
import Player from '../player/player';
import AddReview from '../movie-add-review/add-review';
import MovieCard from '../movie-card/movie-card';
import Mylist from '../mylist/mylist';
import SignIn from '../sign-in/sign-in';
import { AppRoute, CardState } from '../const/const';
import PrivateRoute from '../routing/private-route';
import { State } from '../types/state';
import { connect, ConnectedProps } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { isAuthUnKnown } from '../../utils/site-flags';
import browserHistory from '../routing/browser-history';

const mapStateToProps = ({DATA, USER}: State) => ({
  films: DATA.films,
  authorizationStatus: USER.authorizationStatus,
  isDataLoaded: USER.isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {films, authorizationStatus, isDataLoaded} = props;
  const getMyMovies = films.filter((film) => film.isFavorite);

  if (isAuthUnKnown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => (
            <Mylist
              movieList={getMyMovies}
            />)}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Movie()}>
          <MovieCard
            cardTab={CardState.Overview}
            movieList={films}
          />
        </Route>
        <Route exact path={AppRoute.Details()}>
          <MovieCard
            cardTab={CardState.Details}
            movieList={films}
          />
        </Route>
        <Route exact path={AppRoute.Reviews()}>
          <MovieCard
            cardTab={CardState.Reviews}
            movieList={films}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview()}
          render={() => (
            <AddReview
              movieList={films}
            />)}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Player()}>
          <Player />
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
