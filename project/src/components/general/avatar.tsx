import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';

const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
} as const;

function Avatar(props: {authorizationStatus: string}): JSX.Element {
  const {authorizationStatus} = props;

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
            <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
          </li>
        </>
      ) : (
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>
      )}
    </ul>
  );
}

export default Avatar;
