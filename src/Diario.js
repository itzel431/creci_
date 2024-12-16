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

  const handleOpenNote = (note) => {
    // Crear el contenido de la nueva ventana
    const noteContent = `
      <html>
        <head>
          <title>Nota del Diario</title>
          <style>
            body { font-family: 'Poppins', sans-serif; padding: 20px; background-color: #f8c6d4; }
            .note { font-size: 18px; margin-bottom: 15px; }
            .note small { color: gray; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="note">
            <p>${note.text}</p>
            <small>${note.date}</small>
          </div>
        </body>
      </html>
    `;
    // Abrir la nueva ventana
    const newWindow = window.open();
    newWindow.document.write(noteContent);
    newWindow.document.close();
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
          <div key={index} className="note" onClick={() => handleOpenNote(note)}>
            <p>{note.text}</p>
            <small>{note.date}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Diario;
