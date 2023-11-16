import React, { useState } from 'react';
import './LoginStyles.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useNavigate } from "react-router-dom";
const Login = ({ setIsAuthenticated }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch('http://localhost:3030/usuarios', {
          method: 'GET',
        });

        if (response.ok) {
          const data = await response.json();
          const user = data.find((user) => user.email === email && user.password === password);
          Swal.fire(
            'Acceso correcto',
            ' Jugador ingresado con éxito',
            'success',
          );
          if (user) {
            setIsAuthenticated(true);
            setNombre(user.nombre); // Actualizar el estado del nombre con el nombre del usuario
            Swal.fire(
              'Acceso correcto',
              `¡Bienvenido, ${user.nombre}!`, // Usar el nombre del usuario en el mensaje
              'success',
            );
          } else {
            Swal.fire('Error', 'No se pudo acceder', 'error');
          }
        }
        navigate("/buscar-canchas");
      } catch (error) {
        // Manejar errores de conexión a la API
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (email , password, nombre, telefono ) {
      try {
        const response = await fetch('http://localhost:3030/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, nombre, telefono }),
        });

        if (response.ok) {
          
          setIsAuthenticated(true);
          Swal.fire(
            'Registro correcto',
            ' Jugador registrado con éxito',
            'success',
          );
          
        }
        
        else {
          Swal.fire('Error', 'No se pudo Registrar al jugador', 'error');
        }
      } catch (error) {
        Swal.fire('Error', 'No se pudo Registrar al jugador', 'error');
      }
    }
  };

  const toggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  const mensaje = isRegistering ? 'Crear Usuario' : 'Ingresa los datos de acceso';

  return (
  <>
    <Navbar />
    <div className="container-fluid formcontent">
      <div className="row p-5">
        <div className="col-lg-8 col-md-6 g-4 pb-3 text-center">
          <h1>Bienvenido {nombre}</h1>
          <img src="src/assets/abc_login.svg" alt="" width="300" />
        </div>
        <div className="col-lg-4 col-md-6">
          <form
            className="form-container formlogin"
            onSubmit={isRegistering ? handleRegister : handleLogin}
          >
            <p>{mensaje}</p>
            {!!isRegistering && (
            <>
              <div className="form-group">
                <label htmlFor="exampleInputNombre1">Nombre:</label>
                <input
                onChange={(e) => setNombre(e.target.value)}
                  type="text"
                  className="form-control"
                  id="exampleInputNombre1"
                  placeholder="Nombre Completo"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputTelefono1">Teléfono:</label>
                <input
                onChange={(e) => setTelefono(e.target.value)}
                  type="tel"
                  pattern="[0-9]{10}"
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
                pattern="[ /^(([^<>()[\]\.,;:\s@\" size="30"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña:</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="xxxxxx"
                
                minLength={8}
                
                required
              />
            </div>

            <div className="d-grid gap-2 p-3 d-sm-flex justify-content-sm-center">
              <button
              onClick={onsubmit}
                className={isRegistering ? "ingreso_btn" : "ingreso_btn gray"}
                type="submit"
              >
                {isRegistering ? "Registrar" : "Ingresar"}
              </button>
              <button
                className={isRegistering ? "ingreso_btn gray" : "ingreso_btn"}
                type="button"
                onClick={toggleRegister}
              >
                {isRegistering ? "¿Ya tienes cuenta?" : "Crear usuario"}
              </button>
            </div>

            {!isRegistering && (
              <div className="text-center">
                <a className="small" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )
            }

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
    <Footer />
  </>
);
};

export default Login;