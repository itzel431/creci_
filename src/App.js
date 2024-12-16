import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Diario from './Diario';  
import Momentos from './Momentos';  
import Salud from './Salud';  
import Lactancia from './Lactancia';  
import Crecimiento from './Crecimiento';  
import logo from './images/logocreci.jpg';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="intro-screen">
        <img src={logo} alt="Logo de Creci" className="logo" />
        <button onClick={handleStart} className="start-button">Empezamos</button>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <h1>Creci</h1>
          <p>Acompañándote en el arte de ser mamá</p>
        </header>

        {/* Secciones del menú principal */}
        <div className="app-sections">
          <Link to="/diario" className="section">
            <span>📔</span>
            <p>Diario</p>
          </Link>

          <Link to="/momentos" className="section">
            <span>📷</span>
            <p>Momentos</p>
          </Link>

          <Link to="/salud" className="section">
            <span>❤️‍🩹</span>
            <p>Salud</p>
          </Link>

          <Link to="/lactancia" className="section">
            <span>🍼</span>
            <p>Lactancia</p>
          </Link>

          <Link to="/crecimiento" className="section">
            <span>📏</span>
            <p>Crecimiento</p>
          </Link>

          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="whatsapp-button section">
            <span>📲</span>
            <p>WhatsApp</p>
          </a>
        </div>

        {/* Rutas */}
        <Routes>
          <Route path="/diario" element={<Diario />} />
          <Route path="/momentos" element={<Momentos />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/lactancia" element={<Lactancia />} />
          <Route path="/crecimiento" element={<Crecimiento />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
