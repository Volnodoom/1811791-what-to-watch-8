import { LOGO_URL } from '../const/const';

function Logo(): JSX.Element {
  return (
    <div className="logo">
      <a href= {LOGO_URL} className="logo__link">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
