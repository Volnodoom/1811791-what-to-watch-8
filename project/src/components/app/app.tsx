import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import Main from '../main/main';
import Player from '../player/player';
import AddReview from '../movie-add-review/add-review';
import MovieCard from '../movie-card/movie-card';
import MyList from '../mylist/my-list';
import SignIn from '../sign-in/sign-in';
import { AppRoute, CardState } from '../const/const';
import PrivateRoute from '../routing/private-route';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { isAuthUnKnown } from '../../utils/site-flags';
import browserHistory from '../routing/browser-history';
import * as selectors from '../../store/selectors';
import PageIsNotAvailable from '../routing/page-is-not-available';
import { Redirect } from 'react-router';

function App(): JSX.Element {
  const films = useSelector(selectors.getMovies);
  const authorizationStatus = useSelector(selectors.getAuthorizationStatus);
  const isDataLoaded = useSelector(selectors.getLoadedDataStatus);

  if (isAuthUnKnown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route
          exact
          path={AppRoute.Main}
          render={({history}) => (
            <Main
              onPlayVideoClick={(id: string|number) => history.push(AppRoute.Player(id))}
            />
          )}
        />
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          render={() => (
            <MyList />)}
        />
        <Route
          exact
          path={AppRoute.Movie()}
          render={({history}) => (
            <MovieCard
              cardTab={CardState.Overview}
              onPlayVideoClick={(id: string|number) => history.push(AppRoute.Player(id))}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.Details()}
          render={({history}) => (
            <MovieCard
              cardTab={CardState.Details}
              onPlayVideoClick={(id: string|number) => history.push(AppRoute.Player(id))}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.Reviews()}
          render={({history}) => (
            <MovieCard
              cardTab={CardState.Reviews}
              onPlayVideoClick={(id: string|number) => history.push(AppRoute.Player(id))}
            />
          )}
        />
        <PrivateRoute
          exact
          path={AppRoute.AddReview()}
          render={() => (
            <AddReview
              movieList={films}
            />)}
        />
        <Route
          exact
          path={AppRoute.Player()}
          render={({history}) => (
            <Player
              onExitClick={(id: string|number) => history.push(AppRoute.Movie(id))}
            />
          )}
        />
        <Route
          exact
          path={AppRoute.PageIsNotAvailable}
        >
          <PageIsNotAvailable/>
        </Route>
        <Route>
          <Redirect to={AppRoute.PageIsNotAvailable}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
