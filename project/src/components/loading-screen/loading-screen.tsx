import { CSSProperties } from 'react';

// idea for the preloading https://codepen.io/MathieuRichard/pen/LrHeD

const BACKGROUND: CSSProperties =  {
  background: '#347fc3',
  width: '100vw',
  overflowX: 'hidden',
  overflowY: 'hidden',
};

const BAR: CSSProperties =  {
  position: 'relative',
  height: '2px',
  width: '500px',
  margin: '0 auto',
  background: '#fff',
  marginTop: '150px',
};

const CIRCLE: CSSProperties = {
  position: 'absolute',
  top: '-30px',
  marginLeft: '-30px',
  height: '60px',
  width: '60px',
  left: '0',
  background: '#fff',
  borderRadius: '30%',
  WebkitAnimation: 'move 5s infinite',
};

const TEXT: CSSProperties = {
  position: 'absolute',
  top: '-35px',
  right: '-85px',
  textTransform: 'uppercase',
  color: '#347fc3',
  fontFamily: 'helvetica, sans-serif',
  fontWeight: 'bold',
};

// const ANIMATION: CSSProperties = {
//   0% {left: 0;}
//   50% {left: 100%; -webkit-transform: rotate(450deg); width: 150px; height: 150px;}
//   75% {left: 100%; -webkit-transform: rotate(450deg); width: 150px; height: 150px;}
//   100 {right: 100%;}
// }

function LoadingScreen(): JSX.Element {
  return (
    <div style={BACKGROUND}>
      <div style={BAR}>
        <div style={CIRCLE}></div>
        <p style={TEXT}>Loading</p>
      </div>
    </div>

  );
}

export default LoadingScreen;
