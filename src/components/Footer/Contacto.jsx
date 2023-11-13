// Contacto.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './ContactoStyles.css'; 

function Contacto() {
  return (
    <>
      <Navbar />
      <div className="contacto-container">
        <h2>Contacto</h2>
        <p>
          ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros si tienes alguna pregunta o inquietud.
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contacto;
