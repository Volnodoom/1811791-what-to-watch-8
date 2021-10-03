import BodyVisuallyHidden from '../general/body-hidden';
import MainHead from '../general/main-head';
import MovieCardButtons from '../general/movie-card-buttons';
import TopCover from '../general/top-cover';

function MainMovieFrame() {
  return (
    <>
      {MainHead()}
      <body>
        {BodyVisuallyHidden(true)}
        <section className="film-card">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>
          {TopCover(true, true)}

          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">The Grand Budapest Hotel</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">Drama</span>
                  <span className="film-card__year">2014</span>
                </p>
                {MovieCardButtons(false, false)}
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default MainMovieFrame;
