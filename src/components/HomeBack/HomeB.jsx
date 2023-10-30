import React from 'react'
import { Routes, Route } from 'react-router-dom';

import NavBarBack from './NavbarBack.jsx'
import Canchas from './Canchas/Canchas.jsx'
import Disponibilidad from './Disponibilidad';
import Administradores from './Administradores.jsx';
import Reservas from './Reservas.jsx';
// import Footer from '../Footer/Footer.jsx';
import Cronograma from './Cronograma.jsx';
import Configuracion from './Configuracion.jsx';
import PrivateRoute from '../PrivateRoute.jsx';

function HomeB() {
  // const isAuthenticated = false;

  return (
    <div>
      <header>
        <NavBarBack />
      </header>
      <main id='body'>
        <Routes>
          {/* <PrivateRoute exact path="cronograma" element={<Cronograma />} /> */}
          {/* {isAuthenticated ? (
            <> */}
            <Route path="cronograma" element={<Cronograma />} />
            <Route path="canchas" element={<Canchas />} />
            {/* <Route path="canchas/:id" element={<Canchas id={1}/>} /> */}
            <Route path="disponibilidad" element={<Disponibilidad />} />
            <Route path="administradores" element={<Administradores />} />
            <Route path="reservas" element={<Reservas />} />
            <Route path="configuracion" element={<Configuracion />} />
          {/* ):(
            <Navigate to="/login" />
          ) */}
          {/* } */}
          {/* <Route path='/Products/:id' element={<Product />} /> */}
          {/* <Route path='/User' element='<User/>'/> */}
          {/* <Route path='/Login' element={<Login/>}/> */}
          {/* <Route path="*" component={NotFound} /> */}
        </Routes>
      </main>
    </div>
  )
}
export default HomeB