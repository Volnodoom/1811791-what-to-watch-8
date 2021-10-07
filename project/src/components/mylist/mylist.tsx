import { MovieInfo } from '../const/types';
import MylistContent from './mylist-content';
import MylistFooter from './mylist-footer';
import MylistHeader from './mylist-header';

function Mylist(props: {film: MovieInfo}): JSX.Element {
  return(
    <div className="user-page">
      <MylistHeader film={props.film}/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <MylistContent film={props.film}/>
        </div>
      </section>
      <MylistFooter />
    </div>
  );
}

export default Mylist;
