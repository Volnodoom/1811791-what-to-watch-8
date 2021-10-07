import { LogoUrl, LOGO_TOP } from '../const/const';
import { MovieInfo } from '../const/types';
import Avatar from '../general/avatar';
import Logo from '../general/logo';

function MylistHeader(props: {film: MovieInfo}): JSX.Element {
  return(
    <header className="page-header user-page__head">
      <Logo logoUrl={LogoUrl.Mylist} isTop={LOGO_TOP}/>
      <h1 className="page-title user-page__title">My list</h1>
      <Avatar film={props.film} />
    </header>
  );
}

export default MylistHeader;
