import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Diario from './Diario';  // Importamos el componente Diario
import logo from './images/logocreci.jpg';  // Importar el logo desde src/images

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

        <div className="app-sections">
          <Link to="/diario">
            <div className="section">Diario</div>
          </Link>
          <div className="section">Momentos</div>
          <div className="section">Salud</div>
          <div className="section">Lactancia</div>
          <div className="section">Crecimiento</div>
          <div className="section">WhatsApp</div>
        </div>

        {/* Rutas para las páginas */}
        <Routes>
          <Route path="/diario" element={<Diario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
