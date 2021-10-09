function AddReviewRating(props: {rating:number}):JSX.Element {
  return(
    <>
      <input className="rating__input" id={`star-${props.rating}`} type="radio" name="rating" value={props.rating} />
      <label className="rating__label" htmlFor={`star-${props.rating}`} >Rating {props.rating}</label>
    </>
  );
}

export default AddReviewRating;
