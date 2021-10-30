import { MouseEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { filtrateMovies, resetMovieFilter, setMovieFilter  } from '../../store/action';
import { ListOfGenres } from '../const/const';
import { Actions } from '../types/action-types';
import { State } from '../types/state';
import { MovieInfo } from '../types/types';

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
type MainGenreFiltersProps = {movieList: MovieInfo[]}
type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps = MainGenreFiltersProps & PropsFromRedux;

function MainGenreFilters(props: ConnectedComponentProps):JSX.Element {
  const {activeGenre, films, movieList, onResetFilter, onFilterClick, onFiltration} = props;

  const uniqueGenreList: Set <string> = new Set();
  uniqueGenreList.add('All genres');
  movieList.forEach((film) => uniqueGenreList.add(film.genre));

  const activeGenreHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (evt.currentTarget.textContent === ListOfGenres.AllGenres) {
      onResetFilter();
    } else {
      onFilterClick(evt.currentTarget.textContent!);
      onFiltration(films);
    }
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(uniqueGenreList)
        .slice(0,8)
        .map((genre) => (
          <li
            className={genre === activeGenre ? GenreState.Active : GenreState.NonActive}
            key={genre}
            onClick={activeGenreHandler}
          >
            <a href="#url" className="catalog__genres-link">{genre}</a>
          </li>
        ))}
    </ul>
  );
}

export  {MainGenreFilters};
export default connector(MainGenreFilters);
