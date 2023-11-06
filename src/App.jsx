<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import { appContext } from './context/appContext';

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Login from "./components/Login/Login"

import Home from "./components/Home/Home"
import HomeBack from "./components/HomeBack/HomeB.jsx"
import Footer from './components/Footer/Footer';
import { AUTORIZATION_LEVEL } from './components/LoginForm/Loginform.jsx'
function App() {
  const { cache, setCache } = useContext(appContext);
  let user = cache.user;

  return (
    <>
    <Home/>
      {/* {(user === null) ? <Navbar /> : <></>}; */}
      {/* // < Navigate to = "/HomeBack" />
        // < Navigate to = "/" /> */}
      {/* < Routes >
        <Route exact path='/' element={<Home />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Navigate to='/'/> */}
        {/* <PrivateRoute exact path="HomeBack" element={<HomeBack />} /> */}
        {/* {console.log(user,"---",AUTORIZATION_LEVEL.Administrator)} */}
        {/* {(user != null && user.autorization === AUTORIZATION_LEVEL.Administrator) ? (
          <Route exact path='HomeBack/*' element={<HomeBack />} />
        ) :
          (
            <>
              {console.log(user, "-*****************-", AUTORIZATION_LEVEL.Administrator)}
              
            </>
            // <p>No hay productos en el carrito</p>
          )
        } */}
        {/* {<Route path="/" element={user === null ? (<Home />) : (<HomeBack />)} />} */}
        {/* <Route path="/reservar" element={<Reserve />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path='/Products/:id' element={<Product />} /> */}
        {/* <Route path="*" component={<h1> NotFound</h1>} /> {/* <-----mejorar */}
      {/* </ Routes> */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
=======
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
