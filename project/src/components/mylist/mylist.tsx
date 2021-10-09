import { LogoUrl } from '../const/const';
import Avatar from '../general/avatar';
import Footer from '../general/footer';
import Logo from '../general/logo';
import MovieThumbnails from '../general/movie-thumbanail';
import { MovieInfo } from '../types/types';

function Mylist(props: {film: MovieInfo}): JSX.Element {
  return(
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo logoUrl={LogoUrl.Main} isTop/>
        <h1 className="page-title user-page__title">My list</h1>
        <Avatar film={props.film} />
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {new Array(9)
            .fill('')
          // eslint-disable-next-line react/no-array-index-key
            .map((line, index) => <MovieThumbnails film={props.film} key = {index} />)}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Mylist;
