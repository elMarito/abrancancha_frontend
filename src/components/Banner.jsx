import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./BannerStyles.css"

function Banner() {
    return (
      <div class="card text-bg-dark">
        <img
          src="https://s1.significados.com/foto/imagen-de-destaque-que-es-el-futbol.-jugadores-y-balon.jpg?class=ogImageWide"
          class="card-img"
          alt="..."
        />
        <div class="card-img-overlay">
          <h4 class="card-title">TU RESERVA</h4>
          <p class="card-text">A UN CLICK</p>
          <p class="card-text">DE DISTANCIA</p>
        </div>
      </div>
    );
}

export default Banner;
