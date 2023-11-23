import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './components/HomeBack/homeback.css'

import Home from './components/Home/Home';
import Login, { AUTORIZATION_LEVEL } from './components/LoginForm/Login';
import HomeB from './components/HomeBack/HomeB';
import ProtectedRoute from './components/ProtectedRoute';
import Cronograma from './components/HomeBack/Cronograma'
import Agenda from './components/HomeBack/Agenda'
import Reservas from './components/HomeBack/Reservas'
import Usuario from './components/HomeBack/Usuario'
import Administradores from './components/HomeBack/Administradores'
import Configuracion from './components/HomeBack/Configuracion'
import { appContext } from './context/appContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [autorizationLevel, setAutorizationLevel] = useState(0);
  const { cache, setCache } = useContext(appContext);
  const autorizationLevel = cache.user ? cache.user.autorizationLevel : 0;

  
  // const users = useContext(userContext)
  // console.log(autorizationLevel);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home isAuthenticated={autorizationLevel != AUTORIZATION_LEVEL.Administrator} />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} /* setAutorizationLevel={setAutorizationLevel} */ />} />
        {/* <Route path="buscar-canchas" element={<HomeB />} /> */}
        <Route element={<ProtectedRoute isAuthenticated={autorizationLevel === AUTORIZATION_LEVEL.Administrator} />}>
          <Route path="buscar-canchas" element={<HomeB />} />
          <Route path="cronograma" element={<Cronograma />} />

          <Route path="agenda" element={<Agenda />} />
          <Route path="reservas" element={<Reservas />} />
          <Route path="usuario" element={<Usuario autorizationLevel={AUTORIZATION_LEVEL.User} />} />
          <Route path="administradores" element={<Usuario autorizationLevel={AUTORIZATION_LEVEL.Administrator} />} />
          {/* <Route path="administradores" element={<Administradores autorizationLevel={AUTORIZATION_LEVEL.Administrator}/>} /> */}
          <Route path="configuracion" element={<Configuracion />} />
          
        </Route>
        <Route path="contacto" element={<Contacto />} />
        <Route path="preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
