import React from 'react';
import { Link } from 'react-router-dom';
import './Momentos.css';

function Momentos() {
  // Ejemplo de imágenes con sus fechas simuladas
  const examplePhotos = [
    { src: 'https://via.placeholder.com/200', date: '10 de Marzo de 2024' },
    { src: 'https://via.placeholder.com/200', date: '20 de Febrero de 2024' },
    { src: 'https://via.placeholder.com/200', date: '15 de Enero de 2024' },
    { src: 'https://via.placeholder.com/200', date: '5 de Marzo de 2024' },
    { src: 'https://via.placeholder.com/200', date: '22 de Abril de 2024' },
    { src: 'https://via.placeholder.com/200', date: '8 de Mayo de 2024' }
  ];

  return (
    <div className="momentos-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Momentos Especiales</h2>

      <div className="photo-gallery">
        {examplePhotos.map((photo, index) => (
          <div key={index} className="photo-item">
            <img src={photo.src} alt={`Momento ${index + 1}`} className="photo" />
            <p className="photo-date"><em>{photo.date}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Momentos;
