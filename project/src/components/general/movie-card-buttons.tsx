import { KindOfButton, KindOfMovieCardButtons } from '../const/const';

function MovieCardButtons(props: {buttonKind: string}): JSX.Element {
  const {buttonKind} = props;
  function buttonsTemplate(ClassName:string, ViewBox:string, Use:string, Snap:string, Width:number, Height: number) {
    return (
      <button className={ClassName} type="button">
        <svg viewBox={ViewBox}  width={Width}  height={Height} >
          <use xlinkHref= {Use}></use>
        </svg>
        <span>{Snap}</span>
      </button>);
  }

  switch (buttonKind) {
    case KindOfButton.Play: {
      const {ClassName, ViewBox, Use, Snap, Width, Height} = KindOfMovieCardButtons.Play;
      return buttonsTemplate(ClassName, ViewBox, Use, Snap, Width, Height);
    }
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

export default MovieCardButtons;
