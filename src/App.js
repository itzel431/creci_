import React, { useState } from 'react';
import './App.css';  // Para los estilos del encabezado y los apartados
import Login from './Login';  // Importamos el componente Login
import logo from './images/logocreci.jpg';  // Importar el logo desde src/images
import background from './images/background.jpg';  // Importar la imagen de fondo

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);  // Estado para mostrar la pantalla inicial

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleStart = () => {
    setShowIntro(false);  // Ocultar la pantalla inicial y mostrar el login
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
    <div className="app">
      <header className="app-header">
        <h1>Creci</h1>
        <p>Acompañándote en el arte de ser mamá</p>
      </header>

      <div className="app-sections">
        <div className="section">Diario</div>
        <div className="section">Momentos</div>
        <div className="section">Salud</div>
        <div className="section">Lactancia</div>
        <div className="section">Crecimiento</div>
        <div className="section">WhatsApp</div>
      </div>
    </div>
  );
}

export default App;
