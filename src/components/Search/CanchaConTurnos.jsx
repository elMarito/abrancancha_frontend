import React, { useState, useEffect } from 'react'
import ButtonTurno from './ButtonTurno';

const CanchaConTurnos = ({ cancha, reservas }) => {
    // const { numero, nombre, tarifa, rating, observaciones, activa } = cancha;
    // const { id, usuario, cancha, fecha, estado } = reserva;
    const [mapedReservas, setMapedReservas] = useState(mapReservas(reservas));
    // const HORA_INICIO = 0;
    const HORA_FIN = 23;
    // const horas = [...Array(HORA_FIN + 1).keys()];
    // const horassss = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"
    //     , "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
    const horas = Array.from({ length: HORA_FIN + 1 }, (_, index) => `${index.toString().padStart(2,"0")}:00`);

    // const getDateSeparated = async (idCancha, hora) => {
    //     const dateTime = new Date("2023-10-21T10:00:00Z");

    //     const date = dateTime.toISOString().split('T')[0];
    //     const time = dateTime.toISOString().split('T')[1].split('Z')[0];
    //     return [date, time]
    // }

    // const mapReservas = (reservas) => {
    function mapReservas(reservas) {
        let result_dict = new Map();
        let formatted_time;

        reservas.forEach(element => {
            formatted_time = element.fecha.split("T")[1].slice(0, 5);
            result_dict.set(formatted_time
                , { id: element.id, idUsuario: element.idUsuario, estado: element.estado })
        });
        return result_dict;
    }

    useEffect(() => {
        setMapedReservas(mapReservas(reservas))
    }, [reservas])
    
    return (
        <tr>
            {/* <div className='tarjeta_cancha_turnos'>
                <div className='tarjeta_cancha'>
                    <p>Cancha N°: {cancha.numero}</p>
                    <p>Nombre: {cancha.nombre}</p>
                    <p>Tarifa: $&#32;{cancha.tarifa}</p>
                    <p>Rating: {"★".repeat(cancha.rating) + "☆".repeat(5 - cancha.rating)}</p>
                </div>
                <div className='tarjetas_hora'>
                    {horas.map((item, index) => (
                        <div className='tarjeta_hora' key={index}>
                            <p>{item}</p>
                            <ButtonTurno key={index} cancha={cancha} hora={item} reserva={mapedReservas.get(item)}/>
                        </div>)
                    )}
                </div>
            </div> */}
            <td>{cancha.numero}</td>
            <td>{cancha.nombre}</td>
            <td>$&#32;{cancha.tarifa}</td>
            <td>{"★".repeat(cancha.rating) + "☆".repeat(5 - cancha.rating)}</td>
            {/* <td>{estado}</td> */}
            {/* reservas */}
            {/* {console.log(mapedReservas.get(item),mapedReservas.has(item))}; */}
            {horas.map((item, index) => (
                <td key={index}>
                    <ButtonTurno key={index} cancha={cancha} hora={item} reserva={mapedReservas.get(item)}/>
                </td>)
            )}
        </tr>
    )
}

export default CanchaConTurnos