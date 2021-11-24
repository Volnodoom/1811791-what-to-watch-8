import { Comment } from '../types/types';

const getDateMMDDYY = (dateTime: string) => {
  const month = new Date(dateTime).toLocaleDateString('default', {month: 'long'});
  const day = new Date(dateTime).getDate();
  const year = new Date(dateTime).getFullYear();

  return `${month} ${day}, ${year}`;
};

const getDateYYMMDD = (dateTime: string) => {
  const month = new Date(dateTime).getMonth();
  const day = new Date(dateTime).getDay();
  const year = new Date(dateTime).getFullYear();

  return `${year}-${month}-${day}`;
};

function MovieSingleReview(props: {feedback:Comment}):JSX.Element {
  const {rating, comment, date} = props.feedback;
  const userName = props.feedback.user.name;

  return(
    <div className="review">
      <blockquote className="review__quote" >
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{userName}</cite>
          <time className="review__date" dateTime={getDateYYMMDD(date)}>{getDateMMDDYY(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating.toString().length === 1 ? `${rating}.0` : rating}</div>
    </div>
  );

}

export default MovieSingleReview;
