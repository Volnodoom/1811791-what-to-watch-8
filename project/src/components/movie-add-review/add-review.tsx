/* eslint-disable react/no-array-index-key */
import { Fragment } from 'react';
import { MovieInfo } from '../types/types';
import AddReviewHeader from './add-review-header';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const AddReviewRatingStars: number[] = new Array(10).fill('').map((_, index) => index+1)!;

function AddReview(props: {film: MovieInfo, authorizationStatus: string}):JSX.Element {
  const {backgroundImg, title, poster} = props.film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImg} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <AddReviewHeader film= {props.film} authorizationStatus={props.authorizationStatus}/>
        <div className="film-card__poster film-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          <div className="rating">
            <div className="rating__stars">
              {AddReviewRatingStars.map((number, index) =>
                (
                  <Fragment key={`itemStarRating-${index}`}>
                    <input className="rating__input" id={`star-${number}`} type="radio" name="rating" value={number} />
                    <label className="rating__label" htmlFor={`star-${number}`} >Rating {number}</label>
                  </Fragment>
                ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddReview;
