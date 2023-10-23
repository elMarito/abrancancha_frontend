import React, { useState } from 'react';

function FormularioReserva({ agregarReserva, actualizarReserva, reservaEditada }) {
  const [cancha, setCancha] = useState('');
  const [hora, setHora] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (reservaEditada) {
      // Actualizar reserva existente
      actualizarReserva({
        cancha,
        hora,
        fecha,
        id: reservaEditada.id,
      });
    } else {
      // Crear nueva reserva
      agregarReserva({
        cancha,
        hora,
        fecha,
        id: Date.now(), // En un entorno real, puedes generar IDs únicos
      });
    }

    // Restablecer los campos del formulario
    setCancha('');
    setHora('');
    setFecha('');
  };

  return (
    <div>
      <h2>Reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Cancha:
          <input type="text" value={cancha} onChange={(e) => setCancha(e.target.value)} />
        </label>
        <label>
          Hora:
          <input type="text" value={hora} onChange={(e) => setHora(e.target.value)} />
        </label>
        <label>
          Fecha:
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </label>
        <button type="submit">{reservaEditada ? 'Actualizar' : 'Agregar'}</button>
      </form>
    </div>
  );
}

export default FormularioReserva;
