import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { AppContextProvider } from './context/appContext';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

=======
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
import App from './App'
import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import HomeBack from './components/HomeBack/HomeB';
import { AUTORIZATION_LEVEL } from './components/LoginForm/Loginform';

const route = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: "/login", element: <Login /> },
  // { path: "/register", element: <Register /> },
  {
    path: '/', element: <PrivateRoute autorization={AUTORIZATION_LEVEL.Administrator} />, children: [
      { path: '/HomeBack/*', element: <HomeBack /> }
      // { path:"cronograma", element:<Cronograma />},
      // { path:"canchas", element:<Canchas />},
      // { path:"disponibilidad", element:<Disponibilidad />},
      // { path:"administradores", element:<Administradores />},
      // { path:"reservas", element:<Reservas />},
      // { path:"configuracion", element:<Configuracion />},
    ]
  },
  {
    path: '/', element: <PrivateRoute autorization={AUTORIZATION_LEVEL.User} />, children: [
      { path: '/App/*', element: <App /> }]
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
<<<<<<< HEAD
  // <React.StrictMode>
  <AppContextProvider>
    <RouterProvider router={route}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </RouterProvider>
  </AppContextProvider>
  //   </React.StrictMode>,
)
=======
<App></App>

)
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
