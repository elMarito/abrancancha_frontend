import React from 'react'

const ButtonTurno = ({ hora, cancha, reserva }) => {
    // const caption = (reserva === undefined) ? "Disp.." : "Reservada";
    const classTurno = (reserva === undefined) ? "edit btn btn-primary" : "view btn btn-danger"; //"btn btn-danger botonBorrar"
    const classIcono = (reserva === undefined) ? "fa-regular fa-pen-to-square" : "fa-regular fa-eye";
    /**turno disponible */
    //**tambien se podria chequear la Hora para poner otro mensaje o con otro color */

    return (
        <button key={hora} type="button"
            className={classTurno}
            // data-bs-toggle="modal"
            // data-bs-target="#editModal"
            // data-cancha-id={cancha}
            data-cancha={cancha}
            // data-fecha={reserva.idCancha}
            data-hora={hora}>
            {/** capaz q hay q recibirlo por prop*/}
            {/* {caption} */}
            <i className={classIcono}></i>
        </button>
    )
}
// ejemplso para copiar formatos de botones
/* <td> 
    <button type="button" className="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-cancha-id="${cancha.id}">
        <i className="fa-regular fa-pen-to-square"></i>
    </button>
    <button type="button" className="btn btn-danger botonBorrar" data-cancha-id="${cancha.id}">
        <i className="fa-solid fa-trash"></i>
    </button>
    <button type="button" className="view btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal" data-cancha-id="${cancha.id}">
        <i className="fa-regular fa-eye"></i>
    </button>
</td> */
export default ButtonTurno