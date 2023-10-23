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

  // Función simulada para obtener la disponibilidad de las canchas
const fetchAvailability = (canchaType, fecha, horario) => {
    
    const availabilityData = [
      {
        tipo: 'cancha1',
        fecha: '2023-10-16',
        horario: '09:00',
      },
      {
        tipo: 'cancha1',
        fecha: '2023-10-16',
        horario: '10:00',
      },
      {
        tipo: 'cancha2',
        fecha: '2023-10-16',
        horario: '09:00',
      },
      // Agrega más datos de disponibilidad según tus necesidades
    ];
  
    // Filtra los datos según los parámetros proporcionados
    const filteredData = availabilityData.filter((item) => {
      return item.tipo === canchaType && item.fecha === fecha && item.horario === horario;
    });
  
    // Devuelve una lista de horarios disponibles
    const horariosDisponibles = filteredData.map((item) => item.horario);
  
    return horariosDisponibles;
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
        <select className="custom-select" value={canchaType} onChange={(e) => setCanchaType(e.target.value)}>
          <option value="">Seleccione un tipo de cancha</option>
          <option  value="Futbol5">Futbol 5</option>
          <option  value="Futbol7">Futbol 7</option>
          <option  value="Futbol9">Futbol 9</option>
          <option  value="Futbol11">Futbol 11</option>
          <option value="Padel"> Padel</option>
        </select>
      </div>
      <div>
        <label>Fecha:</label>
        <input className="custom-select"  type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </div>
      <div>
        <label>Horario:</label>
        <select className="custom-select">
                      <option selected value="8:00">8:00</option>
                      <option value="8:30">8:30</option>
                      <option value="9:00">9:00</option>
                      <option value="9:30">9:30</option>
                    </select>
      </div>
      <button className='search_btn' onClick={buscarDisponibilidad}>Buscar</button>
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


