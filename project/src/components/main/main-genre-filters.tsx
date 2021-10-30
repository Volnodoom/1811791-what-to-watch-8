import { MouseEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { filtrateMovies, resetMovieFilter, setMovieFilter  } from '../../store/action';
import { genreFilterFrames, ListOfGenres } from '../const/const';
import { Actions } from '../types/action-types';
import { State } from '../types/state';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = ({activeGenre, films}: State) => ({
  activeGenre,
  films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onResetFilter: resetMovieFilter,
  onFilterClick: setMovieFilter,
  onFiltration: filtrateMovies,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function MainGenreFilters(props: PropsFromRedux):JSX.Element {
  const {activeGenre, films, onResetFilter, onFilterClick, onFiltration} = props;

  const activeGenreHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (evt.currentTarget.getAttribute('data-genrename') === ListOfGenres.AllGenres) {
      onResetFilter();
    } else {
      onFilterClick(evt.currentTarget.getAttribute('data-genrename')!);
      onFiltration(films);
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genreFilterFrames
        .map(({filterGenre, filterUrl, genreName}) => (
          <li
            className={filterGenre === activeGenre ? GenreState.Active : GenreState.NonActive}
            key={Date.now()+Math.random()}
            onClick={activeGenreHandler}
            data-genreName={genreName}
          >
            <a href={filterUrl} className="catalog__genres-link">{filterGenre}</a>
          </li>
        ))}
    </ul>
  );
}

export  {MainGenreFilters};
export default connector(MainGenreFilters);
