import { LogoUrl, LOGO_BOTTOM } from '../const/const';
import Copyright from '../general/copyright';
import Logo from '../general/logo';

function MylistFooter(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo logoUrl={LogoUrl.Main} isTop= {LOGO_BOTTOM}/>
      <Copyright />
    </footer>
  );
}

export default MylistFooter;
