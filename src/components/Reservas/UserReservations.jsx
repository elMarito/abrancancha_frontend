import React, { useState, useEffect } from 'react';

const CanchaAvailability = () => {
  const [canchaType, setCanchaType] = useState('');
  const [fecha, setFecha] = useState('');
  const [horario, setHorario] = useState('');
  const [disponibilidad, setDisponibilidad] = useState([]);

  // Define una función para manejar la búsqueda de disponibilidad
  const buscarDisponibilidad = () => {
    // Aquí debes hacer una llamada a una API o una consulta a una base de datos para obtener la disponibilidad de las canchas.
    // Puedes simularlo con datos de ejemplo o utilizar una API real.
    // Por ejemplo, supongamos que tienes una función llamada fetchAvailability que devuelve la disponibilidad.

    const disponibilidad = fetchAvailability(canchaType, fecha, horario);
    setDisponibilidad(disponibilidad);
  };

  // Utiliza useEffect para ejecutar la búsqueda cuando cambien los valores de canchaType, fecha o horario.
  useEffect(() => {
    buscarDisponibilidad();
  }, [canchaType, fecha, horario]);

  return (
    <div>
      <h1>Búsqueda de disponibilidad de canchas</h1>
      <div>
        <label>Tipo de Cancha:</label>
        <select value={canchaType} onChange={(e) => setCanchaType(e.target.value)}>
          <option value="">Seleccione un tipo de cancha</option>
          <option value="cancha1">Cancha 1</option>
          <option value="cancha2">Cancha 2</option>
          {/* Agrega más opciones de tipo de cancha según tus necesidades */}
        </select>
      </div>
      <div>
        <label>Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </div>
      <div>
        <label>Horario:</label>
        <input type="time" value={horario} onChange={(e) => setHorario(e.target.value)} />
      </div>
      <button onClick={buscarDisponibilidad}>Buscar</button>
      <div>
        <h2>Disponibilidad:</h2>
        <ul>
          {disponibilidad.map((hora) => (
            <li key={hora}>{hora}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CanchaAvailability;


