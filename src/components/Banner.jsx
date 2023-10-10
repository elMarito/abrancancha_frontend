import React, { useState, useEffect } from "react";
import "./BannerStyles.css";



  function Banner() {
    return (
      <div className="card text-bg-dark">
      <video autoPlay loop muted className="card-video">
        <source
          src='./public/Videos/pexels-saruul-saruulaa-5489581 (1080p) - copia.mp4'
          type="video/mp4"
        />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="card-img-overlay">
        <h4 className="card-title">TU RESERVA</h4>
        <p className="card-text">A UN CLICK</p>
        <p className="card-text">DE DISTANCIA</p>
      </div>
    </div>
    )
  };
  export default Banner








  



