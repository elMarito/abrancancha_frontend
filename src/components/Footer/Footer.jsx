// Footer.jsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Contacto from './Contacto';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import './FooterStyles.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="left-section">
        <div className="contact-section">
          
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className="faq-section">
          <Link to="/preguntas-frecuentes">Preguntas Frecuentes</Link>
        </div>
      </div>

      <div className="center-section">
        <p>Abrancancha 2023 | Todos los derechos reservados</p>
      </div>

      <div className="right-section">
        <div className="social-logos">
          <Link to="/facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
        </div>
        <div className="social-logos">
          <Link to="/instagram">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes />} />
      </Routes>
    </footer>
  );
}

export default Footer;
