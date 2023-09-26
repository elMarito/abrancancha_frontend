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
        <nav className="navbar navbar-expand-lg  static-top">
          <div className="container ">
            <Link to="#" className="navbar-brand"><img src="/abc_logo.svg" alt="" width="90" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav ">

                <Link to="" className="nav-link active" aria-current="page" href="#">Buscar Cancha</Link>

                <li className="nav-item dropdown">
                  <li className="nav-item">
                    <select className="custom-select">
                      <option selected value="Futbol">Futbol</option>
                      <option value="Padel">Padel</option>
                    </select>
                  </li>
                </li>
                <li className="nav-item">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </li>
                <li className="nav-item dropdown">
                  <li className="nav-item">
                    <select className="custom-select">
                      <option selected value="8:00">8:00</option>
                      <option value="8:30">8:30</option>
                      <option value="9:00">9:00</option>
                      <option value="9:30">9:30</option>
                    </select>
                  </li>
                </li>
                <Link to="/login" className="nav-link" aria-current="page" href="#"><button className='login_btn'>Login</button></Link>
              </ul>
            </div>
          </div>
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