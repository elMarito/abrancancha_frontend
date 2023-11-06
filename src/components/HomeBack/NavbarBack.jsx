<<<<<<< HEAD
import React from 'react'
import './NavbarStyles.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Login from './Login';
// import Register from './Register';

function Navbar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <BrowserRouter>
        <nav class="navbar bg-body-tertiary">
          <form class="container-fluid justify-content-start">
            <Link to="/login" className="nav-link" aria-current="page" href="#"><button className='login_btn'>Login</button></Link>
            <button className="btn btn-outline-success me-2" type="button">Canchas</button>
            <button className="btn btn-outline-success me-2" type="button">Disponibilidad</button>
            <button className="btn btn-outline-success me-2" type="button">Reservas</button>
            <button className="btn btn-outline-success me-2" type="button">Clientes</button>
            <button className="btn btn-outline-success me-2" type="button">Administradores</button>
            <button className="btn btn-outline-success me-2" type="button">Configuración</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
          </form>
        </nav>        
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/reservar" element={<Reserve />} /> */}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/registro" element={<Register />} /> */}
          {/* <Route path="/contacto" element={<Contacto />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Navbar
=======
import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBack() {
  return (
    <>
      <nav className="navbar navbar-expand-lg static-top">
        <div className="container">
          <ul className="navbar-nav">
          <Link to='/' className="navbar-brand"><img src="src/assets/abc_logo.svg" alt="" width="90" /></Link>
            <Link to="/cronograma" className="nav-link" aria-current="page">
              <button className="btn btn-sm btn-outline-secondary">Cronograma</button>
            </Link>
            <Link to="/canchas" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Canchas</button>
            </Link>
            <Link to="/agenda" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Disponibilidad/Agenda</button>
            </Link>
            <Link to="/reservas" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Reservas</button>
            </Link>
            <Link to="/Clientes" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Clientes</button>
            </Link>
            <Link to="/Administradores" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Administradores</button>
            </Link>
            <Link to="/configuracion" className="nav-link" aria-current="page">
              <button className="btn btn-sm btn-outline-secondary">Configuración</button>
            </Link>
            <Link to="/" className="nav-link" aria-current="page" href="#">
            <button className="btn btn-sm btn-outline-secondary">Cerrar sesión</button>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBarBack;
>>>>>>> 388462e0eb5e91794bba73dcb9a43777eed204d3
