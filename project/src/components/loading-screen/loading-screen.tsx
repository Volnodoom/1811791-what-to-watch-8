import { divLoading, textLoading } from './style-loading-screen';

function LoadingScreen(): JSX.Element {
  return (
    <div style={divLoading}>
      <p style={textLoading}>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
