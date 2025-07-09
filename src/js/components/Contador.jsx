import React from 'react';

export const Contador = ({ seconds }) => {
  const formattedSeconds = String(Math.abs(Math.floor(seconds))).padStart(6, '0');

  return (
    <div className="counter-display">
      <div className="counter-icon">
        <i className="fa-regular fa-clock"></i>
      </div>
      
      {/* Mapeamos cada dígito a su propia tarjeta con la clase "digit-card" */}
      {formattedSeconds.split('').map((digit, index) => (
        <div key={index} className="digit-card">
          {digit}
        </div>
      ))}
    </div>
  );
};