import React from 'react';
import { Contador } from './Contador.jsx';
import { Controlador } from './Controlador.jsx';
import { Alerta } from './Alerta.jsx';

const Home = (props) => {
  return (
    <div className="container">
      <h1>Contador</h1>
      <Contador seconds={props.seconds} />
      <Controlador 
        isActive={props.isActive} 
        toggle={props.controls.toggle}
        reset={props.controls.reset}
        startCountdown={props.controls.startCountdown}
        startCountUp={props.controls.startCountUp}
      />
      <Alerta currentTime={props.seconds} />
    </div>
  );
};

export default Home;