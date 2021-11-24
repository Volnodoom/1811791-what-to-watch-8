import { useDispatch, useSelector } from 'react-redux';
import { postMyFavorite } from '../../store/api-actions';
import * as selectors from '../../store/selectors';
import Error404 from '../routing/error-404';

import { State } from '../types/state';

const MOVIE_ADDED_TO_MYLIST = 1;
const MOVIE_REMOVED_FROM_MYLIST = 0;

function MovieAddInListButtons(props: {filmId: number | string}): JSX.Element {
  const {filmId} = props;
  const film = useSelector((state: State) => selectors.getMovieById(state, filmId));
  const dispatch = useDispatch();

  if(typeof film === 'undefined') {
    return <Error404 />;
  }

  const isFavorite = film.isFavorite;

  const getKindOfMovieCardButton = () => {
    if (isFavorite) {
      return {
        className: 'btn btn--play film-card__button',
        viewBox: '0 0 18 14',
        use: '#in-list',
        snap: 'My list',
        width: 18,
        height: 14,
      };
    }

    return {
      className: 'btn btn--list film-card__button',
      viewBox: '0 0 19 20',
      use: '#add',
      snap: 'My list',
      width: 19,
      height: 20,
    };
  };

  const handleMyFavoriteButtClick = () => {
    dispatch(postMyFavorite(filmId, isFavorite ? MOVIE_REMOVED_FROM_MYLIST : MOVIE_ADDED_TO_MYLIST));
  };

  const {className, viewBox, use, snap, width, height} = getKindOfMovieCardButton();

  return (
    <button className={className} type="button" onClick={handleMyFavoriteButtClick}>
      <svg viewBox={viewBox}  width={width}  height={height}>
        <use xlinkHref= {use}></use>
      </svg>
      <span>{snap}</span>
    </button>
  );
}

export default MovieAddInListButtons;
