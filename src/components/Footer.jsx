import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import './FooterStyles.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-section">
        <div className="contact-section">
          <h5>Contacto</h5>
          
        </div>
        <div className="faq-section">
          <h5>Preguntas Frecuentes</h5>
         
        </div>
      </div>

      <div className="center-section">
        <p>Abrancancha 2023 | Todos los derechos reservados</p>
      </div>

      <div className="right-section">
        <div className="social-logos">
          <FaFacebook className="social-icon" />
          <span className="social-text">Facebook</span>
        </div>
        <div className="social-logos">
          <FaInstagram className="social-icon" />
          <span className="social-text">Instagram</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
