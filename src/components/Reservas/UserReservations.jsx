import React, { useState } from 'react';
import Reservas from './Reservas';
import FormularioReserva from './FormularioReserva';


function UserReservations() {
    const [reservas, setReservas] = useState([
      { id: 1, cancha: 'Cancha 1', hora: '10:00', fecha: '2023-10-14' },
      { id: 2, cancha: 'Cancha 2', hora: '11:30', fecha: '2023-10-15' },
      // Ejemplos de prueba
    ]);
  
    const [reservaEditada, setReservaEditada] = useState(null);
  
    const agregarReserva = (nuevaReserva) => {
      setReservas([...reservas, nuevaReserva]);
    };
  
    const actualizarReserva = (reservaActualizada) => {
      setReservas(reservas.map(reserva => (reserva.id === reservaActualizada.id ? reservaActualizada : reserva)));
      setReservaEditada(null);
    };
  
    const eliminarReserva = (id) => {
      setReservas(reservas.filter(reserva => reserva.id !== id));
    };
  
    return (
      <div>  
        <h1>Reservas de Canchas</h1>
        <Reservas reservas={reservas} eliminarReserva={eliminarReserva} />
        <FormularioReserva
          agregarReserva={agregarReserva}
          actualizarReserva={actualizarReserva}
          reservaEditada={reservaEditada}
        />
      </div>   
      );
}

export default UserReservations;
