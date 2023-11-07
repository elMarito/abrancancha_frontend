import React from 'react'
import NavBarBack from './NavbarBack';

const Usuario = ({data}) => {
    const { id, nombre, email, telefono, estado } = data;
    console.log(data);
    return (
        <>
        <NavBarBack/>
        <tr>
            <td>{id}</td>
            {/* <td>{idClub}</td> */}
            <td>{nombre}</td>
            <td>{email}</td>
            <td>{telefono}</td>
            <td>{estado}</td>
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
        </>
    );
}; 

export default Usuario