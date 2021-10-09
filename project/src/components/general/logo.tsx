function Logo(props: {logoUrl:string, isTop: boolean}): JSX.Element {
  return (
    <div className="logo">
      <a href= {props.logoUrl} className= {props.isTop ? 'logo__link' : 'logo__link logo__link--light'}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
}

export default Logo;
