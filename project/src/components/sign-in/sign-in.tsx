import SignInContent from './sign-in-content';
import SignInFooter from './sign-in-footer';
import SignInHeader from './sign-in-header';

function SignIn(): JSX.Element {
  return (
    <div className="user-page">
      <SignInHeader />
      <SignInContent />
      <SignInFooter />
    </div>
  );
}

export default SignIn;
