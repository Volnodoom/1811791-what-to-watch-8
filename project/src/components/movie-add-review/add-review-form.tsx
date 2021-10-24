import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { CommentToServer } from '../types/types';

const InitialState = {
  Comment: '',
  Rating: 9,
};

const AddReviewRatingStars: number[] = new Array(10).fill('').map((_, index) => index+1).reverse()!;

function AddReviewForm ():JSX.Element {
  const [feedback, setFeedback] = useState(InitialState.Comment);
  const [ratingValue, setRating] = useState(InitialState.Rating);

  const handleOnTextChange = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(target.value);
  };

  const handleOnRatingChange= ({target}: ChangeEvent<HTMLInputElement>) => {
    setRating(() => Number(target.value));
  };


  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result: CommentToServer  = {
      rating: ratingValue,
      comment: feedback,
    };
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>

        <div className="rating">
          <div className="rating__stars">
            {AddReviewRatingStars.map((numberValue, index) =>
              (
                <Fragment key={`itemStarRating-${Date.now()+Math.random()+Math.random()}`}>
                  <input
                    onChange={handleOnRatingChange}
                    className="rating__input"
                    id={`star-rating-${numberValue}`}
                    type="radio"
                    name="rating"
                    value={numberValue}
                    checked={numberValue === ratingValue}
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
          >
          </textarea>
          <div className="add-review__submit">
            <button
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
