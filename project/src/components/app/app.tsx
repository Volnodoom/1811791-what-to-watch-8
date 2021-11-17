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
import { useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';
import { isAuthUnKnown } from '../../utils/site-flags';
import browserHistory from '../routing/browser-history';
import * as selectors from '../../store/selectors';

function App(): JSX.Element {
  const films = useSelector(selectors.getFilms);
  const authorizationStatus = useSelector(selectors.getAuthorizationStatus);
  const isDataLoaded = useSelector(selectors.getLoadedDataStatus);

  const getMyMovies = films.filter((film) => film.isFavorite);

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
            <Mylist
              movieList={getMyMovies}
            />)}
        />
        <Route
          exact
          path={AppRoute.Movie()}
          render={({history}) => (
            <MovieCard
              cardTab={CardState.Overview}
              movieList={films}
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
              movieList={films}
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
              movieList={films}
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
        >
        </PrivateRoute>
        <Route
          exact
          path={AppRoute.Player()}
          render={({history}) => (
            <Player
              onExitClick={(id: string|number) => history.push(AppRoute.Movie(id))}
            />
          )}
        />
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
