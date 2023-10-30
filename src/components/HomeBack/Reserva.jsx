import React from 'react'

const Reserva = ({ data }) => {
    const { id, usuario, cancha, fecha, estado } = data;
    // console.log(data);

    // "id": 1,
    // "idUsuario": 1,
    // "idCancha": 101,
    // "fecha": "2023-10-21T10:00:00Z",
    // "estado": "confirmada"


    return (
        <tr>
            {/* <th scope="row">{id}</th> */}
            <td>{id}</td>
            {/* <td>{idClub}</td> */}
            <td>{usuario.nombre}</td>
            {/* <td>{idUsuario}</td> */}
            <td>{cancha.nombre}</td>
            {/* <td>{tarifa}</td> */}
            <td>{fecha}</td>
            {/* <td>{"★".repeat(rating) + "☆".repeat(5-rating)}</td> */}
            {/* <td>{rating > 2.5 ? "★" : "☆"}</td> */}
            <td>{estado}</td>
            {/* <td>10</td>
            <td>Grande Norte</td>
            <td>Futbol</td>
            <td>$ 1.000,00</td>
            <td>Activa</td> */}
            <td>
                <button type="button" className="edit btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal" data-cancha-id="${cancha.id}">
                    <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button type="button" className="btn btn-danger botonBorrar" data-cancha-id="${cancha.id}">
                    <i className="fa-solid fa-trash"></i>
                </button>
                <button type="button" className="view btn btn-info" data-bs-toggle="modal" data-bs-target="#viewModal" data-cancha-id="${cancha.id}">
                    <i className="fa-regular fa-eye" /* style="color:#fff" */></i>
                </button>
            </td>
        </tr>
    );
};

export default Reserva