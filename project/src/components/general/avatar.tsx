import { MouseEvent } from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLogout, fetchMovie } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../const/const';
import * as selectors from '../../store/selectors';
import { IdParam } from '../types/types';


function Avatar(): JSX.Element {
  const authorizationStatus = useSelector(selectors.getAuthorizationStatus);
  const userImg = useSelector(selectors.getUserAvatar);
  const userName = useSelector(selectors.getUserName);
  const idPromo = useSelector(selectors.getPromoMovie)?.id;

  const {id} = useParams<IdParam>();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    dispatch(fetchLogout());

    if (id) {
      dispatch(fetchMovie(Number(id)));
    }

    if (idPromo) {
      dispatch(fetchMovie(Number(idPromo)));
    }
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.Auth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={userImg}
                alt={userName}
                width="63"
                height="63"
                onClick={()=> history.push(AppRoute.MyList)}
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link
              to={AppRoute.Main}
              className="user-block__link"
              onClick={handleLogoutClick}
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
