import { KindOfButton } from '../const/const';

const KindOfMovieCardButtons = {
  AddToMyList: {
    'ClassName': 'btn btn--list film-card__button',
    'ViewBox': '0 0 19 20',
    'Use': '#add',
    'Snap': 'My list',
    'Width': 19,
    'Height': 20,
  },
  InMyList: {
    'ClassName': 'btn btn--play film-card__button',
    'ViewBox': '0 0 18 14',
    'Use': '#in-list',
    'Snap': 'My list',
    'Width': 18,
    'Height': 14,
  },
} as const;

type MovieAddInListButtonsProps = {
  buttonKind: string,
}

function MovieAddInListButtons(props: MovieAddInListButtonsProps): JSX.Element {
  const {buttonKind} = props;

  function buttonsTemplate(ClassName:string, ViewBox:string, Use:string, Snap:string, Width:number, Height: number) {
    return (
      <button className={ClassName} type="button" >
        <svg viewBox={ViewBox}  width={Width}  height={Height} >
          <use xlinkHref= {Use}></use>
        </svg>
        <span>{Snap}</span>
      </button>);
  }

  switch (buttonKind) {
    case KindOfButton.AddToMyList: {
      const {ClassName, ViewBox, Use, Snap, Width, Height} = KindOfMovieCardButtons.AddToMyList;
      return buttonsTemplate(ClassName, ViewBox, Use, Snap, Width, Height);
    }
    case KindOfButton.InMyList: {
      const {ClassName, ViewBox, Use, Snap, Width, Height} = KindOfMovieCardButtons.InMyList;
      return buttonsTemplate(ClassName, ViewBox, Use, Snap, Width, Height);
    }
    default: {
      throw Error ('It is not possible to find this kind of Button in const');
    }
  }
}

export default MovieAddInListButtons;
