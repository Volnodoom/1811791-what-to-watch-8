import { CSSProperties } from 'react';

const loadingDiv: CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#401212',
  color: '#dfcf77',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const loadingText: CSSProperties = {
  display: 'block',
  fontSize: '38px',
  fontStyle: 'italic',
  fontWeight: 'bold',
};

function LoadingScreen(): JSX.Element {
  return (
    <div style={loadingDiv}>
      <p style={loadingText}>Loading ...</p>
    </div>
  );
}

export default LoadingScreen;
