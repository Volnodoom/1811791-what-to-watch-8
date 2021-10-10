import { Link } from 'react-router-dom';
import { AppRout } from '../const/const';

function Error404():JSX.Element {
  return (
    <>
      <h1>
      404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to={AppRout.Main}>Go to main page</Link>
    </>
  );
}

export default Error404;
