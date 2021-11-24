import { ChangeEvent, FormEvent, Fragment, memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { postComments } from '../../store/api-actions';
import { AppRoute, CommentsStatus } from '../const/const';
import { CommentToServer, IdParam } from '../types/types';
import * as selectors from '../../store/selectors';

const InitialState = {
  Comment: '',
  Rating: '0',
};

const MINIMAL_LENGTH = 50;
const MAX_LENGTH = 400;

const ratingStars: number[] = new Array(10).fill('').map((_, index) => index+1).reverse();
const starsNumbers: number[] = new Array(10).fill('').map((line, index) => line = index+1).reverse();

function AddReviewForm ():JSX.Element {

  const [feedback, setFeedback] = useState(InitialState.Comment);
  const [ratingValue, setRating] = useState(InitialState.Rating);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isFormLoading, setIsFormLoading] = useState(false);

  const dispatch = useDispatch();
  const {id} = useParams<IdParam>();
  const history = useHistory();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const commentsStatusState = useSelector(selectors.getCommentsStatus);

  useEffect(() => {
    if (commentsStatusState === CommentsStatus.Success) {
      setIsFormLoading(true);
      history.push(AppRoute.Reviews(id));
    }
  }, [commentsStatusState, history, id]);

  useEffect(() => {
    setIsButtonDisabled(true);

    if(feedback.length < MINIMAL_LENGTH) {
      textAreaRef.current?.setCustomValidity(`Your comments should be at least 50 symbols in length, please add ${MINIMAL_LENGTH - feedback.length} more symbols`);
    } else if (Number(ratingValue) === 0) {
      textAreaRef.current?.setCustomValidity('Please, evaluate your impression from the movie with number of stars');
    } else {
      setIsButtonDisabled(false);
      textAreaRef.current?.setCustomValidity('');
    }

    textAreaRef.current?.reportValidity();
  }, [ratingValue, feedback]);

  const handleOnTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(target.value);
  };

  const handleOnRatingChange= ({target}: ChangeEvent<HTMLInputElement>) => {
    setRating(() => target.value);
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const result: CommentToServer  = {
      rating: ratingValue,
      comment: feedback,
    };

    dispatch(postComments(id,result));
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>

        <div className="rating">
          <div className="rating__stars">

            {ratingStars.map((numberValue, index) =>
              (
                <Fragment key={`itemStarRating-${starsNumbers[index]}`}>
                  <input
                    onChange={handleOnRatingChange}
                    className="rating__input"
                    id={`star-rating-${numberValue}`}
                    type="radio"
                    name="rating"
                    value={numberValue}
                    checked={numberValue === Number(ratingValue)}
                    disabled={isFormLoading}
                  />
                  <label className="rating__label" htmlFor={`star-rating-${numberValue}`} >Rating {numberValue}</label>
                </Fragment>
              ))}

          </div>
        </div>

        <div className="add-review__text">

          <textarea
            onChange={handleOnTextChange}
            className="add-review__textarea"
            name="review-text" id="review-text"
            placeholder="Review text"
            value={feedback}
            ref={textAreaRef}
            minLength={MINIMAL_LENGTH}
            maxLength={MAX_LENGTH}
            // onInput={handleOnInputText}
            disabled={isFormLoading}
          />

          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={isButtonDisabled || isFormLoading}
            >Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(AddReviewForm);
