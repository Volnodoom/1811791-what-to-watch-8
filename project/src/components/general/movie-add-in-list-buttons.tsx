import { KindOfButton } from '../const/const';

const KindOfMovieCardButtons = {
  AddToMyList: {
    'className': 'btn btn--list film-card__button',
    'viewBox': '0 0 19 20',
    'use': '#add',
    'snap': 'My list',
    'width': 19,
    'height': 20,
  },
  InMyList: {
    'className': 'btn btn--play film-card__button',
    'viewBox': '0 0 18 14',
    'use': '#in-list',
    'snap': 'My list',
    'width': 18,
    'height': 14,
  },
} as const;

type MovieAddInListButtonsProps = {
  buttonKind: string,
}

function MovieAddInListButtons(props: MovieAddInListButtonsProps): JSX.Element {
  const {buttonKind} = props;

  function buttonsTemplate(className:string, viewBox:string, use:string, snap:string, width:number, height: number) {
    return (
      <button className={className} type="button" >
        <svg viewBox={viewBox}  width={width}  height={height} >
          <use xlinkHref= {use}></use>
        </svg>
        <span>{snap}</span>
      </button>);
  }

  switch (buttonKind) {
    case KindOfButton.AddToMyList: {
      const {className, viewBox, use, snap, width, height} = KindOfMovieCardButtons.AddToMyList;
      return buttonsTemplate(className, viewBox, use, snap, width, height);
    }
    case KindOfButton.InMyList: {
      const {className, viewBox, use, snap, width, height} = KindOfMovieCardButtons.InMyList;
      return buttonsTemplate(className, viewBox, use, snap, width, height);
    }
    default: {
      throw Error ('It is not possible to find this kind of Button in const');
    }
  }
}

export default MovieAddInListButtons;
