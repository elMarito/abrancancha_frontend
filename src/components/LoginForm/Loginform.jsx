import React, { useEffect, useContext, useState } from 'react'
// import { useHistory } from 'react-router-dom';

import { appContext, useAuth,setUser } from '../../context/appContext';
import './LoginStyles.css'
import { Navigate } from 'react-router-dom';
// import mercadoLogo from '/logo-color.svg'
// import '../styles/login.css';
export const AUTORIZATION_LEVEL = {
  Administrator: 1,
  User: 2,
  Operator: 3
};

const LoginForm = () => {
//   const cache = useContext(appContext);
// console.log("cache", cache);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  //   const auth = useAuth()
  // if (auth){return <Navigate to="/HomeBack"/>};

  /*
   const handleUsernameChange = (e) => {
     setUsername(e.target.value);
   };
 
   const handlePasswordChange = (e) => {
     setPassword(e.target.value);
   };
 
   */


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos de inicio de sesión al servidor
    // Por ejemplo, puedes usar una función para hacer una solicitud HTTP con axios o fetch.

    // window.sessionStorage.getItem('jwt');
    // console.log(email);



    setUser( { id: 1, name: "alguien", autorization: AUTORIZATION_LEVEL.User });

    // if (cache.user != null) {
    //   switch (cache.user.autorization) {
    //     case AUTORIZATION_LEVEL.Administrator:
    //       < Navigate to="/HomeBack" />
    //       break;
    //     // case AUTORIZATION_LEVEL.User:
    //     //   break;
    //     // case AUTORIZATION_LEVEL.Operator:          
    //     //   break;      
    //     default:
    //       < Navigate to="/Home" />
    //       // break;
    //   }
    //   // cache.user.autorization === AUTORIZATION_LEVEL.Administrator ?
    //   //   < Navigate to="/HomeBack" />
    //   //   :
    //   //   < Navigate to="/" />
    // }

    // const [user, setUser] = useState(null);
    // const login = () => setUser({ id: 1, name: "alguien" });
    // const logout = () => setUser(null);

    // const history = useHistory();
    // history.push('HomeBack');
    // try {
    //   const user = await loginService.login({ username, password })
    //   setUser(user)
    //   setUsername("")
    //   setPassword("")
    // } catch (error) {
    //   setErrorMessage("error")
    //   setTimeout(() => { setErrorMessage(nulll) }, 5000);

    // }
  };

  const [action, setAction] = useState(true);

  const mensaje = action ? 'Ingresa los datos de acceso' : 'Crear Usuario'

  return (
    <div className='container-fluid formcontent'>
      <div className="row p-5 ">
        <div className="col-lg-8 col-md-6 g-4 pb-3 text-center">
          <h1>Bienvenido @Nombre_usuario</h1>
          <img src="src/assets/abc_login.svg" alt="" width="300" />
        </div>
        <div className="col-lg-4 col-md-6">
          <form className="form-container formlogin" onSubmit={handleSubmit}>
            <p>{mensaje}</p>


            {action === true
              ? <div></div>
              : <>
                <div className="form-group">
                  <label htmlFor="exampleInputNombre1">Nombre:</label>
                  <input type="text" className="form-control" id="exampleInputNombre1" placeholder="Nombre Completo" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputTelefono1">Teléfono:</label>
                  <input type="tel" className="form-control" id="exampleInputTelefono1" placeholder="123456789" />
                </div>
              </>
            }

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tu_email@ejemplo.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña:</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="xxxxxx" />
            </div>

            <div className="d-grid gap-2 p-3 d-sm-flex justify-content-sm-center">
              <button className={action === true ? "ingreso_btn gray" : "ingreso_btn"} onClick={() => setAction(true)} type="submit">Ingresar</button>
              <button className={action === false ? "ingreso_btn gray" : "ingreso_btn"} onClick={() => setAction(false)} type="submit">Crear usuario</button>
            </div>
            {action === false ? <div></div> : <div className="text-center">
              <a className="small" href="#">¿Olvidaste tu contraseña?</a>
            </div>}


            <div className="text-center p-2">
              <a className="small" href="#"><i className="fa-brands fa-facebook-f"></i></a>
              <a className="small" href="#"><i className="fa-brands fa-instagram"></i></a>
            </div>




          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
