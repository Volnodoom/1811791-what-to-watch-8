import Avatar from './avatar';
import Logo from './logo';

function Header(props: {authorizationStatus: string, wtwHidden:boolean, appRoute: string}): JSX.Element {
  return (
    <>
      {props.wtwHidden && <h1 className="visually-hidden">WTW</h1>}
      <header className="page-header film-card__head">
        <Logo appRoute={props.appRoute} isTop />
        <Avatar authorizationStatus={props.authorizationStatus} />
      </header>
    </>
  );
}

export default Header;
