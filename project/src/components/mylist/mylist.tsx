import { appRoute } from '../const/const';
import Avatar from '../general/avatar';
import Footer from '../general/footer';
import Logo from '../general/logo';
import MovieThumbnails from '../general/movie-thumbanail';
import { MovieInfo } from '../types/types';

function Mylist(props: {movieList:MovieInfo[], authorizationStatus: string,}): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo appRoute={appRoute.Main} isTop/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar authorizationStatus={props.authorizationStatus}  />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {props.movieList
            .map((film) => <MovieThumbnails film={film} key = {film.id} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Mylist;
