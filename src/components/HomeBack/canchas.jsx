import React from 'react'

export const canchas = () => {
  return (
    <table className="table table-sm table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">N°</th>
      <th scope="col">Nombre</th>
      <th scope="col">Tipo</th>
      <th scope="col">Tarifa</th>
      <th scope="col">Activa</th>
    </tr>
  </thead>
  <tbody className='table-striped table-group-divider'>
    <tr>
      <th scope="row">1</th>
      <td>10</td>
      <td>Grande Norte</td>
      <td>Futbol</td>
      <td>$ 1.000,00</td>
      <td>Activa</td>
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
  )
}

// export default canchas