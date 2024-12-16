import React from 'react';
import { Link } from 'react-router-dom';
import './PremiumFeatures.css';

function PremiumFeatures() {
  return (
    <div className="premium-features-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>🎉 ¡Disfruta de tus Beneficios Premium! 🎉</h2>

      <p>Accede a las funcionalidades exclusivas de la versión premium</p>

      <div className="premium-sections">
        <div className="premium-section">
          <span>🎉</span>
          <p>Recompensas y Logros</p>
        </div>
        <div className="premium-section">
          <span>📈</span>
          <p>Seguimiento Avanzado</p>
        </div>
        <div className="premium-section">
          <span>🎧</span>
          <p>Sonidos Relajantes</p>
        </div>
        <div className="premium-section">
          <span>📅</span>
          <p>Calendario Personalizado</p>
        </div>
        <div className="premium-section">
          <span>🔒</span>
          <p>Acceso Exclusivo</p>
        </div>
      </div>
    </div>
  );
}

export default PremiumFeatures;
