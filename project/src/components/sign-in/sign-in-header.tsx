
import { LogoUrl, LOGO_TOP } from '../const/const';
import Logo from '../general/logo';


function SignInHeader (): JSX.Element {
  return (

    <header className="page-header film-card__head">
      <Logo logoUrl= {LogoUrl.SignIn} isTop={LOGO_TOP} />
      <h1 className="page-title user-page__title">Sign in</h1>
    </header>
  );
}

export default SignInHeader;
