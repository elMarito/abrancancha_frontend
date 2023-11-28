import React from "react";
import "./PreguntasFrecuentesStyles.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PreguntasFrecuentes() {
  return (
    <>
      <Navbar />
      <div className="preguntas-frecuentes-container">
        <h2>Preguntas Frecuentes</h2>
        <div className="accordion-container">
          <div className="accordion" id="accordionExample">
            {/* Pregunta 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Cómo reservo una cancha?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Para reservar una cancha, sigue los siguientes pasos:</strong>
                  <ol>
                    <li>Inicia sesión en tu cuenta.</li>
                    <li>Selecciona la opción "Reservar Cancha" en el menú principal.</li>
                    <li>Elige la fecha y hora deseadas para tu reserva.</li>
                    <li>Confirma la reserva y realiza el pago si es necesario.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿Puedo cancelar una reserva?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Sí, puedes cancelar una reserva siguiendo estos pasos:</strong>
                  <ol>
                    <li>Accede a tu perfil y selecciona "Mis Reservas".</li>
                    <li>Encuentra la reserva que deseas cancelar.</li>
                    <li>Haz clic en el botón de cancelar y sigue las instrucciones.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿Cuáles son los métodos de pago aceptados?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Aceptamos los siguientes métodos de pago:</strong>
                  <ul>
                    <li>Tarjeta de crédito.</li>
                    <li>Pago en efectivo en el lugar.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿Cómo puedo contactar al soporte?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Puedes contactar a nuestro equipo de soporte a través de:</strong>
                  <ul>
                    <li>Correo electrónico: soporte@ejemplo.com</li>
                    <li>Teléfono: +123 456 789</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pregunta 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  ¿Se permiten cambios de reserva?
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Sí, puedes realizar cambios en tu reserva de la siguiente manera:</strong>
                  <ol>
                    <li>Accede a tu perfil y selecciona "Mis Reservas".</li>
                    <li>Encuentra la reserva que deseas modificar.</li>
                    <li>Haz clic en el botón de modificar y sigue las instrucciones.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Pregunta 6 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  ¿Cómo puedo obtener un reembolso?
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>Puedes solicitar un reembolso siguiendo estos pasos:</strong>
                  <ol>
                    <li>Accede a tu perfil y selecciona "Mis Reservas".</li>
                    <li>Encuentra la reserva para la cual deseas un reembolso.</li>
                    <li>Haz clic en el botón de solicitar reembolso y sigue las instrucciones.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PreguntasFrecuentes;
