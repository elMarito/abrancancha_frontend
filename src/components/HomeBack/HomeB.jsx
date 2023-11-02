import React from 'react'
import { Routes, Route } from 'react-router-dom';

import NavBarBack from '../HomeBack/NavbarBack';
import Canchas from '../HomeBack/Canchas/Canchas'
import Agenda from './Agenda.jsx';
import Administradores from './Administradores.jsx';
import Reservas from '../HomeBack/Reservas'
// import Footer from '../Footer/Footer.jsx';
import Cronograma from './Cronograma.jsx';
import Configuracion from './Configuracion.jsx';


function HomeB() {
  // const isAuthenticated = false;

  return (
    <div>
      <header>
        <NavBarBack />
        
      </header>
      <main id='body'>
      <h1>Nuestras Canchas</h1>
        <Routes>
          <Route path="/cronograma" element={<Cronograma />} />
          <Route path="/canchas" element={<Canchas />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/administradores" element={<Administradores />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Routes>
      </main>
    </div>
  )
}
export default HomeB