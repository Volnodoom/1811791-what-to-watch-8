import { AvatarAdjustment } from '../const/const';
import { MovieInfo } from '../const/types';

const SING_IN = 'Sign in';
const SING_OUT = 'Sign out';

function Avatar(props: {film: MovieInfo}): JSX.Element {
  const {isLogged} = props.film.privateInfoWeb;

  return (
    <ul className="user-block">
      {isLogged ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={AvatarAdjustment.Img} alt={AvatarAdjustment.AltImg}  width={AvatarAdjustment.Width}  height={AvatarAdjustment.Height}  />
            </div>
          </li>
          <li className="user-block__item">
            <a href={AvatarAdjustment.UrlSingIn} className="user-block__link">{SING_OUT}</a>
          </li>
        </>
      ) : (
        <a href={AvatarAdjustment.UrlSingIn} className="user-block__link">{SING_IN}</a>
      )}
    </ul>
  );
}

export default Avatar;
