import { LogoUrl } from '../const/const';
import { MovieInfo } from '../types/types';
import Avatar from '../general/avatar';
import Logo from '../general/logo';
import Breadcrumbs from './breadcrumbs';

function AddReviewHeader(props:{film: MovieInfo}):JSX.Element {
  return(
    <header className="page-header">
      <Logo logoUrl={LogoUrl.Main} isTop />
      <Breadcrumbs film={props.film} />
      <Avatar film={props.film}/>
    </header>
  );
}

export default AddReviewHeader;
