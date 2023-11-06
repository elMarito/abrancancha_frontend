import React, { useState, useEffect, useContext } from "react";
import Usuario from "./Usuario";
<<<<<<< HEAD
=======
import NavBarBack from '../HomeBack/NavbarBack';
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b

// import { appContext } from '../../context/appContext';
//-----------------------------------------------------------------------------
const Administradores = () => {
  const [usuarios, setUsuarios] = useState([]);
  // const canchas = useFetch("https://fakestoreapi.com/products/categories");
  const BASE_URL = "http://localhost:3030/"
  useEffect(() => {
    // console.log("effect");
    // fetch(BASE_URL + "administradores")
    fetch(BASE_URL + "usuarios")
      .then(res => {
        if (res.ok) return res.json();
        throw new Error(`${res.status}. ${res.statusText}`);
      })
      .then(data => {
        // console.log("setcanchas");
        setUsuarios(data);
        // setCache((prevState) => ({ ...prevState, categories: data, }));
        // console.log(data);
      })
      .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
  }, [])
  // console.log("hol",canchas);

  if (usuarios.lenght == 0) return (<></>);

  return (
    <>
<<<<<<< HEAD
=======
     <NavBarBack />
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
      <button type="button" className="edit btn btn-primary" >
        <i className="fa-regular fa-pen-to-square">Agregar administradores</i>
      </button>
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            {/* <th scope="col">N°</th> */}
            <th scope="col">Nombre</th>
            {/* <th scope="col">password</th> */}
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className='table-striped table-group-divider'>
          {usuarios.map(user => (
            <Usuario key={user.id} data={user} />
          ))}
        </tbody>
      </table>
    </>
  )
}
export default Administradores