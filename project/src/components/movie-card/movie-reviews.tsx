import { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useParams } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { fetchCommentsToMovie } from '../../store/api-actions';
import { Actions } from '../types/action-types';
import { State } from '../types/state';
import { Comment, IdParam } from '../types/types';
import MovieSingleReview from './movie-single-review';

const mapStateToProps = ({DATA}: State) => ({
  comments: DATA.comments,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onLoadComments: fetchCommentsToMovie,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

function MovieReviews(props: PropsFromRedux):JSX.Element {
  const {comments, onLoadComments} = props;

  const { id } = useParams<IdParam>();
  useEffect(() => {
    onLoadComments(Number(id));
  }, [id, onLoadComments]);

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

export {MovieReviews};
export default connector(MovieReviews);


