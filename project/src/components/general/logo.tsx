import { Link } from 'react-router-dom';
function Logo(props: {appRoute:string, isTop: boolean}): JSX.Element {
  return (
    <div className="logo">
      <Link to={props.appRoute} className={props.isTop ? 'logo__link' : 'logo__link logo__link--light'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}

export default Logo;
