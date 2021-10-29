import { MouseEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { resetMovieFilter, setMovieFilter  } from '../../store/action';
import { genreFilterFrames, ListOfGenres } from '../const/const';
import { Actions } from '../types/action-types';
import { State } from '../types/state';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onResetFilter: resetMovieFilter,
  onFilterClick: setMovieFilter,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function MainGenreFilters(props: PropsFromRedux):JSX.Element {
  const {activeGenre, onResetFilter, onFilterClick} = props;

  const activeGenreHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (evt.currentTarget.textContent === ListOfGenres.AllGenres) {
      onResetFilter();
    } else {
      onFilterClick(evt.currentTarget.textContent!);
    }
  };

  return (
    <ul className="catalog__genres-list">
      {genreFilterFrames
        .map(({filterGenre, filterUrl}) => (
          <li
            className={filterGenre === activeGenre ? GenreState.Active : GenreState.NonActive}
            key={Date.now()+Math.random()}
            onClick={activeGenreHandler}
          >
            <a href={filterUrl} className="catalog__genres-link">{filterGenre}</a>
          </li>
        ))}
    </ul>
  );
}

export default MainGenreFilters;
