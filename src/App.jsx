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
