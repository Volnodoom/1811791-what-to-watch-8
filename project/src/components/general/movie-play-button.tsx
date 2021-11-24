type MoviePlayButtonProps = {
  filmId: string | number,
  onPlayFilm: (id: string | number) => void,
}

function MoviePlayButton(props: MoviePlayButtonProps): JSX.Element {
  const {onPlayFilm, filmId} = props;

  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => onPlayFilm(filmId)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>);

}

export default MoviePlayButton;
