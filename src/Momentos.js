import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Momentos.css';

function Momentos() {
  const [photos, setPhotos] = useState([
    { src: 'https://via.placeholder.com/200', date: '10 de Marzo de 2024' },
    { src: 'https://via.placeholder.com/200', date: '20 de Febrero de 2024' },
    { src: 'https://via.placeholder.com/200', date: '15 de Enero de 2024' },
    { src: 'https://via.placeholder.com/200', date: '5 de Marzo de 2024' },
    { src: 'https://via.placeholder.com/200', date: '22 de Abril de 2024' },
    { src: 'https://via.placeholder.com/200', date: '8 de Mayo de 2024' }
  ]);

  // Solicita acceso a la cámara y captura la imagen
  const handleTakePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageSrc = canvas.toDataURL('image/png');
        
        // Guardar la nueva foto en el estado
        setPhotos((prevPhotos) => [
          ...prevPhotos,
          { src: imageSrc, date: new Date().toLocaleString() }
        ]);

        video.pause();
        video.srcObject.getTracks().forEach(track => track.stop());
      }, 3000); // Esperar 3 segundos para tomar la foto
    } catch (error) {
      alert('No se pudo acceder a la cámara. Asegúrate de permitir el acceso.');
      console.error(error);
    }
  };

  // Manejar la carga de archivos desde la PC o móvil
  const handleUploadPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotos((prevPhotos) => [
          ...prevPhotos,
          { src: reader.result, date: new Date().toLocaleString() }
        ]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="momentos-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Momentos Especiales</h2>

      <div className="buttons-container">
        <button onClick={handleTakePhoto} className="take-photo-button">Tomar Foto</button>

        <label className="upload-photo-button">
          Subir Foto
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleUploadPhoto} 
            style={{ display: 'none' }} 
          />
        </label>
      </div>

      <div className="photo-gallery">
        {photos.map((photo, index) => (
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
