import Avatar from './avatar';
import { MovieInfo } from '../types/types';
import Logo from './logo';

function Header(props: {film: MovieInfo, wtwHidden:boolean, logoUrl: string}): JSX.Element {
  return (
    <>
      {props.wtwHidden && <h1 className="visually-hidden">WTW</h1>}
      <header className="page-header film-card__head">
        <Logo logoUrl= {props.logoUrl} isTop />
        <Avatar film = {props.film} />
      </header>
    </>
  );
}

export default Header;
