import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchCommentsToMovie } from '../../store/api-actions';
import { Comment, IdParam } from '../types/types';
import MovieSingleReview from './movie-single-review';
import * as selectors from '../../store/selectors';

function MovieReviews():JSX.Element {
  const comments = useSelector(selectors.getComments);
  const dispatch = useDispatch();

  const { id } = useParams<IdParam>();
  useEffect(() => {
    dispatch(fetchCommentsToMovie(Number(id)));
  }, [id, dispatch]);

  const firstContainer: Comment[] = [];
  const secondContainer: Comment[] = [];

  if (comments.length === 0) {
    return (
      <div className="review">
        <p>No one left any comments yet. Be first! What is on your mind after watching this film.</p>
      </div>
    );
  }

  comments.map((oneMessage, index) => {
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


