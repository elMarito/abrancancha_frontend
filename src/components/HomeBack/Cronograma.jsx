import React from 'react'

const Cronograma = () => {
    return (
        <>
            <button type="button" className="edit btn btn-primary" >
                <i className="fa-regular fa-pen-to-square">Agregar reservas</i>
            </button><button type="button" className="edit btn btn-primary" >
                <i className="fa-regular fa-pen-to-square">Elegir dia!</i>
            </button>
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th>Nombre de la Cancha</th>
                        <th>0:00</th><th>1:00</th><th>2:00</th><th>3:00</th><th>4:00</th><th>5:00</th>
                        <th>6:00</th><th>7:00</th><th>8:00</th><th>9:00</th><th>10:00</th><th>11:00</th>
                        <th>12:00</th><th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th><th>17:00</th>
                        <th>18:00</th><th>19:00</th><th>20:00</th><th>21:00</th><th>22:00</th><th>23:00</th>
                    </tr>
                </thead>
                <tbody className='table-striped table-group-divider'>
                    <tr>
                        <td>Cancha 1</td>
                        <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td>
                        <td> </td><td> </td><td> </td><td> </td><td> </td><td> </td>
                        <td>agustin</td><td> </td><td>X</td><td>bart</td><td> </td><td> </td>
                        <td>X</td><td>homero</td><td> </td><td>nico</td><td>juan</td><td> </td>
                    </tr>
                    <tr>
                        <td>Cancha 2</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td>X</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Cronograma