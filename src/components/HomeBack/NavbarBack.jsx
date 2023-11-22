import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import { cerrarSesion } from '../Navbar/Navbar';

function NavBarBack() {
  // const { cache, setCache } = useContext(appContext);

  const Outsesion=()=>{
    cerrarSesion();
    window.location.reload();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg  static-top">
        <div className="container">
         
          <NavLink to='/' className="navbar-brand"><img src="src/assets/abc_logo.svg" alt="" width="90" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
            
            <NavLink to="/cronograma" className=" btn btn-outline-success" aria-current="page">
            Cronograma
            </NavLink>
  
            <NavLink to="/agenda" className="btn btn-outline-success " aria-current="page">
            Agenda
            </NavLink>
            <NavLink to="/reservas" className="btn btn-outline-success" aria-current="page">
            Reservas
            </NavLink>
            <NavLink to="/usuario" className="btn btn-outline-success " aria-current="page">
            Usuario
            </NavLink>
            
            <NavLink to="/configuracion" className="btn btn-outline-success" aria-current="page">
            Configuración
            </NavLink>
            
            <button onClick={Outsesion} className="btn btn-outline-success">Cerrar sesión</button>
            
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarBack;
