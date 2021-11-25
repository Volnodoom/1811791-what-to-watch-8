import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { nonAvailableDiv, nonAvailableLink, nonAvailableText } from './style-for-non-available-page';

function PageIsNotAvailable():JSX.Element {
  return (
    <div style={nonAvailableDiv}>
      <h1 style={nonAvailableText}>
      404.
        <small> Page not found</small>
      </h1>
      <Link to={AppRoute.Main} style={nonAvailableLink}>
        Go to main page
      </Link>
    </div>
  );
}

export default PageIsNotAvailable;
