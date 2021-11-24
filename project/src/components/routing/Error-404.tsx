import { Link } from 'react-router-dom';
import { AppRoute } from '../const/const';
import { CSSProperties } from 'react';

const loadingDiv: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#401212',
  color: '#dfcf77',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const loadingText: CSSProperties = {
  display: 'block',
  fontSize: '38px',
  fontStyle: 'italic',
  fontWeight: 'bold',
};

const loadingLink: CSSProperties = {
  minHeight: '20vh',
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  fontStyle: 'italic',
  fontWeight: 'bold',
};

function Error404():JSX.Element {
  return (
    <div style={loadingDiv}>
      <h1 style={loadingText}>
      404.
        <small> Page not found</small>
      </h1>
      <Link to={AppRoute.Main} style={loadingLink}>
        Go to main page
      </Link>
    </div>
  );
}

export default Error404;
