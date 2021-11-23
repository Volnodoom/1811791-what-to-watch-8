import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { IdParam } from '../components/types/types';
import { fetchMovie } from '../store/api-actions';
import * as selectors from '../store/selectors';

export const useSignInOut = (): void => {
  const idPromo = useSelector(selectors.getPromoMovie)?.id;
  const {id} = useParams<IdParam>();
  const dispatch = useDispatch();

  if (id) {
    dispatch(fetchMovie(Number(id)));
  }

  if (idPromo) {
    dispatch(fetchMovie(Number(idPromo)));
  }
};
