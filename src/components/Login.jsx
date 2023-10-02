import React, { useState } from 'react';
import './LoginStyles.css'
// import mercadoLogo from '/logo-color.svg'
// import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica para enviar los datos de inicio de sesión al servidor
    // Por ejemplo, puedes usar una función para hacer una solicitud HTTP con axios o fetch.
    console.log('Username:', username);
    console.log('Password:', password);
    // Replace this with your actual login logic
    if (username === 'yourUsername' && password === 'yourPassword') {
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (

    <div className='container-fluid formcontent'>
      <div className="row p-5 ">
        <div className="col-lg-8 col-md-6 g-4 pb-3 text-center">
          <h1>Bienvenido @Nombre_usuario</h1>
        <img src="src/assets/abc_login.svg" alt="" width="300" />
        </div>
        <div className="col-lg-4 col-md-6">
    <form className="form-container formlogin" onSubmit={handleSubmit}>
      <p>Ingresa tus datos de acceso</p>

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email:</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="tu_email@ejemplo.com" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Contraseña:</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="xxxxxx" />
      </div>
      <div className="d-grid">
                  <button className="btn btn-lg ingreso_btn mb-2" type="submit">Ingresar</button>
                  <div className="text-center">
                    <a className="small" href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="#">Crear Usuario</a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="small" href="#"><i className="fa-brands fa-instagram"></i></a>
                  </div>
                  </div>

  
    </form>
    </div>
    </div>
    </div>
  );
};

export default Login;

