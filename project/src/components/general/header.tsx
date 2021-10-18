import Avatar from './avatar';
import Logo from './logo';

function Header(props: {authorizationStatus: string, wtwHidden:boolean, AppRoute: string}): JSX.Element {
  return (
    <>
      {props.wtwHidden && <h1 className="visually-hidden">WTW</h1>}
      <header className="page-header film-card__head">
        <Logo AppRoute={props.AppRoute} isTop />
        <Avatar authorizationStatus={props.authorizationStatus} />
      </header>
    </>
  );
}

export default Header;
