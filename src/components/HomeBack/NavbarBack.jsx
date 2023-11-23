import React, { useContext } from 'react';
import { NavLink,Navigate } from 'react-router-dom';
import { appContext } from '../../context/appContext';
import { cerrarSesion } from '../Navbar/Navbar';

function NavBarBack() {
  const { cache, setCache } = useContext(appContext);

  const Outsesion = () => {
    // const { cache, setCache } = useContext(appContext);
    setCache((prevState) => ({ ...prevState, user: null }));
    // cerrarSesion();
    // window.location.reload();
  }
  return (
    <>
    {/* {cache.user && (
          <Navigate to="/dashboard" replace={true} />
        )} */}
      <nav className="navbar navbar-expand-lg  static-top">
        <div className="container">

          <NavLink to='/' className="navbar-brand"><img src="src/assets/abc_logo.svg" alt="" width="90" /></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">

              {/* <NavLink to="/cronograma" className=" btn btn-outline-success" aria-current="page">
                Cronograma
              </NavLink> */}

              {/* <NavLink to="/agenda" className="btn btn-outline-success " aria-current="page">
                Agenda
              </NavLink> */}
              <NavLink to="/canchas" className="btn btn-outline-success " aria-current="page">
                Canchas
              </NavLink>

              <NavLink to="/reservas" className="btn btn-outline-success" aria-current="page">
                Reservas
              </NavLink>
              <NavLink to="/administradores" className="btn btn-outline-success " aria-current="page">
                Administradores
              </NavLink>
              <NavLink to="/usuario" className="btn btn-outline-success " aria-current="page">
                Usuarios
              </NavLink>

              {/* <NavLink to="/configuracion" className="btn btn-outline-success" aria-current="page">
                Configuración
              </NavLink> */}

              <button onClick={Outsesion} className="btn btn-outline-success">Cerrar sesión</button>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBarBack;
