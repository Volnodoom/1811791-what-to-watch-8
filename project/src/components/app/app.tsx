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

type AppProps = {
  film: MovieInfo,
  movieList:MovieInfo[],
  authorizationStatus: string,
};

export default function App(props: AppProps): JSX.Element {
  // const getMovieById = (id:number) => {
  //   const filmCard = props.movieList.find((film) => film.id === id);

  //   if (!filmCard) {
  //     throw new Error(`There is no films in our database with such id: ${id}`);
  //   }

  //   return filmCard;
  // };

  const getMyMovies = props.movieList.filter((film) => film.isFavorite);


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
              movieList={getMyMovies}
            />)}
        >
        </PrivateRoute>
        <Route exact path={appRoute.Movie()}>
          <MovieCard
            film={props.film}
            movieList={props.movieList}
            authorizationStatus={props.authorizationStatus}
          />
        </Route>
        <PrivateRoute
          exact
          path={appRoute.AddReview()}
          authorizationStatus={props.authorizationStatus}
          render={() => (
            <AddReview
              authorizationStatus={props.authorizationStatus}
              film={props.film}
            />)}
        >
        </PrivateRoute>
        <Route exact path={appRoute.Player()}>
          <Player />
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
