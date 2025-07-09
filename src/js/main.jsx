import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/index.css';

import Home from './components/Home.jsx';

const reactRender = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;
let isActive = true;
let isCountdown = false;

const controls = {
  toggle: () => { isActive = !isActive; },
  reset: () => { isActive = false; counter = 0; renderApp(); },
  startCountdown: (from) => {
    isCountdown = true;
    isActive = true;
    counter = from;
  },
  startCountUp: () => {
    isCountdown = false;
    isActive = true;
    counter = 0;
  }
};

const renderApp = () => {
  reactRender.render(
    <React.StrictMode>
      <Home
        seconds={counter}
        isActive={isActive}
        controls={controls}
      />
    </React.StrictMode>
  );
};

setInterval(() => {
  if (isActive) {
    if (isCountdown) {
      if (counter > 0) counter--;
      else isActive = false;
    } else {
      counter++;
    }
  }
  renderApp();
}, 1000);