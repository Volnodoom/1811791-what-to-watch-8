import { FormEvent, useRef } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from '../general/footer';
import Logo from '../general/logo';
import { ThunkAppDispatch } from '../types/action-types';
import {toast} from 'react-toastify';
import { fetchLogin } from '../../store/api-actions';

const TOAST_CLOSE = 10000;
const TOAST_THEME = 'colored';

const WaringMessage = {
  Empty: 'Please, feel up the login and password lines',
  Space: 'Please, do not use space on any lines of signing form',
  Number: 'Password line must contain at least one number',
  TextLogin: 'Login line must contain at least one letter',
  TextPassword: 'Password line must contain at least one letter',
};

const showSignInProblem = (message: string) => {
  toast.error(message, {
    autoClose: TOAST_CLOSE,
    theme: TOAST_THEME,
    position: toast.POSITION.TOP_CENTER,
  });
};

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => bindActionCreators({
  onSubmit: fetchLogin,
}, dispatch);

const connector = connect(null, mapDispatchToProps);
type logoutAction = ConnectedProps<typeof connector>;


function SignIn(props: logoutAction): JSX.Element {
  const{onSubmit} = props;

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if(loginRef.current === null && passwordRef.current === null) {
      return showSignInProblem(WaringMessage.Empty);
    } else if (loginRef.current !== null && passwordRef.current !== null) {
      const loginValue = loginRef.current.value;
      const passwordValue = passwordRef.current.value;

      const inputErrors = {
        spaceForLogin: !!loginValue.match(/\s/),
        spaceForPassword: !!passwordValue.match(/\s/),
        containMinimumPasswordNumber: !passwordValue.match(/[0-9]/i),
        containMinimumPasswordText: !passwordValue.match(/[a-zа-я]/i),
        containMinimumLoginText: !loginValue.match(/[a-zа-я]/i),
      };

      switch (true) {
        case inputErrors.spaceForLogin:
          return showSignInProblem(WaringMessage.Space);
        case inputErrors.spaceForPassword:
          return showSignInProblem(WaringMessage.Space);
        case inputErrors.containMinimumPasswordNumber:
          return showSignInProblem(WaringMessage.Number);
        case inputErrors.containMinimumPasswordText:
          return showSignInProblem(WaringMessage.TextPassword);
        case inputErrors.containMinimumLoginText:
          return showSignInProblem(WaringMessage.TextPassword);
        default:  return onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
      }
    }
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo isTop />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={submitHandle}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export  {SignIn};
export default connector(SignIn);
