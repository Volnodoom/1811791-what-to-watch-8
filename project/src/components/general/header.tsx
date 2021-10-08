import Avatar from './avatar';
import { MovieInfo } from '../const/types';
import Logo from './logo';
import { LOGO_TOP } from '../const/const';

function Header(props: {film: MovieInfo, wtwHidden:boolean, logoUrl: string}): JSX.Element {
  return (
    <>
      {props.wtwHidden && <h1 className="visually-hidden">WTW</h1>}
      <header className="page-header film-card__head">
        <Logo logoUrl= {props.logoUrl} isTop = {LOGO_TOP}/>
        <Avatar film = {props.film} />
      </header>
    </>
  );
}

export default Header;
