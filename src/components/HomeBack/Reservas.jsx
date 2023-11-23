import React, { useState, useEffect } from "react";
import NavBarBack from "./NavbarBack";
import { ENDPOINTS, arrayToMap, fetchTranformTo, fetchCreate } from '../../services/useFetch';

function Reservas() {
  const baseUrl = "http://localhost:3030/reservas";


    const fetchBoth = async (setReservas) => {
        // https://stackoverflow.com/questions/57531665/fetching-data-just-after-another-fetch-is-complete-in-react-hooks
        // https://stackoverflow.com/questions/73114731/multiple-fetch-in-useeffect-fetch-data-depend-on-another-fetch-data
        try {
            
            const canchasMap = await fetchTranformTo(ENDPOINTS.canchas, arrayToMap);
            const usuariosMap = await fetchTranformTo(ENDPOINTS.usuarios, arrayToMap);
            const data3 = await fetchTranformTo(ENDPOINTS.reservas);

            setReservas(
                data3.map(row => ({
                    id: row.id, fecha: row.fecha, estado: row.estado,
                    usuario: usuariosMap.get(row.idUsuario),
                    cancha: canchasMap.get(row.idCancha)
                }))
            );
            // console.log(reservas);
        } catch (error) {
            console.log(error)/* alert("ojo") */ /* err = setError(err) */
        }
    };
    
    useEffect(() => {
        fetchBoth(setReservas);
    }, [])

    if (reservas.lenght == 0) return (<></>);

    return (
        <>
            <NavBarBack />
            <button type="button" className="edit btn btn-primary" >
                <i className="fa-regular fa-pen-to-square">Agregar reservas</i>
            </button>
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">N°</th>
                        {/* <th scope="col">id</th> */}
                        <th scope="col">Usuario </th>
                        <th scope="col">Cancha </th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody className='table-striped table-group-divider'>
                    {reservas.map(reserva => (
                        <Reserva key={reserva.id} data={reserva} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Reservas;
