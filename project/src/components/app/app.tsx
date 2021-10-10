import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { MovieInfo } from '../types/types';
import Main from '../main/main';
import Error404 from '../routing/Error404';
import Player from '../player/player';
import AddReview from '../movie-add-review/add-review';
import MovieCard from '../movie-card/movie-card';
import Mylist from '../mylist/mylist';
import SignIn from '../sign-in/sign-in';
import { AppRout } from '../const/const';
import PrivateRoute from '../routing/private-route';

export default function App(props: {film: MovieInfo}): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRout.Main}>
          <Main film={props.film} />
        </Route>
        <Route exact path={AppRout.SignIn}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRout.MyList}
          render={() => <Mylist film={props.film}/>}
          film={props.film}
        >
        </PrivateRoute>
        <Route exact path={AppRout.MovieCard}>
          <MovieCard film={props.film}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRout.AddReview}
          film={props.film}
          render={() => <AddReview film={props.film}/>}
        >
        </PrivateRoute>
        <Route exact path={AppRout.Player}>
          <Player />
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
