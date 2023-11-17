import React, { useContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/HomeBack/homeback.css'
import Home from './components/Home/Home';
import Login from './components/LoginForm/Login';
import HomeB from './components/HomeBack/HomeB';
import ProtectedRoute from './components/ProtectedRoute';
import Cronograma from './components/HomeBack/Cronograma'
import Agenda from './components/HomeBack/Agenda'
import Reservas from './components/HomeBack/Reservas'
import Usuario from './components/HomeBack/Usuario'
import Administradores from './components/HomeBack/Administradores'
import Configuracion from './components/HomeBack/Configuracion'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const users = useContext (useContext)
console.log(users);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="buscar-canchas" element={<HomeB />} />
          <Route path="cronograma" element={<Cronograma />} />
          
          <Route path="agenda" element={<Agenda />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="usuario" element={<Usuario />} />
          <Route path="administradores" element={<Administradores />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
