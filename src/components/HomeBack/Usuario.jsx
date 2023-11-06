import React from 'react'
<<<<<<< HEAD
=======
import NavBarBack from './NavbarBack';
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b

const Usuario = ({data}) => {
    const { id, nombre, email, telefono, estado } = data;
    console.log(data);
    return (
<<<<<<< HEAD
=======
        <>
        <NavBarBack/>
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
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
<<<<<<< HEAD
=======
        </>
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
    );
}; 

export default Usuario