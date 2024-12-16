import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Diario from './Diario';  
import Momentos from './Momentos';  
import Salud from './Salud';  
import Lactancia from './Lactancia';  
import Crecimiento from './Crecimiento';  
import Premium from './Premium';  
import PremiumFeatures from './PremiumFeatures'; 
import Confetti from 'react-confetti'; 
import logo from './images/logocreci.jpg';  

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [isPremium, setIsPremium] = useState(false); 
  const [showConfetti, setShowConfetti] = useState(false); 

  useEffect(() => {
    const premiumStatus = localStorage.getItem('isPremium');
    if (premiumStatus === 'true') {
      setIsPremium(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
      setIsPremium(localStorage.getItem('isPremium') === 'true');
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleStart = () => {
    setShowIntro(false);
  };

  const handleSubscribePremium = () => {
    setIsPremium(true);
    localStorage.setItem('isPremium', 'true');
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti por 5 segundos
    alert('¡Felicidades! Ahora eres usuario Premium 🎉');
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
              <p>Premium</p>
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

        <Routes>
          <Route path="/diario" element={<Diario />} />
          <Route path="/momentos" element={<Momentos isPremium={isPremium} />} />
          <Route path="/salud" element={<Salud />} />
          <Route path="/lactancia" element={<Lactancia />} />
          <Route path="/crecimiento" element={<Crecimiento />} />
          <Route path="/premium" element={<Premium setIsPremium={setIsPremium} onSubscribe={handleSubscribePremium} />} />
          <Route path="/premium-features" element={<PremiumFeatures />} />
        </Routes>

        {showConfetti && <Confetti />}
      </div>
    </Router>
  );
}

export default App;
