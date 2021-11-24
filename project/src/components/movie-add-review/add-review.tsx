import { useParams } from 'react-router';
import PageIsNotAvailable from '../routing/page-is-not-available';
import { IdParam, MovieInfo } from '../types/types';
import AddReviewForm from './add-review-form';
import AddReviewHeader from './add-review-header';

function AddReview(props: {movieList:MovieInfo[]}):JSX.Element {
  const {id} = useParams() as IdParam;
  const film = props.movieList.find((filmCard) => filmCard.id === Number(id));
  if (!film) {
    return (
      <PageIsNotAvailable />
    );
  }
  const {backgroundImg, title, poster} = film;

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImg} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <AddReviewHeader film= {film} />
        <div className="film-card__poster film-card__poster--small">
          <img src={poster} alt={title} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
