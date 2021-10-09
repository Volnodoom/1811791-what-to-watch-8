/* eslint-disable react/no-array-index-key */
import { AddReviewRatingStars, Poster } from '../const/const';
import { MovieInfo } from '../types/types';
import BackgroundPoster from '../general/background-poster';
import BigPicture from '../general/big-picture';
import AddReviewHeader from './add-review-header';
import AddReviewRating from './add-review-rating';


function AddReview(props: {film: MovieInfo}):JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <BackgroundPoster film= {props.film}/>
        <h1 className="visually-hidden">WTW</h1>
        <AddReviewHeader film= {props.film}/>
        <BigPicture film= {props.film} className={Poster.Class.AddReview}/>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">

          <div className="rating">
            <div className="rating__stars">
              {AddReviewRatingStars
                .map((number, index) => <AddReviewRating rating= {number} key={`itemStarRating-${index}`}/>)}
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
