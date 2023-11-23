/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { appContext } from '../context/appContext';

const ProtectedRoute = ({isAuthenticated, children }) => {
  // const { cache, setCache } = useContext(appContext);
  // const autorizationLevel =  cache.user? cache.user.autorizationLevel : 0;
  // cache.user.autorizationLevel != AUTORIZATION_LEVEL.Administrator
  
  // Implementa la lógica de autenticación aquí, por ejemplo, puedes comprobar si el usuario tiene un token de sesión válido, etc.

  if (isAuthenticated) {
    return <Outlet />; // Permite el acceso a las rutas hijas
  } else {
    // Redirecciona al usuario a la página de inicio de sesión si no está autenticado
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
