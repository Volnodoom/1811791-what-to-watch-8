import { MovieInfo } from '../types/types';

const AvatarAdjustment = {
  Img: 'img/avatar.jpg',
  AltImg: 'User avatar',
  UrlSingIn: 'sign-in.html',
  UrlSingOut: 'sign-in.html',
} as const;

function Avatar(props: {film: MovieInfo}): JSX.Element {
  const {isLogged} = props.film.privateInfoWeb;

  return (
    <ul className="user-block">
      {isLogged ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={AvatarAdjustment.Img} alt={AvatarAdjustment.AltImg}  width="63"  height="63"  />
            </div>
          </li>
          <li className="user-block__item">
            <a href={AvatarAdjustment.UrlSingIn} className="user-block__link">Sign out</a>
          </li>
        </>
      ) : (
        <a href={AvatarAdjustment.UrlSingIn} className="user-block__link">Sign in</a>
      )}
    </ul>
  );
}

export default Avatar;
