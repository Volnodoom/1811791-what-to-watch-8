import { connect, ConnectedProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import { State } from '../types/state';

const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
} as const;

const mapStateToProps = ({authorizationStatus}: State) => ({
  authorizationStatus,
});

const connector =connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

function Avatar(props: PropsFromRedux): JSX.Element {
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

export  {Avatar};
export default connector(Avatar);
