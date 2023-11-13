// PreguntasFrecuentes.jsx
import React from 'react';
import './PreguntasFrecuentesStyles.css';
import Navbar from '../Navbar/Navbar'; // Ajusta la ruta según la ubicación real del componente Navbar
import Footer from '../Footer/Footer'; // Ajusta la ruta según la ubicación real del componente Footer

function PreguntasFrecuentes() {
  return (
    <>
      <Navbar />
      <div className="preguntas-frecuentes-container">
        <h2>Preguntas Frecuentes</h2>
        
        <div className="pregunta">
          <h3>¿Cómo reservo una cancha?</h3>
          <p>
            Para reservar una cancha, sigue los siguientes pasos:
            <ol>
              <li>Inicia sesión en tu cuenta.</li>
              <li>Selecciona la opción "Reservar Cancha" en el menú principal.</li>
              <li>Elige la fecha y hora deseadas para tu reserva.</li>
              <li>Confirma la reserva y realiza el pago si es necesario.</li>
            </ol>
          </p>
        </div>

        <div className="pregunta">
          <h3>¿Puedo cancelar una reserva?</h3>
          <p>
            Sí, puedes cancelar una reserva siguiendo estos pasos:
            <ol>
              <li>Accede a tu perfil y selecciona "Mis Reservas".</li>
              <li>Encuentra la reserva que deseas cancelar.</li>
              <li>Haz clic en el botón de cancelar y sigue las instrucciones.</li>
            </ol>
          </p>
        </div>

        <div className="pregunta">
          <h3>¿Cuáles son los métodos de pago aceptados?</h3>
          <p>
            Aceptamos los siguientes métodos de pago:
            <ul>
              <li>Tarjeta de crédito.</li>
              <li>Pago en efectivo en el lugar.</li>
            </ul>
          </p>
        </div>

        <div className="pregunta">
          <h3>¿Cómo puedo contactar al soporte?</h3>
          <p>
            Puedes contactar a nuestro equipo de soporte a través de:
            <ul>
              <li>Correo electrónico: soporte@ejemplo.com</li>
              <li>Teléfono: +123 456 789</li>
            </ul>
          </p>
        </div>

        {/* Agrega más preguntas y respuestas según sea necesario */}
      </div>
      <Footer />
    </>
  );
}

export default PreguntasFrecuentes;
