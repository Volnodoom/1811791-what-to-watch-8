import { MovieInfo } from '../types/types';
import Main from '../main/main';

export default function App(props: {film: MovieInfo}): JSX.Element {
  return (
    <Main film={props.film} />
  );
}
