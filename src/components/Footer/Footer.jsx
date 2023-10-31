import React from 'react';
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
        <p>Abran Cancha 2023 | Todos los derechos reservados</p>
      </div>

      <div className="right-section">
        <div className="social-logos">
        <a className="small" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    
        </div>
        <div className="social-logos">
        <a className="small" href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
