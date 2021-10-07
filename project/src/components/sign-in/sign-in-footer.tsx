import { LogoUrl, LOGO_BOTTOM } from '../const/const';
import Copyright from '../general/copyright';
import Logo from '../general/logo';


function SignInFooter(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoUrl= {LogoUrl.SignIn} isTop= {LOGO_BOTTOM}/>
      <Copyright />
    </footer>
  );
}

export default SignInFooter;
