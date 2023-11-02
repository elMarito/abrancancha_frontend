import React from 'react'
// import './NavbarStyles.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
// import Login from './Login';
// import Register from './Register';

function NavBarBack() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* <nav className="navbar bg-body-tertiary"> */}
      <nav className="navbar navbar-expand-lg  static-top">
        <div className="container ">
        <ul className="navbar-nav ">
        <Link to='/' className="navbar-brand"><img src="/src/assets/abc_logo.svg" alt="" width="90" /></Link>
        {/* <form className="container-fluid justify-content-start"> */}
          <Link to="/cronograma" className="nav-link" aria-current="page" href="#"><button className='btn btn-sm btn-outline-secondary'>Cronograma</button></Link>
          <Link to="/canchas" className="nav-link" aria-current="page" href="#"><button className='btn btn-outline-success me-2'>Canchas</button></Link>
          <Link to="/agenda" className="nav-link" aria-current="page" href="#"><button className='btn btn-outline-success me-2'>Disponibilidad/Agenda</button></Link>
          <Link to="/reservas" className="nav-link" aria-current="page" href="#"><button className='btn btn-outline-success me-2'>Reservas</button></Link>
          <Link to="/Clientes" className="nav-link" aria-current="page" href="#"><button className='btn btn-outline-success me-2'>Clientes</button></Link>
          <Link to="/Administradores" className="nav-link" aria-current="page" href="#"><button className='btn btn-outline-success me-2'>Administradores</button></Link>
          <Link to="/configuracion" className="nav-link" aria-current="page" href="#"><button className='btn btn-sm btn-outline-secondary'>Configuración</button></Link>
          <button className='btn btn-sm btn-outline-secondary'>Cerrar sesión</button>
        {/* </form> */}
        </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBarBack