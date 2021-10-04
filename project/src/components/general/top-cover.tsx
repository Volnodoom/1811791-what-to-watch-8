import Avatar from './avatar';
import Logo from './logo';

type TopCoverProps = {
  wtwHidden: boolean,
  isLogged: boolean,
}

function TopCover({wtwHidden, isLogged} : TopCoverProps): JSX.Element {
  function WTWHiddenState() {
    return <h1 className="visually-hidden">WTW</h1>;
  }

  return (
    <>
      {wtwHidden && WTWHiddenState()}
      <header className="page-header film-card__head">
        {Logo()}
        {Avatar(isLogged)}
      </header>
    </>
  );
}

export default TopCover;
