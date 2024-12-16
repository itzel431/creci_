import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import './Premium.css';

function Premium({ setIsPremium }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate(); // Hook para redirigir a otra página

  const handleUpgradeToPremium = () => {
    setShowConfetti(true); // Activar confetti
    setIsPremium(true);
    localStorage.setItem('isPremium', 'true'); // Guardar el estado premium en el almacenamiento local
    
    setTimeout(() => {
      setShowConfetti(false); // Desactivar confetti después de 5 segundos
      alert('¡Felicidades! Ahora eres usuario Premium 🎉');
      navigate('/menu-premium'); // Redirigir a la página de Menu Premium
    }, 3000); // Tiempo de espera de 3 segundos antes de redirigir
  };

  return (
    <div className="premium-container">
      {showConfetti && <Confetti numberOfPieces={300} />}
      
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>¡Bienvenido a la Experiencia Premium! ✨</h2>

      <p>Disfruta de las funcionalidades exclusivas de la versión Premium</p>

      <div className="premium-benefits">
        <h3>¿Qué obtendrás con Premium?</h3>
        <ul>
          <li>🎧 Acceso a sonidos relajantes</li>
          <li>📈 Seguimiento de progreso avanzado</li>
          <li>🔒 Acceso a contenido exclusivo</li>
          <li>🏆 Acceso a recompensas y logros</li>
          <li>📅 Calendario personalizado</li>
        </ul>
      </div>

      <button className="upgrade-button" onClick={handleUpgradeToPremium}>
        ¡Hazte Premium Ahora!
      </button>
    </div>
  );
}

export default Premium;
