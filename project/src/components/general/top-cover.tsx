import Avatar from './avatar';
import { MovieInfo } from '../const/types';
import Logo from './logo';


function TopCover(props: {film: MovieInfo, wtwHidden:boolean}): JSX.Element {
  return (
    <>
      {props.wtwHidden && <h1 className="visually-hidden">WTW</h1>}
      <header className="page-header film-card__head">
        <Logo />
        <Avatar film = {props.film} />
      </header>
    </>
  );
}

export default TopCover;
