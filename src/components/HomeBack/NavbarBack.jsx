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