import React, { useState, useEffect } from "react";
import NavBarBack from "./NavbarBack";

const Disponibilidad = () => {
  return (
    <>
    <NavBarBack/>
    <table className="table table-sm table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Dia de la Semana</th>
          <th scope="col">Hora Desde</th>
          <th scope="col">Hora Hasta</th>
          <th scope="col">Duracion</th>
          <th scope="col">Tarifa</th>
          <th scope="col">Fecha</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody className='table-striped table-group-divider'>
        <tr>
          <th scope="row">1</th>
          <td>10</td>
          <td>Domingo</td>
          <td>10:00</td>
          <td>22:00</td>
          <td>1 Hora</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>11</td>
          <td>Grande Sur</td>
          <td>Futbol</td>
          <td>$ 1.000,00</td>
          <td>Deshabilitada</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>P1</td>
          <td>Norte 1</td>
          <td>Paddel</td>
          <td>$ 1.000,00</td>
          <td>Activa</td>
        </tr>
      </tbody>
    </table>
    </>
  )
}
export default Disponibilidad
