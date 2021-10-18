import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { Comment, MovieInfo } from '../types/types';
import Main from '../main/main';
import Error404 from '../routing/Error404';
import Player from '../player/player';
import AddReview from '../movie-add-review/add-review';
import MovieCard from '../movie-card/movie-card';
import Mylist from '../mylist/mylist';
import SignIn from '../sign-in/sign-in';
import { AppRoute, CardState } from '../const/const';
import PrivateRoute from '../routing/private-route';

type AppProps = {
  film: MovieInfo,
  movieList:MovieInfo[],
  authorizationStatus: string,
  comments: Comment[],
};

export default function App(props: AppProps): JSX.Element {
  const getMyMovies = props.movieList.filter((film) => film.isFavorite);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main
            film={props.film}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.MyList}
          authorizationStatus={props.authorizationStatus}
          render={() => (
            <Mylist
              authorizationStatus={props.authorizationStatus}
              movieList={getMyMovies}
            />)}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Movie()}>
          <MovieCard
            comments={props.comments}
            cardDemonstrate={CardState.Overview}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.Details()}>
          <MovieCard
            comments={props.comments}
            cardDemonstrate={CardState.Details}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <Route exact path={AppRoute.Reviews()}>
          <MovieCard
            comments={props.comments}
            cardDemonstrate={CardState.Reviews}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.AddReview()}
          authorizationStatus={props.authorizationStatus}
          render={() => (
            <AddReview
              authorizationStatus={props.authorizationStatus}
              movieList={props.movieList}
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
