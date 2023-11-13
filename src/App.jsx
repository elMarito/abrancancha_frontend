// App.jsx
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/LoginForm/Login';
import NavBarBack from './components/HomeBack/NavbarBack';
import ProtectedRoute from './components/ProtectedRoute';
import Cronograma from './components/HomeBack/Cronograma'
import Canchas from './components/HomeBack/Canchas/Canchas'
import Agenda from './components/HomeBack/Agenda'
import Reservas from './components/HomeBack/Reservas'
import Clientes from './components/HomeBack/Usuario'
import Administradores from './components/HomeBack/Administradores'
import Configuracion from './components/HomeBack/Configuracion'
import Contacto from './components/Footer/Contacto';
import PreguntasFrecuentes from './components/Footer/PreguntasFrecuentes';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="buscar-canchas" element={<NavBarBack />} />
          <Route path="cronograma" element={<Cronograma />} />
          <Route path="canchas" element={<Canchas />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="administradores" element={<Administradores />} />
          <Route path="configuracion" element={<Configuracion />} />
          
        </Route>
        <Route path="contacto" element={<Contacto />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
