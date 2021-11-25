import { useDispatch, useSelector } from 'react-redux';
import { MatchingComponent } from '../const/const';
import Avatar from '../general/avatar';
import CatalogMovieThumbnails from '../general/catalog-movie-thumbnails';
import Footer from '../general/footer';
import Logo from '../general/logo';
import * as selectors from '../../store/selectors';
import { fetchMyFavorite } from '../../store/api-actions';
import { useEffect } from 'react';


function MyList(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyFavorite());
  }, [dispatch]);
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

export default MyList;
