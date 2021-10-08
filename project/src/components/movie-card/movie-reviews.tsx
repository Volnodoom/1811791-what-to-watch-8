import MovieSingleReview from './movie-single-review';

function MovieReviews():JSX.Element {
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        <MovieSingleReview />
        <MovieSingleReview />
        <MovieSingleReview />
      </div>

      <div className="film-card__reviews-col">
        <MovieSingleReview />
        <MovieSingleReview />
        <MovieSingleReview />
      </div>
    </div>

  );
}

export default MovieReviews;
