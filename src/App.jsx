import React, { useState } from 'react'
import Home from './components/Home/Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/LoginForm/Login'
import NavBarBack from './components/HomeBack/NavbarBack'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Inicialmente, el usuario no está autenticado.

  return (
    <BrowserRouter>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/canchas" element={<NavBarBack />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;