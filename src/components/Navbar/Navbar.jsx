import React from 'react'
import './NavbarStyles.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Login from '../LoginForm/Login';
// import Register from './Register';

function Navbar({setIsAuthenticated}) {
  const [startDate, setStartDate] = useState(new Date());
  const [userloger, setUserLoger] =useState(null)

  const logeado = () =>{
    console.log("Usuario Logueado")
    setUserLoger({
      id:1,
      name:"Juan"
    })
  }

  const logout = () =>{
  
    setUserLoger(null)
  }
  return (
    <>
      
        <nav className="navbar navbar-expand-lg  static-top">
          <div className="container ">
            <Link to='/' className="navbar-brand"><img src="src/assets/abc_logo.svg" alt="" width="90" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
              <ul className="navbar-nav ">

                <li className="nav-item dropdown">
                  <li className="nav-item">
                    <select className="custom-select">
                    <option disabled selected value> Elige Deporte </option>
                      <option  value="Futbol5">Futbol 5</option>
                      <option  value="Futbol7">Futbol 7</option>
                      <option  value="Futbol9">Futbol 9</option>
                      <option  value="Futbol11">Futbol 11</option>
                      <option value="Padel"> Padel</option>
                    </select>
                  </li>
                </li>
                <li className="nav-item">
                <i className="fa-regular fa-calendar-days"></i>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </li>
                <li className="nav-item dropdown">
                  <li className="nav-item">
                  <i className="fa-regular fa-clock"></i>
                    <select className="custom-select">
                      <option selected value="8:00">8:00</option>
                      <option value="8:30">8:30</option>
                      <option value="9:00">9:00</option>
                      <option value="9:30">9:30</option>
                    </select>
                  </li>
                </li>

                <Link to="/canchas" className="nav-link" aria-current="page" href="#"><button className='search_btn'>Buscar Cancha</button></Link>
                {userloger ?(
                  <Link to="/" className="nav-link" aria-current="page" href="#"><button onClick={logout} className='login_btn'> <i className="fa-regular fa-user"></i>Logout</button></Link>
                
                ):(
                  <Link to="/login" className="nav-link" aria-current="page" href="#"><button onClick={logeado} className='login_btn'> <i className="fa-regular fa-user"></i>Login</button></Link>
                )
              }
              </ul>
            </div>
          </div>
        </nav>
       
    </>
  );
}

export default Navbar;
