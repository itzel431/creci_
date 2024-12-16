import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import './Logros.css';

function Logros() {
  const [logros, setLogros] = useState([
    { id: 1, text: 'Mi bebé tomó su comida a sus horas', completed: false },
    { id: 2, text: 'Mi bebé durmió toda la noche', completed: false },
    { id: 3, text: 'Mi bebé dijo su primera palabra', completed: false },
  ]);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleComplete = (id) => {
    const updatedLogros = logros.map(logro => 
      logro.id === id ? { ...logro, completed: true } : logro
    );
    setLogros(updatedLogros);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  return (
    <div className="logros-container">
      {showConfetti && <Confetti />}
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Logros</h2>

      <ul className="logros-list">
        {logros.map(logro => (
          <li 
            key={logro.id} 
            className={`logro-item ${logro.completed ? 'completed' : ''}`}
            onClick={() => handleComplete(logro.id)}
          >
            {logro.text}
            {logro.completed && <span>🏅</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Logros;
