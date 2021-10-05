import { MovieProps, Poster } from '../const/const';

function MovieCatalog(film:MovieProps, keyInd: number): JSX.Element {
  const {
    poster,
    altPoster,
    title,
    urlMovie,
  } = film;

  return (
    <article className="small-film-card catalog__films-card" key={keyInd}>
      <div className="small-film-card__image">
        <img src={poster} alt={altPoster} width={Poster.SmallWidth} height={Poster.SmallHeight} />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={urlMovie}>{title}</a>
      </h3>
    </article>
  );
}

export default MovieCatalog;
