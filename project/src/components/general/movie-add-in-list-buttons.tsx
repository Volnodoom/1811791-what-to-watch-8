import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postMyFavorite } from '../../store/api-actions';
import * as selectors from '../../store/selectors';
// import LoadingScreen from '../loading-screen/loading-screen';

const MOVIE_ADDED_TO_MYLIST = 1;
const MOVIE_REMOVED_FROM_MYLIST = 0;

// type Button = {
//   className: string,
//     viewBox: string,
//     use: string,
//     snap: string,
//     width: number,
//     height: number,
// }

function MovieAddInListButtons(props: {filmId: number}): JSX.Element {
  const {filmId} = props;

  const FlagFavorite = useSelector(selectors.getFlagFavorite(Number(filmId)));
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState<boolean>(FlagFavorite);
  // const [buttonState, setButtonState] = useState<Button>();

  // useEffect(() => {
  //   if (isFavorite) {
  //     return setButtonState({
  //       className: 'btn btn--play film-card__button',
  //       viewBox: '0 0 18 14',
  //       use: '#in-list',
  //       snap: 'My list',
  //       width: 18,
  //       height: 14,
  //     });
  //   }

  //   return setButtonState({
  //     className: 'btn btn--list film-card__button',
  //     viewBox: '0 0 19 20',
  //     use: '#add',
  //     snap: 'My list',
  //     width: 19,
  //     height: 20,
  //   });
  // }, [filmId]);

  const KindOfMovieCardButtons = () => {
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


  const handleMyFavoriteFunctionality = () => {
    // debugger;
    dispatch(postMyFavorite(filmId, isFavorite ? MOVIE_REMOVED_FROM_MYLIST : MOVIE_ADDED_TO_MYLIST));
    setIsFavorite((prevState) => !prevState);
  };

  // if (buttonState === undefined) {
  //   return <LoadingScreen />;
  // } else {
  const {className, viewBox, use, snap, width, height} = KindOfMovieCardButtons();

  return (
    <button className={className} type="button" onClick={handleMyFavoriteFunctionality}>
      <svg viewBox={viewBox}  width={width}  height={height}>
        <use xlinkHref= {use}></use>
      </svg>
      <span>{snap}</span>
    </button>
  );
}


// }

export default MovieAddInListButtons;
