import Error404 from '../routing/Error404';
import { Comment } from '../types/types';
import MovieSingleReview from './movie-single-review';


function MovieReviews(props: {comments: Comment[]}):JSX.Element {
  const firstContainer: Comment[] = [];
  const secondContainer: Comment[] = [];

  if (props.comments.length === 0) {
    return (<Error404 />);
  }

  props.comments.map((oneMessage, index) => {
    if(index%2 === 0) {
      return firstContainer.push(oneMessage);
    } else {
      return secondContainer.push(oneMessage);
    }
  });

  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstContainer.map((comment) => <MovieSingleReview feedback={comment} key={comment.id}/>)}
      </div>

      <div className="film-card__reviews-col">
        {secondContainer.map((comment) => <MovieSingleReview feedback={comment} key={comment.id}/>)}
      </div>
    </div>

  );
}

export default MovieReviews;


