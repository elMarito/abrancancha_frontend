import React, { useContext } from 'react'
import './NavbarStyles.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import Home from '../Home/Home';
import "react-datepicker/dist/react-datepicker.css";
import { appContext } from '../../context/appContext';
import SelectTipoCancha from './SelectTipoCancha';
// import Login from '../LoginForm/Login';
// import Register from './Register';

function Navbar({ ocultarBoton }) {
  const { cache, setCache } = useContext(appContext);
  // Crear una copia del estado actual de filtros
  // const nuevosFiltros = { ...cache.filtros };

  const { tipoCancha, fecha, hora } = cache.filtros;
  // const [tipoCancha, setTipoCancha] = useState(cache.filtros.sssssss);
  // const [fecha, setFecha] = useState(cache.filtros.sssssss);
  // const [hora, setHora] = useState(cache.filtros.sssssss);

  // const [startDate, setStartDate] = useState(new Date());
  const [userloger, setUserLoger] = useState("Login")
  const navigate = useNavigate();

  const logeado = () => {
    if (userloger == "Login") {
      // {cache.user && (<p>{cache.user.nombre}</p>)}
      // setUserLoger((cache.user ? cache.user.nombre : "") + " Logout");
      setUserLoger("Logout");

    } else {
      setUserLoger("Login");
      navigate("/");
      window.location.reload();
    }
  }
  const updateFiltroTipoCancha = (tipoCancha) => {
    // filtros: { tipoCancha: null, fecha: null, hora: null }
    // if (tipoCancha=== undefined) tipoCancha=cache.filtros.tipoCancha;
    // if (tipoCancha=== undefined) tipoCancha=cache.filtros.tipoCancha;
    // if (tipoCancha=== undefined) tipoCancha=cache.filtros.tipoCancha;
    const newSelectedCategories = { tipoCancha, fecha, hora }
    // console.log("updateFiltroTipoCancha", tipoCancha, fecha, hora );
    setCache((prevState) => ({ ...prevState, filtros: newSelectedCategories }));
    // console.log("cache.filtros", cache.filtros );
  }

  const updateFiltroFecha = (fechaElegida) => {

    // const fechaDMY_array = `${fechaElegida.toISOString().split('T')[0]}T03:00:00Z`;
    //   const getDateSeparated = (dateTime) => {      // const dateTime = new Date("2023-10-21T10:00:00Z");
    //     const date = dateTime.toISOString().split('T')[0];
    //     const time = dateTime.toISOString().split('T')[1].split('Z')[0];
    //     return [date, time]
    // }
    // const fechaDMY_array = fecha.toLocaleDateString().split("/")
    // const dateDMY = (f) => {return `${f[2]}-${f[1]}-${f[0]}T03:00:00Z`}
    // {console.log("updateFiltroFecha-",fecha, fechaDMY_array)}
    // const newSelectedCategories = { tipoCancha, fecha:dateDMY(fechaDMY_array), hora }

    const newSelectedCategories = { tipoCancha, fecha: fechaElegida.toISOString(), hora }
    // console.log("updateFiltroFecha", tipoCancha, fecha, hora );
    setCache((prevState) => ({ ...prevState, filtros: newSelectedCategories }));
    // console.log("cache.filtros", cache.filtros );
  }
  // const updateFiltroHora = (hora) => {
  //   const newSelectedCategories = { tipoCancha, fecha, hora }
  //   setCache((prevState) => ({ ...prevState, filtros: newSelectedCategories }));
  //   // console.log("cache.filtros", cache.filtros );
  // }
  // const search = () => { navigate("/search"); }

  // useEffect(() => {
  //   const newSelectedCategories = { tipoCancha, fecha, hora }
  //   setCache((prevState) => ({ ...prevState, filtro: newSelectedCategories }));

  // }, [tipoCancha, fecha, hora])

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
                {/* <li className="nav-item"> */}
                {/* tipoCancha */}
                <select className="custom-select" defaultValue="Elige Deporte"
                  onChange={(event) => updateFiltroTipoCancha(Number(event.target.value))}>
                  {/* <option value="Elige Deporte" disabled> Elige Deporte </option> */}
                  <option value={0} > Elige Deporte </option>
                  <SelectTipoCancha />
                  {/* <option value="Futbol5">Futbol 5</option>
                  <option value="Futbol7">Futbol 7</option>
                  <option value="Futbol9">Futbol 9</option>
                  <option value="Futbol11">Futbol 11</option>
                  <option value="Padel"> Padel</option> */}
                </select>
                {/* </li> */}
              </li>
              <li className="nav-item">
                <i className="fa-regular fa-calendar-days"></i>
                <DatePicker
                  selected={new Date(fecha)}
                  todayButton="Ver hoy"
                  dateFormat="dd/MM/yyyy"
                  // selected={startDate}
                  // onChange={(date) => setStartDate(date)}
                  onChange={(date) => updateFiltroFecha(date)}
                />
              </li>
              {/* <li className="nav-item dropdown">
                <li className="nav-item">
                  <i className="fa-regular fa-clock"></i>
                  <select className="custom-select"
                    onChange={(event) => updateFiltroHora(event.target.value)}>
                    <option selected value="8:00">8:00</option>
                    <option value="8:30">8:30</option>
                    <option value="9:00">9:00</option>
                    <option value="9:30">9:30</option>
                  </select>
                </li>
              </li> */}

              {/* <Link to="/buscar-canchas" className="nav-link" aria-current="page" href="#">  onClick={search}*/}
              <Link to="/search" className="nav-link" aria-current="page" href="#">
                <button className='search_btn'>Buscar Cancha</button>
              </Link>
              {ocultarBoton ? <></>:
                <Link to="/login" className="nav-link" aria-current="page" href="#">
                  {cache.user && (<p>{cache.user.nombre}</p>)}
                  <button onClick={logeado} className='login_btn'>
                    <i className="fa-regular fa-user"></i>{userloger}
                  </button>
                </Link> 
              }

            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
