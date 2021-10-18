import { ChangeEvent, Fragment, useState } from 'react';
import { CommentToServer } from '../types/types';

const InitialState = {
  Comment: '',
  Rating: 0,
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AddReviewRatingStars: number[] = new Array(10).fill('').map((_, index) => index+1).reverse()!;

function AddReviewForm ():JSX.Element {
  const [feedback, setFeedback] = useState(InitialState.Comment);
  const [, setRating] = useState(InitialState.Rating);

  const handleOnTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(target.value);
    handleOnButtonClick();
  };

  const handleOnRatingChange= ({target}: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(target.value));
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleOnButtonClick= () => {
    const result: CommentToServer  = {
      // rating: ratingValue,
      comment: feedback,
    };
    // eslint-disable-next-line no-console
    console.log(result);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">

        <div className="rating">
          <div className="rating__stars">
            {AddReviewRatingStars.map((number, index) =>
              (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={`itemStarRating-${index}`}>
                  <input
                    onChange={handleOnRatingChange}
                    className="rating__input"
                    id={`star-rating-${number}`}
                    type="radio"
                    name="rating"
                    value={number}
                  />
                  <label className="rating__label" htmlFor={`star-${number}`} >Rating {number}</label>
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
          >
          </textarea>
          <div className="add-review__submit">
            <button
              // onClick={handleOnButtonClick}
              className="add-review__btn"
              type="submit"
            >Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
