import { AppRoute, MatchingComponent } from '../const/const';
import Avatar from '../general/avatar';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import Footer from '../general/footer';
import Logo from '../general/logo';
import { MovieInfo } from '../types/types';

function Mylist(props: {movieList:MovieInfo[], authorizationStatus: string,}): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo AppRoute={AppRoute.Main} isTop/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar authorizationStatus={props.authorizationStatus}  />
      </header>
      <CatalogMovieThumbnails movieList={props.movieList} componentEqual={MatchingComponent.Mylist}/>
      <Footer />
    </div>
  );
}

export default Mylist;
