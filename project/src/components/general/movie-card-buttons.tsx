function MovieCardButtons(isInMyList: boolean, hasAddReview: boolean): JSX.Element {
  function ButtonPlay(): JSX.Element {
    return (
      <button className="btn btn--play film-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
    );
  }

  function ButtonAddToMyList() {
    return (
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
      </button>);
  }

  function ButtonInMyList() {
    return(
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
    );
  }

  function ButtonAddReview() {
    return <a href="add-review.html" className="btn film-card__button">Add review</a>;
  }

  return (
    <div className="film-card__buttons">
      {ButtonPlay()}
      {isInMyList ? ButtonInMyList() : ButtonAddToMyList()}
      {hasAddReview ? ButtonAddReview() : ''}
    </div>
  );
}

export default MovieCardButtons;
