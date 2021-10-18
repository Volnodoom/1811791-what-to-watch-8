import { Link } from 'react-router-dom';
import { appRoute } from '../const/const';

function Error404():JSX.Element {
  return (
    <>
      <h1>
      404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={appRoute.Main}>Go to main page</Link>
    </>
  );
}

export default Error404;
