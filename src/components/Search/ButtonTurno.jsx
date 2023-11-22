import React, { useContext } from 'react'
import { appContext } from '../../context/appContext';

const ButtonTurno = ({ hora, cancha, reserva }) => {
  const { cache, setCache } = useContext(appContext);
  const loggedUserId = cache.user ? cache.user.id : null;
  // const caption = (reserva === undefined) ? "Disp.." : "Reservada";
  //"btn btn-danger botonBorrar"
  const classTurno = (reserva === undefined) ? "edit btn btn-primary"
    : (`view btn ${(reserva.idUsuario === loggedUserId) ? "btn-warning" : "btn-danger"}`);
  const classIcono = (reserva === undefined) ? "fa-regular fa-pen-to-square" : "fa-regular fa-eye";
  /**turno disponible */
  //**tambien se podria chequear la Hora para poner otro mensaje o con otro color */

  return (
    <button key={hora} type="button"
      className={classTurno}
      // data-bs-toggle="modal"
      // data-bs-target="#editModal"
      {...(reserva !== undefined && {
        'data-reserva-id': reserva.id,
        'data-usuario-id': reserva.idUsuario,
      })}
      data-cancha-id={cancha.id}
      data-cancha-nombre={cancha.nombre}
      // data-fecha={reserva.idCancha}
      data-hora={hora}>
      {/** capaz q hay q recibirlo por prop*/}
      {/* {caption} */}
      <i className={classIcono}></i>
    </button>
  )
}

export default ButtonTurno