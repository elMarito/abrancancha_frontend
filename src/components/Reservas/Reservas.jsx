import React from 'react';

function Reservas({ reservas, eliminarReserva }) {
  return (
    <div>
      <h2>Reservas</h2>
      <table>
        <thead>
          <tr>
            <th>Cancha</th>
            <th>Hora</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map(reserva => (
            <tr key={reserva.id}>
              <td>{reserva.cancha}</td>
              <td>{reserva.hora}</td>
              <td>{reserva.fecha}</td>
              <td>
                <button onClick={() => eliminarReserva(reserva.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservas;
