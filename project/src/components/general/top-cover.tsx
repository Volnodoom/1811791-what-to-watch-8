import Avatar from './avatar';
import Logo from './logo';

function TopCover(wtwHidden: boolean, isLogged: boolean): JSX.Element {
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
