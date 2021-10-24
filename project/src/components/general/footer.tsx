import Logo from '../general/logo';

function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo isTop={false} />
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
