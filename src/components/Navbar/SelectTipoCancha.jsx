import React, { useState, useEffect} from 'react'
import { ENDPOINTS, fetchTranformTo } from '../../services/useFetch';

const SelectTipoCancha = () => {
    const [tiposCancha, setTiposCancha] = useState([]);
    //-------------------------------------------------------------------------
    // necesito reservas, canchas     
    const fetchTiposCancha = async () => {
        try {
            // const canchasMap = await fetchTranformTo( ENDPOINTS.canchas, arrayToMap);
            const allTiposCancha = await fetchTranformTo(ENDPOINTS.tipos_cancha);
            allTiposCancha.sort((a, b) => {
                if (a.nombre < b.nombre) return -1;
                else if (a.nombre > b.nombre) return 1;
                else return 0;
            });
            setTiposCancha(allTiposCancha);
        } catch (error) {
            console.log(error)/* alert("ojo") */ /* err = setError(err) */
        }
    }

    useEffect(() => {
        fetchTiposCancha();
    }, [])

    return (
        <>
            {tiposCancha.map(tipo =>
                <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>)
            }
            {/* <option value="Futbol5">Futbol 5</option> */}
        </>
    )
}

export default SelectTipoCancha