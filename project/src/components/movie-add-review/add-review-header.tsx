import { LogoUrl, LOGO_TOP } from '../const/const';
import { MovieInfo } from '../const/types';
import Avatar from '../general/avatar';
import Logo from '../general/logo';
import Breadcrumbs from './breadcrumbs';

function AddReviewHeader(props:{film: MovieInfo}):JSX.Element {
  return(
    <header className="page-header">
      <Logo logoUrl={LogoUrl.Main} isTop={LOGO_TOP}/>
      <Breadcrumbs film={props.film} />
      <Avatar film={props.film}/>
    </header>
  );
}

export default AddReviewHeader;
