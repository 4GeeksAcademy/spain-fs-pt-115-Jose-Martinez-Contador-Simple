import React, { useState, useEffect } from 'react';

export const Alerta = ({ currentTime }) => {
  const [alertTime, setAlertTime] = useState('');

  useEffect(() => {
    if (currentTime > 0 && currentTime === parseInt(alertTime)) {
      alert(`¡ALERTA! Se alcanzaron los ${alertTime} segundos.`);
      setAlertTime('');
    }
  }, [currentTime, alertTime]);

  return (
   
    <div className="alert-control">
      
      <label htmlFor="alertInput">Alertar a los:</label>
      <input
        id="alertInput"
        type="number"
        placeholder="Ej: 10"
        value={alertTime}
        onChange={(e) => setAlertTime(e.target.value)}
      />
      <span>segundos</span>
    </div>
  );
};