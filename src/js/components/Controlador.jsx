import React from 'react';

export const Controlador = ({ isActive, toggle, reset, startCountdown, startCountUp }) => {
  const handleStartCountdown = () => {
    const startTime = parseInt(prompt("Iniciar cuenta regresiva desde:", "60"));
    if (!isNaN(startTime) && startTime > 0) {
      startCountdown(startTime);
    }
  };

  return (
    <div className="action-buttons">
      <button className="btn-control" onClick={toggle}>
        {isActive ? 'Parar' : 'Resumir'}
      </button>
      <button className="btn-control" onClick={reset}>
        Reiniciar
      </button>
      <button className="btn-control" onClick={handleStartCountdown}>
        Cuenta Regresiva
      </button>
      <button className="btn-control" onClick={startCountUp}>
        Contador Normal
      </button>
    </div>
  );
};