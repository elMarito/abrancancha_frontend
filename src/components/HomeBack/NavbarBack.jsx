import React from 'react';
import { Link } from 'react-router-dom';

function NavBarBack() {

  const Outsesion=()=>{
    window.location.reload();
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg  static-top">
        <div className="container">
         
          <Link to='/' className="navbar-brand"><img src="src/assets/abc_logo.svg" alt="" width="90" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
            
            <Link to="/cronograma" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success">Cronograma</button>
            </Link>
  
            <Link to="/agenda" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Disponibilidad/Agenda</button>
            </Link>
            <Link to="/reservas" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Reservas</button>
            </Link>
            <Link to="/usuario" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success me-2">Usuario</button>
            </Link>
            
            <Link to="/configuracion" className="nav-link" aria-current="page">
              <button className="btn btn-outline-success">Configuración</button>
            </Link>
            
            <button onClick={Outsesion} className="btn btn-outline-success">Cerrar sesión</button>
            
          </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarBack;
