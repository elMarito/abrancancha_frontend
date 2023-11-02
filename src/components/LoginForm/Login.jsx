import React, { useState } from 'react';
import './LoginStyles.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [action, setAction] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
   // Supongamos que el inicio de sesión es exitoso
    setIsAuthenticated(true);
  };

  const mensaje = action ? 'Ingresa los datos de acceso' : 'Crear Usuario';

  const toggleAction = (newAction) => {
    setAction(newAction);
  };

  return (
    <>
    <Navbar />
    <div className="container-fluid formcontent">
      <div className="row p-5">
        <div className="col-lg-8 col-md-6 g-4 pb-3 text-center">
          <h1>Bienvenido {email}</h1>
          <img src="src/assets/abc_login.svg" alt="" width="300" />
        </div>
        <div className="col-lg-4 col-md-6">
          <form className="form-container formlogin" onSubmit={handleSubmit}>
            <p>{mensaje}</p>

            {!action && (
              <>
                <div className="form-group">
                  <label htmlFor="exampleInputNombre1">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputNombre1"
                    placeholder="Nombre Completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputTelefono1">Teléfono:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputTelefono1"
                    placeholder="123456789"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email:</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="tu_email@ejemplo.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña:</label>
              <input
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="xxxxxx"
                required
              />
            </div>

            <div className="d-grid gap-2 p-3 d-sm-flex justify-content-sm-center">
              <button
                className={action ? "ingreso_btn gray" : "ingreso_btn"}
                onClick={() => toggleAction(true)}
                type="submit"
              >
                Ingresar
              </button>
              <button
                className={action ? "ingreso_btn" : "ingreso_btn gray"}
                onClick={() => toggleAction(false)}
                type="submit"
              >
                Crear usuario
              </button>
            </div>

            {!action && (
              <div className="text-center">
                <a className="small" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            <div className="text-center p-2">
              <a className="small" href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="small" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
