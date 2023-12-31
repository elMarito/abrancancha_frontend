import React, { useState, useEffect, useContext } from "react";
import Cancha from "./Cancha";
import { appContext } from "../../../context/appContext";
import { ENDPOINTS, arrayToMap, fetchTranformTo, fetchCreate } from '../../../services/useFetch';

//-----------------------------------------------------------------------------
const Canchas = () => {
  // const { name } = useParams() //name viene de la ruta /canchas/:name

  const { cache, setCache } = useContext(appContext);
  const tipos = cache.tiposCancha;
  const [canchas, setCanchas] = useState([]);

  const fetchCanchas = async () => {
    try {
      const allCanchas = await fetchTranformTo(ENDPOINTS.canchas);
      let canchasMap = allCanchas.map((cancha) => {
        return { ...cancha, tipo: tipos.get(cancha.idTipo) };
        // const tipo = tipos.find((tipo) => tipo.id === cancha.idTipo);
        // if (tipo)     return { ...cancha, tipo: tipo.nombre    };          
        // return cancha;
      });
      setCanchas(canchasMap);
      // const allCanchas = await fetchTranformTo(ENDPOINTS.canchas);
      // falta filtrar las canchas del club x
      // if (tipoCanchaElegido)
      //     setCanchas(allCanchas.filter(cancha => cancha.idTipo === tipoCanchaElegido));
      // else
      // setCanchas(allCanchas);
    } catch (error) {
      console.log(error)/* alert("ojo") */ /* err = setError(err) */
    }
  }
  useEffect(() => {
    fetchCanchas();
    // const BASE_URL = "http://localhost:3030/"
    // fetch(BASE_URL + ENDPOINTS.canchas)
    //   .then(res => {
    //     if (res.ok) return res.json();
    //     throw new Error(`${res.status}. ${res.statusText}`);
    //   })
    //   .then(data => {
    //     data = data.map((cancha) => {
    //       return { ...cancha, tipo: tipos.get(cancha.idTipo) };
    //       // const tipo = tipos.find((tipo) => tipo.id === cancha.idTipo);
    //       // if (tipo)     return { ...cancha, tipo: tipo.nombre    };          
    //       // return cancha;
    //     });

    //     setCanchas(data);
    //     // setCache((prevState) => ({ ...prevState, categories: data, }));
    //     // console.log(data);
    //   })
    //   .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
  }, [])

  if (canchas.lenght == 0) return (<></>);

  return (
    <>
      <button type="button" className="edit btn btn-primary" >
        <i className="fa-regular fa-pen-to-square">Agregar cancha</i>
      </button>
      <table className="table table-sm table-hover" onClick={() => handleAction}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">N°</th>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            <th scope="col">Tarifa</th>
            <th scope="col">Observaciones</th>
            <th scope="col">Rating</th>
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className='table-striped table-group-divider'>
          {canchas.map(cancha => (
            // <Link key={cancha.id} to={`/tacos/${taco.id}`}>{algo}</Link> para usar con useParams()
            <Cancha key={cancha.id} data={cancha} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Canchas

// Event listener para las acciones  
// const botonConsulta = document.getElementById('tablaCancha');
// document.addEventListener('click', function (event) {
const handleAction = (event) => {
  const btn = event.target.closest('button');
  if (btn === null) return

  if (btn.classList.contains('view')) handleView(event)
  else if (btn.classList.contains('edit')) handleEdit(event)
  else if (btn.classList.contains('botonBorrar')) {
    // // const playerId = event.target.getAttribute('data-player-id');
    // const playerId = btn.getAttribute('data-player-id');
    // handleDelete(playerId)
    Swal.fire({
      title: '¿Esta seguro?',
      text: "Esta accion no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
    })
  }
};
//-----------------------------------------------------------------------------
function handleView(event) {
  const row = event.target.closest('tr');
  const cells = row.querySelectorAll('td');
  // const playerId = Number(event.target.getAttribute('data-player-id'));
  // function handleView(btn) {
  // const row = btn.closest('tr');
  // const cells = row.querySelectorAll('td');
  // const playerId = Number(btn.getAttribute('data-player-id'));

  const playerId = Number(cells[0].textContent);
  const player = {
    nombre: cells[1].textContent,
    apellido: cells[2].textContent,
    email: cells[3].textContent,
    tel: cells[4].textContent,
    cat: cells[5].textContent
  }

  if (player) {
    const nombreView = document.getElementById('nombreView');
    nombreView.textContent = player.nombre;

    const apellidoView = document.getElementById('apellidoView');
    apellidoView.textContent = player.apellido;

    const emailView = document.getElementById('emailView');
    emailView.textContent = player.email;

    const telView = document.getElementById('telView');
    telView.textContent = player.telefono;

    const catView = document.getElementById('catView');
    catView.textContent = player.categoria;

    const avatarView = document.getElementById('avatarView');
    // avatarView.innerHTML = `<img src="${player.avatar}" alt="${player.nombre}">`;
  } else {
    console.error(`Player with ID ${playerId} not found`);
  }
}

function handleEdit(event) {
  const row = event.target.closest('tr');
  const cells = row.querySelectorAll('td');
  const playerId = Number(cells[0].textContent);

  document.getElementById('nombreEdit').textContent = cells[1].textContent;
  document.getElementById('apellidoEdit').textContent = cells[2].textContent;
  document.getElementById('emailEdit').textContent = cells[3].textContent;
  document.getElementById('telEdit').textContent = cells[4].textContent;
  document.getElementById('catEdit').textContent = cells[5].textContent;

  const guardarBoton = document.getElementById('saveEdit');
  guardarBoton.setAttribute('data-player-id', playerId)
}

function handleDelete(playerId) {
  if (playerId) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: "Esta accion no se puede deshacer!",
      icon: 'warning',
      showCancelButton: true,
      /* confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', */
      confirmButtonText: 'Si, borrar!'
    }).then((result) => {
      // if (result.isConfirmed) eliminarPlayer(playerId);
    })
    // if (Swal.fire('Atencion!', '¿Estás seguro de que quieres eliminar este jugador?', 'success',))
    // if (confirm('¿Estás seguro de que quieres eliminar este jugador?')) {
    //   eliminarPlayer(playerId);
    // }
  }
}
//-----------------------------------------------------------------------------
const getTiposCancha = async () => {
  try {
    // const allTiposCanchas = await fetchTranformTo( ENDPOINTS.tipos_cancha, arrayToMap);
    const allTiposCanchas = await fetchTranformTo(ENDPOINTS.tipos_cancha);
    const tiposMap = new Map();
    allTiposCanchas.forEach((tipo) => { tiposMap.set(tipo.id, tipo.nombre) });
    return tiposMap
  } catch (error) {
    console.log(error)/* alert("ojo") */ /* err = setError(err) */
  }
}