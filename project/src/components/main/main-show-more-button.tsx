type ShowMoreButtonProps = {
  onClick: () => void;
}

function MainShowMoreButton({onClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onClick}>Show more</button>
    </div>
  );
}

export default MainShowMoreButton;
