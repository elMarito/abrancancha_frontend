import React from 'react'

const Cancha = ({data}) => {
    const { id, numero, nombre, tipo, tarifa, rating, observaciones, activa } = data;
    // idClub
    
    // console.log(data);
    return (
        <tr>
            {/* <th scope="row">{id}</th> */}
            <td>{id}</td>
            {/* <td>{idClub}</td> */}
            <td>{numero}</td>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>$ {tarifa}</td>
            <td>{observaciones}</td>
            <td>{"★".repeat(rating) + "☆".repeat(5-rating)}</td>
            {/* <td>{rating > 2.5 ? "★" : "☆"}</td> */}
            <td>{activa ? 'Activa' : 'Inactiva'}</td>
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

export default Cancha