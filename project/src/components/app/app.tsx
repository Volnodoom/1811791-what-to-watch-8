import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { MovieInfo } from '../types/types';
import Main from '../main/main';
import Error404 from '../routing/Error404';
import Player from '../player/player';
import AddReview from '../movie-add-review/add-review';
import MovieCard from '../movie-card/movie-card';
import Mylist from '../mylist/mylist';
import SignIn from '../sign-in/sign-in';
import { appRoute } from '../const/const';
import PrivateRoute from '../routing/private-route';

export default function App(props: {film: MovieInfo, movieList:MovieInfo[], authorizationStatus: string}): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={appRoute.Main}>
          <Main
            film={props.film}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <Route exact path={appRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={appRoute.MyList}
          authorizationStatus={props.authorizationStatus}
          render={() => (
            <Mylist
              authorizationStatus={props.authorizationStatus}
              movieList={props.movieList}
            />)}
        >
        </PrivateRoute>
        <Route exact path={appRoute.MovieCard}>
          <MovieCard
            film={props.film}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <PrivateRoute
          exact
          path={appRoute.AddReview}
          authorizationStatus={props.authorizationStatus}
          render={() => (
            <AddReview
              authorizationStatus={props.authorizationStatus}
              film={props.film}
            />)}
        >
        </PrivateRoute>
        <Route exact path={appRoute.Player}>
          <Player />
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
