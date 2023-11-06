import React, { useState, useEffect, useContext } from "react";
import Reserva from "./Reserva";
<<<<<<< HEAD
=======
import NavBarBack from "./NavbarBack";
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b

// import { appContext } from '../../context/appContext';
//-----------------------------------------------------------------------------
const Reservas = () => {
    const [reservas, setReservas] = useState([]);
    // let usuarios = new Map();
    // let canchas = new Map();

    const BASE_URL = "http://localhost:3030/"
    useEffect(() => {

        const fetchBoth = async (setReservas) => {
            // https://stackoverflow.com/questions/57531665/fetching-data-just-after-another-fetch-is-complete-in-react-hooks
            // https://stackoverflow.com/questions/73114731/multiple-fetch-in-useeffect-fetch-data-depend-on-another-fetch-data
            try {
                const arrayToMap = async (array) => {
                    const newMap = new Map();
                    array.forEach(row => { newMap.set(row.id, row) });
                    return newMap
                }

                const fetchTranformTo = async (baseUrlAndEndPooint, arrayToMap) => {
                    const res1 = await fetch(baseUrlAndEndPooint);
                    if (!res1.ok) throw new Error(`${res1.status}. ${res1.statusText}`);
                    const data = await res1.json();

                    return (arrayToMap === undefined) ? data : arrayToMap(data)
                }

                const canchasMap = await fetchTranformTo(BASE_URL + "canchas_club", arrayToMap);
                const usuariosMap = await fetchTranformTo(BASE_URL + "usuarios", arrayToMap);
                const data3 = await fetchTranformTo(BASE_URL + "reservas");
                // const res1 = await fetch(BASE_URL + "canchas_club");
                // if (!res1.ok) throw new Error(`${res1.status}. ${res1.statusText}`);
                // const data = await res1.json();
                // const canchasMap = new Map();
                // data.forEach((cancha) => { canchasMap.set(cancha.id, cancha) });

                // const res2 = await fetch(BASE_URL + "usuarios");
                // if (!res2.ok) throw new Error(`${res2.status}. ${res2.statusText}`);
                // const data2 = await res2.json();
                // const usuariosMap = new Map();
                // data2.forEach((usuario) => { usuariosMap.set(usuario.id, usuario) });

                // const res3 = await fetch(BASE_URL + "reservas");
                // if (!res3.ok) throw new Error(`${res3.status}. ${res3.statusText}`);
                // const data3 = await res3.json();
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

        fetchBoth(setReservas);
        // usuarios = getUsuarios(BASE_URL);
        // canchas = getCanchas(BASE_URL);

        // fetch(BASE_URL + "reservas")
        //     .then(res => {
        //         if (res.ok) return res.json();
        //         throw new Error(`${res.status}. ${res.statusText}`);
        //     })
        //     .then(data => {
        //         setReservas(data);
        //         // setReservas((prevState) => ({
        //         //     ...prevState,
        //         //     usuario: usuarios.get(data.idUsuario),
        //         //     cancha: canchas.get(data.idCancha),
        //         // }));

        //         // "id": 1,
        //         // "idUsuario": 1,
        //         // "idCancha": 101,
        //         // "fecha": "2023-10-21T10:00:00Z",
        //         // "estado": "confirmada"
        //         // console.log(data);
        //     })
        //     .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
    }, [])

    if (reservas.lenght == 0) return (<></>);

    return (
        <>
<<<<<<< HEAD
=======
        <NavBarBack/>
>>>>>>> 45c3c5dabcd8a9c5d54c98a7e6eb6e68295a9d5b
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
export default Reservas