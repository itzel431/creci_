import React from 'react';
import { Link } from 'react-router-dom';
import './MenuPremium.css';

function MenuPremium() {
  return (
    <div className="menu-premium-container">
      <header className="app-header">
        <h1>¡Bienvenido, Usuario Premium! 🌟</h1>
        <p>Disfruta de todas las funciones exclusivas y básicas en un solo lugar</p>
      </header>

      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <div className="premium-sections">
        {/* Sección de funcionalidades básicas */}
        <Link to="/diario">
          <div className="section">
            <span>📔</span>
            <p>Diario</p>
          </div>
        </Link>

        <Link to="/momentos">
          <div className="section">
            <span>📷</span>
            <p>Momentos</p>
          </div>
        </Link>

        <Link to="/salud">
          <div className="section">
            <span>❤️‍🩹</span>
            <p>Salud</p>
          </div>
        </Link>

        <Link to="/lactancia">
          <div className="section">
            <span>🍼</span>
            <p>Lactancia</p>
          </div>
        </Link>

        <Link to="/crecimiento">
          <div className="section">
            <span>📏</span>
            <p>Crecimiento</p>
          </div>
        </Link>

        {/* Sección de funcionalidades exclusivas de Premium */}
        <Link to="/logros">
          <div className="section premium-exclusive">
            <span>🏆</span>
            <p>Logros</p>
          </div>
        </Link>

        <Link to="/relajantes">
          <div className="section premium-exclusive">
            <span>🎧</span>
            <p>Sonidos Relajantes</p>
          </div>
        </Link>

        <Link to="/calendario">
          <div className="section premium-exclusive">
            <span>📅</span>
            <p>Calendario Personalizado</p>
          </div>
        </Link>

        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button">
          <span>📲</span>
          <p>WhatsApp</p>
        </a>
      </div>
    </div>
  );
}

export default MenuPremium;
