import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Lactancia.css';

function Lactancia() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [pauseRecords, setPauseRecords] = useState([]);

  // Efecto para actualizar el tiempo del temporizador cada segundo
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  // Formato del tiempo en minutos y segundos
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  const handleStart = () => {
    if (!isRunning) {
      setStartTime(new Date().toLocaleTimeString());
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning) {
      const endTime = new Date().toLocaleTimeString();
      setPauseRecords([...pauseRecords, {
        startTime,
        endTime,
        duration: formatTime(time)
      }]);
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setStartTime(null);
  };

  return (
    <div className="lactancia-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Temporizador de Lactancia</h2>

      <div className="timer-display">
        {formatTime(time)}
      </div>

      <div className="buttons">
        <button onClick={handleStart} className="start-button">Iniciar</button>
        <button onClick={handlePause} className="pause-button">Pausar</button>
        <button onClick={handleReset} className="reset-button">Reiniciar</button>
      </div>

      <h2>Historial de Pausas</h2>
      <div className="pause-records">
        {pauseRecords.map((record, index) => (
          <div key={index} className="pause-record">
            <p><strong>Inicio:</strong> {record.startTime}</p>
            <p><strong>Fin:</strong> {record.endTime}</p>
            <p><strong>Duración:</strong> {record.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lactancia;
