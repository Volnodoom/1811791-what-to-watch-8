import { useSelector } from 'react-redux';
import { MatchingComponent } from '../const/const';
import Avatar from '../general/avatar';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import Footer from '../general/footer';
import Logo from '../general/logo';
import * as selectors from '../../store/selectors';


function Mylist(): JSX.Element {
  const films = useSelector(selectors.getMyFavoriteMovies);

  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isTop/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar />
      </header>
      <CatalogMovieThumbnails movieList={films} componentEqual={MatchingComponent.Mylist}/>
      <Footer />
    </div>
  );
}

export default Mylist;
