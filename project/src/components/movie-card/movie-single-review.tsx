import { Comment } from '../types/types';

function MovieSingleReview(props: {feedback:Comment}):JSX.Element {
  const {rating, comment} = props.feedback;
  const userName = props.feedback.user.name;

  return(
    <div className="review">
      <blockquote className="review__quote" >
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          {/* <time className="review__date" dateTime="2016-12-24">{date.toDateString()}</time> */}
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );

}

export default MovieSingleReview;
