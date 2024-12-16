import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Diario() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const handleAddNote = () => {
    const newNote = {
      text: note,
      date: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
    setNote(''); // Limpiar el campo de nota
  };

  return (
    <div className="diario-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>
      
      <h2>Notas del Diario</h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Escribe tus notas..."
      ></textarea>

      <button onClick={handleAddNote} className="add-note-button">
        Agregar Nota
      </button>

      <div className="notes-list">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p>{note.text}</p>
            <small>{note.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diario;
