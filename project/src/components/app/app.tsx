import { MovieProps } from '../const/const';
import PageContent from '../main/main-page-content';

function App(film: MovieProps): JSX.Element {
  return (
    <PageContent film = {film} />
  );
}

export default App;
