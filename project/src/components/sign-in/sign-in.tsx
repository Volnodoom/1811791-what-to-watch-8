import { FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../general/footer';
import Logo from '../general/logo';
import {toast} from 'react-toastify';
import { fetchLogin, fetchMovies } from '../../store/api-actions';
import * as selectors from '../../store/selectors';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { useHistory } from 'react-router';

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

function SignIn(): JSX.Element {
  const dispatch = useDispatch();
  const authStatus = useSelector(selectors.getAuthorizationStatus);

  const history = useHistory();

  useEffect(() => {
    if(authStatus === AuthorizationStatus.Auth) {
      history.push(AppRoute.Main);
      dispatch(fetchMovies());
    }
  });

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
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
        default:  return dispatch(
          fetchLogin({
            login: loginRef.current.value,
            password: passwordRef.current.value,
          }),
        );
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
          onSubmit={handleOnSubmit}
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

export default SignIn;
