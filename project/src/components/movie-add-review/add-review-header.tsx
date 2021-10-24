import { MovieInfo } from '../types/types';
import Avatar from '../general/avatar';
import Logo from '../general/logo';
import Breadcrumbs from './breadcrumbs';

function AddReviewHeader(props:{film: MovieInfo, authorizationStatus: string}):JSX.Element {
  return(
    <header className="page-header">
      <Logo isTop />
      <Breadcrumbs film={props.film} />
      <Avatar authorizationStatus={props.authorizationStatus} />
    </header>
  );
}

export default AddReviewHeader;
