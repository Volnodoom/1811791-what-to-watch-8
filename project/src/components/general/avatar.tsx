import { MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogout } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../const/const';
import * as selectors from '../../store/selectors';

const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
} as const;

function Avatar(): JSX.Element {
  const authorizationStatus = useSelector(selectors.getAuthorizationStatus);
  const dispatch = useDispatch();


  const logoutHandle = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(fetchLogout());
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

export default Avatar;
