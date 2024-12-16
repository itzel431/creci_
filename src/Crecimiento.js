import React from 'react';
import { Link } from 'react-router-dom';

function Crecimiento() {
  const etapas = [
    {
      titulo: "6-7 Meses",
      contenido: "Tu bebé comenzará a sentarse solo, a balbucear 'mamá' y 'papá' y mostrará curiosidad por objetos cercanos.",
      recomendaciones: [
        "Jugar a pasar objetos de una mano a otra.",
        "Leer libros con imágenes grandes y coloridas.",
        "Fomentar la exploración de juguetes con diferentes texturas."
      ]
    },
    {
      titulo: "8-9 Meses",
      contenido: "El bebé empieza a gatear y a pararse con apoyo. Entiende el 'no' y responde a su nombre.",
      recomendaciones: [
        "Fomenta el gateo con juguetes a distancia.",
        "Lee cuentos con sonidos para que los reconozca.",
        "Permite que manipule objetos seguros para descubrir texturas."
      ]
    },
    {
      titulo: "10-12 Meses",
      contenido: "Tu bebé comenzará a caminar con apoyo, a decir algunas palabras y a señalar objetos de interés.",
      recomendaciones: [
        "Proporciona juguetes que se muevan para que los persiga.",
        "Practica juegos de imitación y baile.",
        "Ayúdalo a usar cubiertos pequeños y suaves para que coma solo."
      ]
    }
  ];

  return (
    <div className="crecimiento-container">
      <button className="back-button">
        <Link to="/">Volver al inicio</Link>
      </button>

      <h2>Crecimiento del Bebé</h2>
      <p>Descubre las etapas de desarrollo de tu bebé y las actividades recomendadas para cada una.</p>

      {etapas.map((etapa, index) => (
        <div key={index} className="etapa">
          <h3>{etapa.titulo}</h3>
          <p>{etapa.contenido}</p>
          <h4>Recomendaciones</h4>
          <ul>
            {etapa.recomendaciones.map((recomendacion, i) => (
              <li key={i}>{recomendacion}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Crecimiento;
