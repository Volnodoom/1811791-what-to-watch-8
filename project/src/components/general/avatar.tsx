function Avatar(isLogged: boolean): JSX.Element {
  function SingingIn() {
    return <a href="sign-in.html" className="user-block__link">Sign in</a>;
  }

  function SingingOut(): JSX.Element {
    return (
      <>
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </>
    );
  }

  return (
    <ul className="user-block">
      {isLogged ? SingingOut() : SingingIn()}
    </ul>
  );
}

export default Avatar;
