import {Switch, Route, BrowserRouter} from 'react-router-dom';
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
import { Dispatch } from 'redux';
import { MovieInfo } from '../types/types';
import { getInitialGenreList } from '../../store/action';
import { Actions } from '../types/action-types';
import { useEffect } from 'react';

const mapStateToProps = ({authorizationStatus, isDataLoaded, films}: State) => ({
  films,
  authorizationStatus,
  isDataLoaded,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  setInitialGenreList(films: MovieInfo[]) {
    dispatch(getInitialGenreList(films));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {films, authorizationStatus, isDataLoaded, setInitialGenreList} = props;
  const getMyMovies = films.filter((film) => film.isFavorite);

  useEffect(() => setInitialGenreList(films));

  if (isAuthUnKnown(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          authorizationStatus={authorizationStatus}
          render={() => (
            <Mylist
              authorizationStatus={authorizationStatus}
              movieList={getMyMovies}
            />)}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Movie()}>
          <MovieCard
            cardDemonstrate={CardState.Overview}
            movieList={films}
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.Details()}>
          <MovieCard
            cardDemonstrate={CardState.Details}
            movieList={films}
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.Reviews()}>
          <MovieCard
            cardDemonstrate={CardState.Reviews}
            movieList={films}
            authorizationStatus={authorizationStatus}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview()}
          authorizationStatus={authorizationStatus}
          render={() => (
            <AddReview
              authorizationStatus={authorizationStatus}
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
