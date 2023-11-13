import React, { useState, useEffect } from 'react'
import { ENDPOINTS, arrayToMap, fetchTranformTo, fetchCreate } from '../../services/useFetch';
import CanchaConTurnos from './CanchaConTurnos';

// const Search = ({tipoCanchaElegido, fechaElegida, horaElegida}) => {
const Search = () => {
    const [tipoCanchaElegido, setTipoCancha] = useState(1);
    const [fechaElegida, setFecha] = useState("2023-10-21T10:00:00Z");
    const [horaElegida, setHora] = useState("10:00");

    const [reservas, setReservas] = useState([]);
    const [canchas, setCanchas] = useState([]);

    //filtrar por tipo de cancha o no
    // fecha y/o hora
    // mostrar canchas y horarios libres del dia elegido
    //mostrar referencias: disponible, reservada, ocupada

    //-------------------------------------------------------------------------
    // necesito reservas, canchas     
    // useEffect(() => {
    //     try {
    //         // const canchasMap = await fetchTranformTo( "canchas_club", arrayToMap);
    //         const allCanchas = fetchTranformTo("canchas_club");
    //         // falta filtrar las canchas del club x
    //         const canchasFiltradas = [];
    //         if (tipoCanchaElegido)
    //             canchasFiltradas = allCanchas.filter(cancha => cancha.idTipo === tipoCanchaElegido);
    //         else
    //             canchasFiltradas = allCanchas;
    //         setCanchas(allCanchas);
    //     } catch (error) {
    //         console.log(error)/* alert("ojo") */ /* err = setError(err) */
    //     }
    // }, [tipoCanchaElegido])
    //-------------------------------------------------------------------------
    useEffect(() => {
        const fetchBoth = async () => {
            try {
                // const canchasMap = await fetchTranformTo( "canchas_club", arrayToMap);
                const allCanchas = await fetchTranformTo("canchas_club");
                // console.log("allCanchas",allCanchas);
                // falta filtrar las canchas del club x
                if (tipoCanchaElegido)
                    setCanchas(allCanchas.filter(cancha => cancha.idTipo === tipoCanchaElegido));
                else
                    setCanchas(allCanchas);
                // console.log("canchas", canchas);
                //--------------
                // const usuariosMap = await fetchTranformTo("usuarios", arrayToMap);
                // setCanchas(usuariosMap);
                //--------------
                const allReservas = await fetchTranformTo("reservas");
                // aplicar filtros
                // dataReservas.map(/**filtrar x fecha x tipo de cancha */)

                // filtrar todas x fecha o filtrar despues cada vez q cambio de cancha
                const reservasFiltradas = allReservas.filter(reserva => reserva.fecha === fechaElegida);
                setReservas(allReservas);
                // console.log("reservas", reservas);
            } catch (error) {
                console.log(error)/* alert("ojo") */ /* err = setError(err) */
            }
        };

        fetchBoth();
        // fetchBoth(setReservas, setCanchas);
    }, [])
    // }, [fechaElegida, tipoCanchaElegido])

    const reservasByCanchaAndDate = (reservas, idCancha/* , fecha */) => {
        const data = reservas.filter(reserva => {
            return reserva.idCancha === idCancha //&& reserva.fecha === fecha;
        });
        //**tambien se podria filtrar reservas canceladas */
        return (data)
        return arrayToMap(data)
    }

    if (canchas.lenght == 0) return (<></>);
    return (
        <>
            {/* <NavBarBack/> */}

            {/* <button type="button" className="edit btn btn-primary" >
                <i className="fa-regular fa-pen-to-square">Agregar reservas</i>
            </button><button type="button" className="edit btn btn-primary" >
                <i className="fa-regular fa-pen-to-square">Elegir dia!</i>
            </button> */}
            <table className="table table-sm table-hover">
                <thead><tr>
                    <th className='bg-light'>Referencias:</th>
                    <th className='bg-danger'>Ocupada</th>
                    <th className='bg-warning'>Libre</th>
                    <th className='bg-success'>Disponible</th>
                    <th className='bg-primary'>Reservada</th>
                    <th className='bg-secondary'>No habilitada</th>
                </tr></thead>
            </table>
            {/* <div className='tarjeta_cancha_turnos'>
                <div className='tarjeta_cancha'>
                    <p>N°: #</p>
                    <p>Nombre: ???????????</p>
                    <p>Tarifa: $ ###</p>
                    <p>Rating: {"★".repeat(4) + "☆".repeat(1)}</p>
                </div>
                <div className='tarjeta_hora'>
                    <p>hh:MM</p>
                    <button> <span>disponible</span></button>
                </div>
            </div> */}
            <table className="table table-sm table-hover" onClick={handleAction}>
                <thead>
                    <tr>
                        <th>N°</th><th>Nombre</th><th>Tarifa</th><th>Rating</th>
                        <th>0:00</th><th>1:00</th><th>2:00</th><th>3:00</th><th>4:00</th><th>5:00</th>
                        <th>6:00</th><th>7:00</th><th>8:00</th><th>9:00</th><th>10:00</th><th>11:00</th>
                        <th>12:00</th><th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th><th>17:00</th>
                        <th>18:00</th><th>19:00</th><th>20:00</th><th>21:00</th><th>22:00</th><th>23:00</th>
                    </tr>
                </thead>

                <tbody className='table-striped table-group-divider'>
                    {/* recorrer las canchas y x cada cancha recorrer las reservas filtradas x fecha */}
                    {
                        canchas.map(cancha =>
                            <CanchaConTurnos key={cancha.id}
                                cancha={cancha}
                                reservas={reservasByCanchaAndDate(reservas, cancha.id/* , fechaFiltrar */)} />
                            /* reservas={reservas.filter((reserva) => {
                                return reserva.idCancha === cancha.id && reserva.fecha === fechaFiltrar;
                            })} */
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Search

//-----------------------------------------------------------------------------
const handleAction = (event) => {
    const btn = event.target.closest('button');
    if (btn === null) return
    // console.log(btn.getAttribute('data-cancha-id'));
    // console.log(btn.getAttribute('data-fecha'));

    // if (btn.classList.contains('view')) handleView(event)
    // else if (btn.classList.contains('edit')) handleEdit(event)
    // else if (btn.classList.contains('botonBorrar')) {
    if (btn.classList.contains('view')) {
        return
        // Swal.fire({
        //     title: 'Horario no disponible',
        //     text: "Esta accion no se puede deshacer!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //   })
    }
    else if (btn.classList.contains('edit')) {
        // // const playerId = event.target.getAttribute('data-player-id');
        // const playerId = btn.getAttribute('data-player-id');
        // handleDelete(playerId)
        Swal.fire({
            title: 'Reservar de Turno',
            html: `Desea reservar la cancha: <b><u> ${btn.getAttribute('data-cancha')} </u></b> <br>
                    el dia <b><u> viernes ## de agosto </u></b> <br>
                    a las <b><u> ${btn.getAttribute('data-hora')} horas</u></b> ?`,
            icon: 'question',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                agregarReserva({
                    "id": 0,
                    "idUsuario": 1,
                    "idCancha": btn.getAttribute('data-cancha'),
                    "fecha": "2023-10-21T10:00:00Z",
                    "estado": "confirmada"
                })
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });

    }
};
//-----------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// FETCHs
async function agregarReserva(newReserva) {
    try {
        const response = await fetchCreate(ENDPOINTS.reservas, newReserva);
        if (response.ok) {
            // actualizar pantalla
            Swal.fire(
                'Reserva Creada!',
                'La reserva fue realizada con éxito',
                'success',
            );
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo realizar la reserva',
            });
        }
    } catch (error) {
        console.error(error);
    }
}