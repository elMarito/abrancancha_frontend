import React, { useState } from 'react';
import mercadoLogo from '/logo-color.svg'
import '../styles/login.css';

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
    <form className="form-container" onSubmit={handleSubmit}>
      {/* <img src={mercadoLogo} alt="Mercado Trucho" /> */}
      <h2>Formulario de inicio de sesión</h2>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default Login;

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Replace this with your actual login logic
//     if (username === 'yourUsername' && password === 'yourPassword') {
//       alert('Login successful!');
//     } else {
//       alert('Invalid credentials. Please try again.');
//     }
//   };

//   return (<div className='loginform'>
//     <img src={mercadoLogo} alt="Mercado Trucho" />
//     <h2>Login</h2>
//     <div>
//       <label htmlFor='username'>Username:</label>
//       <input id='username'        type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//     </div>
//     <div>
//       <label htmlFor='password'>Password:</label>
//       <input id='password'        type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </div>
//     <button onClick={handleLogin}>Login</button>
//   </div>
//   );
// };

// export default Login;
