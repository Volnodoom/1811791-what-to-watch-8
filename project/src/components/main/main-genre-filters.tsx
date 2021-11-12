import { MouseEvent } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import { onFilmsFiltration } from '../../store/action';
import { Actions } from '../types/action-types';
import { State } from '../types/state';

const GenreState = {
  Active: 'catalog__genres-item catalog__genres-item--active',
  NonActive: 'catalog__genres-item',
};

const mapStateToProps = ({FILMS, DATA}: State) => ({
  activeGenre: FILMS.activeGenre,
  genreList: DATA.genreList,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onFiltration: onFilmsFiltration,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function MainGenreFilters(props: PropsFromRedux):JSX.Element {
  const {activeGenre, genreList, onFiltration} = props;

  const activeGenreHandler = (genre: string) => (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onFiltration (genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(genreList)
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
