import { MouseEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogout } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { ThunkAppDispatch } from '../types/action-types';
import { State } from '../types/state';
import * as selectors from '../../store/selectors';

const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
} as const;

const mapStateToProps = (state: State) => ({
  authorizationStatus: selectors.getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(fetchLogout());
  },
});

const connector =connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Avatar(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, onLogout} = props;

  const logoutHandle = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onLogout();
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={AvatarAdjustment.Img} alt={AvatarAdjustment.AltImg}  width="63"  height="63"  />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.Main}
              className="user-block__link"
              onClick={logoutHandle}
            >
              Sign out
            </Link>
          </li>
        </>
      ) : (
        <Link
          className="user-block__link"
          to={AppRoute.SignIn}
        >
          Sign in
        </Link>
      )}
    </ul>
  );
}

export  {Avatar};
export default connector(Avatar);
