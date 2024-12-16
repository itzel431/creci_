import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import Diario from './Diario';  
import Momentos from './Momentos';  
import Salud from './Salud';  
import Lactancia from './Lactancia';  
import Crecimiento from './Crecimiento';  
import Premium from './Premium';  
import MenuPremium from './MenuPremium'; 
import Confetti from 'react-confetti'; 
import logo from './images/logocreci.jpg';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isPremium, setIsPremium] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); 
  const [showConfetti, setShowConfetti] = useState(false); 

  // Comprobar si el usuario es premium al cargar la app
  useEffect(() => {
    const premiumStatus = localStorage.getItem('isPremium');
    if (premiumStatus === 'true') {
      setIsPremium(true);
    }
    setIsLoading(false); // Terminamos la carga
  }, []);

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

  return (
    <Router>
      <AppContent 
        isLoggedIn={isLoggedIn}
        showIntro={showIntro}
        handleStart={handleStart}
        handleLogin={handleLogin}
        isPremium={isPremium}
        setIsPremium={setIsPremium}
        showConfetti={showConfetti}
        setShowConfetti={setShowConfetti}
        isLoading={isLoading}
      />
    </Router>
  );
}

function AppContent({ 
  isLoggedIn, 
  showIntro, 
  handleStart, 
  handleLogin, 
  isPremium, 
  setIsPremium, 
  showConfetti, 
  setShowConfetti, 
  isLoading 
}) {
  const navigate = useNavigate(); 

  // Lógica para activar Premium
  const handleSubscribePremium = () => {
    setIsPremium(true);
    localStorage.setItem('isPremium', 'true');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); 
    alert('¡Felicidades! Ahora eres usuario Premium 🎉');
    navigate('/menu-premium'); 
  };

  // Pantalla de carga
  if (isLoading) {
    return (
      <div className="loading-screen">
        <h2>Cargando...</h2>
      </div>
    );
  }

  // Pantalla de introducción
  if (showIntro) {
    return (
      <div className="intro-screen">
        <img src={logo} alt="Logo de Creci" className="logo" />
        <button onClick={handleStart} className="start-button">Empezamos</button>
      </div>
    );
  }

  // Pantalla de inicio de sesión
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Creci</h1>
        <p>Acompañándote en el arte de ser mamá</p>
      </header>

      {/* Menú básico */}
      <>
        <div className="app-sections">
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

          <Link to="/premium">
            <div className="section premium-section">
              <span>🌟</span>
              <p>Hazte Premium</p>
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
      </>

      <Routes>
        <Route path="/diario" element={<Diario />} />
        <Route path="/momentos" element={<Momentos isPremium={isPremium} />} />
        <Route path="/salud" element={<Salud />} />
        <Route path="/lactancia" element={<Lactancia />} />
        <Route path="/crecimiento" element={<Crecimiento />} />
        <Route 
          path="/premium" 
          element={
            <Premium 
              setIsPremium={setIsPremium} 
              onSubscribe={handleSubscribePremium} 
            />
          } 
        />
        <Route path="/menu-premium" element={<MenuPremium />} />
      </Routes>

      {showConfetti && <Confetti />}
    </div>
  );
}

export default App;
