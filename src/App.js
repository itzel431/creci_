import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Diario from './Diario';  
import Momentos from './Momentos';  
import Salud from './Salud';  
import Lactancia from './Lactancia';  // Importamos el componente Lactancia
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
          <Link to="/diario">
            <div className="section">Diario</div>
          </Link>
          <Link to="/momentos">
            <div className="section">Momentos</div>
          </Link>
          <Link to="/salud">
            <div className="section">Salud</div>
          </Link>
          <Link to="/lactancia">
            <div className="section">Lactancia</div>
          </Link>
          <div className="section">Crecimiento</div>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
            WhatsApp
          </a>
        </div>

        {/* Rutas */}
        <Routes>
          <Route path="/diario" element={<Diario />} />
          <Route path="/momentos" element={<Momentos />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/lactancia" element={<Lactancia />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
