import React, { useState, useEffect, useContext } from 'react'
import { ENDPOINTS, arrayToMap, fetchTranformTo, fetchCreate, fetchDelete } from '../../services/useFetch';
import CanchaConTurnos from './CanchaConTurnos';
import { appContext } from '../../context/appContext';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { cache, setCache } = useContext(appContext);
    const { tipoCancha, fecha, hora } = cache.filtros;
    // const loggedUserId = cache.user.id; cache.user? cache.user.autorizationLevel : 0;
    // const loggedUserId = 1;
    const navigate = useNavigate();

    const [refreshReservas, setRefreshReservas] = useState(false);
    const [reservas, setReservas] = useState([]);
    const [canchas, setCanchas] = useState([]);
    let reservasXFecha;
    let canchasXTipo;
    //filtrar por tipo de cancha o no
    // fecha y/o hora
    // mostrar canchas y horarios libres del dia elegido
    //mostrar referencias: disponible, reservada, ocupada

    //-------------------------------------------------------------------------
    // necesito reservas, canchas     
    const fetchCanchas = async () => {
        try {
            // const canchasMap = await fetchTranformTo( ENDPOINTS.canchas, arrayToMap);
            const allCanchas = await fetchTranformTo(ENDPOINTS.canchas);
            // falta filtrar las canchas del club x
            // const tipoCanchaElegido = cache.filtros.tipoCancha;
            if (tipoCancha > 0)
                setCanchas(allCanchas.filter(cancha => cancha.idTipo === tipoCancha));
            else
                setCanchas(allCanchas);
        } catch (error) {
            console.log(error)/* alert("ojo") */ /* err = setError(err) */
        }
    }
    const fetchReservas = async () => {
        try {
            const allReservas = await fetchTranformTo(ENDPOINTS.reservas);
            // aplicar filtros
            // dataReservas.map(/**filtrar x fecha x tipo de cancha */)

            // filtrar todas x fecha o filtrar despues cada vez q cambio de cancha
            const reservasFiltradas = allReservas.filter(reserva => esLaFechaElegida(reserva.fecha));
            // const reservasFiltradas = allReservas.filter(reserva => reserva.fecha === fecha);
            setReservas(reservasFiltradas);
            // console.log("reservas.lenght:", reservas.lenght);
        } catch (error) {
            console.log(error)/* alert("ojo") */ /* err = setError(err) */
        }
    };
    useEffect(() => {
        fetchCanchas();
    }, [tipoCancha])
    //-------------------------------------------------------------------------
    useEffect(() => {
        fetchReservas();
    }, [fecha])
    // }, [refreshReservas, fechaElegida])

    const esLaFechaElegida = (fechaReserva) => {
        // console.log(fechaReserva , fecha);
        // console.log("-*-+-+-", fechaReserva.split('T')[0], fecha.split('T')[0]);
        return fechaReserva.split('T')[0] === fecha.split('T')[0];
        // return fechaReserva.split('T')[0] === fecha;
    }
    //---------------------------------------------------------------------------
    if (!canchas.length) return <h2>Cargando datos...</h2>;
    //-------------------------------------------------------------------------
    const reservasByCancha = (reservas, idCancha/* , fecha */) => {
        const data = reservas.filter(reserva => {
            return reserva.idCancha === idCancha //&& reserva.fecha === fecha;
        });
        //**tambien se podria filtrar reservas canceladas */
        return (data)
        // return arrayToMap(data)
    }
    //-----------------------------------------------------------------------------
    const handleAction = (event) => {
        const btn = event.target.closest('button');
        if (btn === null) return

        // console.log( cache.user);
        if (cache.user === null) {
            // if (usuarioId != loggedUserId) {
            Swal.fire({
                title: 'Reservas',
                html: `Aun no estas logeado <br>
                    debes iniciar sesion para continuar <br><br>
                    ¿Deseas loguearte ?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: `<i class="fa fa-thumbs-down"></i> Si!`,
                confirmButtonAriaLabel: "Si!"
            }).then((result) => {
                if (result.isConfirmed)
                    navigate("/login");
            });
            
            return
        // } else if (cache.user.id != loggedUserId) {
        //     Swal.fire({
        //         title: 'Horario no disponible',
        //         text: "Esta reservado por otro usuario.",
        //         icon: 'warning',
        //         showConfirmButton: false,
        //         timer: 1500
        //     })
        //     return
        }

        // console.log(btn.getAttribute('data-cancha-id'));
        // console.log(btn.getAttribute('data-fecha'));

        // if (btn.classList.contains('view')) handleView(event)
        // else if (btn.classList.contains('edit')) handleEdit(event)
        // else if (btn.classList.contains('botonBorrar')) {
        if (btn.classList.contains('view')) {
            const usuarioId = Number(btn.getAttribute('data-usuario-id'));
            // console.log(loggedUserId,"usuarioId",usuarioId);
            // if (usuarioId === loggedUserId) {
            if (usuarioId === cache.user.id) {
                Swal.fire({
                    title: 'Turno Reservado por ti',
                    html: `Tienes una reserva en la cancha: <b><u> ${btn.getAttribute('data-cancha-nombre')} </u></b> <br>
                        el dia <b><u> ${fecha.split('T')[0]} </u></b> <br>
                        a las <b><u> ${btn.getAttribute('data-hora')} horas</u></b> <br><br>
                        ¿Deseas cancelarla ?`,
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonText: `<i class="fa fa-thumbs-down"></i> Si, cancelar la reserva!`,
                    confirmButtonAriaLabel: "Si, cancelar la reserva!",
                    cancelButtonText: `<i class="fa fa-thumbs-up"></i> No, mantenarla`,
                    cancelButtonAriaLabel: "No, mantenarla"
                }).then((result) => {
                    if (result.isConfirmed) {
                        // aca tendria que buscar la reserva por usuario, fecha y hora? y despues borrarla
                        eliminarReserva(Number(btn.getAttribute('data-reserva-id')))
                    }
                });
            }
            else
            Swal.fire({
                title: 'Horario no disponible',
                text: "Esta reservado por otro usuario.",
                icon: 'warning',
                showConfirmButton: false,
                timer: 1500
            })
                // return
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
                html: `Desea reservar la cancha: <b><u> ${btn.getAttribute('data-cancha-nombre')} </u></b> <br>
                    el dia <b><u> ${fecha.split('T')[0]} </u></b> <br>
                    a las <b><u> ${btn.getAttribute('data-hora')} horas</u></b> ?`,
                icon: 'question',
                showCancelButton: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    agregarReserva({
                        "idUsuario": cache.user.id,
                        "idCancha": Number(btn.getAttribute('data-cancha-id')),
                        "fecha": `${fecha.split('T')[0]}T${btn.getAttribute('data-hora')}:00Z`,
                        "estado": "confirmada"
                    })
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                    // } else if (
                    //     /* Read more about handling dismissals below */
                    //     result.dismiss === Swal.DismissReason.cancel
                    // ) {
                    // Swal.fire({
                    //     title: "Cancelled",
                    //     text: "Your imaginary file is safe :)",
                    //     icon: "error"
                    // });
                }
            });

        }
    };
    //-----------------------------------------------------------------------------
    // FETCHs
    async function agregarReserva(newReserva) {
        try {
            // console.log("newReserva", newReserva);
            const response = await fetchCreate(ENDPOINTS.reservas, newReserva);
            if (response.ok) {
                // actualizar pantalla
                // setRefreshReservas(!refreshReservas);
                fetchReservas();
                // Swal.fire(
                //     'Reserva Creada!',
                //     'La reserva fue realizada con éxito',
                //     'success',
                // );
                Swal.fire({
                    icon: "success",
                    title: "Reserva Creada!",
                    text: 'La reserva fue realizada con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo realizar la reserva',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo realizar la reserva. Error: ' + error,
            });
            console.error(error);
        }
    }
    //-----------------------------------------------------------------------------
    // FETCHs
    async function eliminarReserva(idReserva) {
        try {
            // console.log("newReserva", newReserva);
            const response = await fetchDelete(ENDPOINTS.reservas, idReserva);
            if (response.ok) {
                // actualizar pantalla
                // setRefreshReservas(!refreshReservas);
                fetchReservas();
                // Swal.fire(
                //     'Reserva Cancelada!',
                //     'La reserva fue cancelada con éxito',
                //     'success',
                // );
                Swal.fire({
                    icon: "success",
                    title: "Reserva Cancelada!",
                    text: 'La reserva fue cancelada con éxito',
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo cancelar la reserva',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo cancelar la reserva. Error: ' + error,
            });
            console.error(error);
        }
    }

    // if (canchas.lenght == 0) return (<></>);
    return (
        <>
            {/* <NavBarBack/> */}
            {/* {console.log(cache.filtros)}; */}
            {/* <h1>tipoCanchaElegido: {tipoCancha} - fechaElegida: {fecha} - horaElegida: {hora}</h1> */}
            <table className="table table-sm table-hover">
                <thead><tr>
                    <th className='bg-light'>Referencias:</th>
                    <th className='bg-warning'>Mi Reserva</th>
                    {/* <th className='bg-info'>Ocupada</th> */}
                    {/* <th className='bg-primary'>Libre</th>  bg-primary  bg-dark*/}
                    <th className='bg-primary'>Disponible</th>
                    <th className='bg-danger'>Reservada</th>
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
                                reservas={reservasByCancha(reservas, cancha.id/* , fechaFiltrar */)} />
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

