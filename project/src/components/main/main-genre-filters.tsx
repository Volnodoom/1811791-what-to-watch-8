import { MouseEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { onFilmsFiltration } from '../../store/action';
import { Actions } from '../types/action-types';
import { State } from '../types/state';
import { MovieInfo } from '../types/types';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = ({activeGenre}: State) => ({
  activeGenre,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onFiltration: onFilmsFiltration,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type MainGenreFiltersProps = {movieList: MovieInfo[]}
type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = MainGenreFiltersProps & PropsFromRedux;

function MainGenreFilters(props: ConnectedComponentProps):JSX.Element {
  const {activeGenre, movieList, onFiltration} = props;

  const uniqueGenreList: Set <string> = new Set();
  uniqueGenreList.add('All genres');
  movieList.forEach((film) => uniqueGenreList.add(film.genre));

  const activeGenreHandler = (genre: string) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onFiltration (genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(uniqueGenreList)
        .slice(0,8)
        .map((genre) => (
          <li
            className={genre === activeGenre ? GenreState.Active : GenreState.NonActive}
            key={genre}
            onClick={activeGenreHandler(genre)}
          >
            <a href="#url" className="catalog__genres-link">{genre}</a>
          </li>
        ))}
    </ul>
  );
}

export  {MainGenreFilters};
export default connector(MainGenreFilters);
