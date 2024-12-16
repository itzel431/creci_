import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Salud.css';

function Salud() {
  const [formData, setFormData] = useState({
    vacuna: '',
    pañales: '',
    enfermedad: '',
    citaMedica: '',
    peso: '',
    estatura: '',
    fiebre: '',
    observaciones: ''
  });

  const [registros, setRegistros] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, { ...formData, date: new Date().toLocaleString() }]);
    setFormData({
      vacuna: '',
      pañales: '',
      enfermedad: '',
      citaMedica: '',
      peso: '',
      estatura: '',
      fiebre: '',
      observaciones: ''
    });
  };

  return (
    <div className="salud-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Registro de Salud</h2>

      <form onSubmit={handleSubmit} className="form-salud">
        <input 
          type="text" 
          name="vacuna" 
          placeholder="Vacuna aplicada" 
          value={formData.vacuna} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="pañales" 
          placeholder="Cantidad de pañales usados" 
          value={formData.pañales} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="enfermedad" 
          placeholder="Enfermedad detectada" 
          value={formData.enfermedad} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="citaMedica" 
          placeholder="Fecha de cita médica" 
          value={formData.citaMedica} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="peso" 
          placeholder="Peso del bebé (kg)" 
          value={formData.peso} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="estatura" 
          placeholder="Estatura del bebé (cm)" 
          value={formData.estatura} 
          onChange={handleChange} 
        />

        <input 
          type="text" 
          name="fiebre" 
          placeholder="Temperatura del bebé (°C)" 
          value={formData.fiebre} 
          onChange={handleChange} 
        />

        <textarea 
          name="observaciones" 
          placeholder="Observaciones adicionales..." 
          value={formData.observaciones} 
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="add-record-button">Guardar Registro</button>
      </form>

      <h2>Registros</h2>
      <div className="records-list">
        {registros.map((registro, index) => (
          <div key={index} className="record">
            <p><strong>Fecha:</strong> {registro.date}</p>
            <p><strong>Vacuna:</strong> {registro.vacuna}</p>
            <p><strong>Pañales:</strong> {registro.pañales}</p>
            <p><strong>Enfermedad:</strong> {registro.enfermedad}</p>
            <p><strong>Cita Médica:</strong> {registro.citaMedica}</p>
            <p><strong>Peso:</strong> {registro.peso} kg</p>
            <p><strong>Estatura:</strong> {registro.estatura} cm</p>
            <p><strong>Fiebre:</strong> {registro.fiebre} °C</p>
            <p><strong>Observaciones:</strong> {registro.observaciones}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salud;
