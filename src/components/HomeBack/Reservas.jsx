import React, { useState, useEffect } from "react";
import NavBarBack from "./NavbarBack";

function Reservas() {
  const baseUrl = "http://localhost:3030/reservas";

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Error al recuperar las reservas");
      }
    } catch (error) {
      console.error("Error al recuperar las reservas", error);
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta Reserva?')) {
      try {
        const response = await fetch(`${baseUrl}/${userId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          Swal.fire(
            'reserva eliminada',
            'Su reserva fue eliminada con éxito',
            'success',
          );
           // Actualizar la tabla después de eliminar
          fetchUsers();
        } else {
          Swal.fire('Error', 'No se pudo eliminar la reserva', 'error');
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await fetch(`${baseUrl}/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        Swal.fire(
          'Reserva editada',
          'Su reserva fue editada con éxito',
          'success',
        );
        // Actualizar la tabla después de editar
        fetchUsers();
      } else {
        Swal.fire('Error', 'No se pudo editar su reserva', 'error');
      }
    } catch (error) {
      console.error(error);
    }
    setEditingUser(null);
  };

  const cancelEdit = () => {
    setEditingUser(null);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <NavBarBack/>
      <table id="tabla" className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <select className="custom-select" value={editingUser.idCancha} onChange={(e) => setEditingUser({ ...editingUser, idCancha: e.target.value })}>
                    <option disabled selected value>Cancha</option>
                    <option value="Cancha 1">Cancha 1</option>
                    <option value="Cancha 2">Cancha 2</option>
                    <option value="Cancha 3">Cancha 3</option>
                  </select>
                ) : (
                  user.idCancha
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="date"
                    required
                    value={editingUser.fecha}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        fecha: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.fecha
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <select className="custom-select" value={editingUser.estado} onChange={(e) => setEditingUser({ ...editingUser, estado: e.target.value })}>
                    <option disabled selected value>Estado</option>
                    <option value="Pendiente">Pendiente</option>
                    <option value="Confirmado">Confirmado</option>
                    <option value="Falta pago">Falta pago</option>
                  </select>
                ) : (
                  user.estado
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <>
                    <button
                      className="btn btn-success"
                      onClick={() => updateUser(editingUser)}
                    >
                      Guardar
                    </button>
                    <button className="btn btn-secondary" onClick={cancelEdit}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-light"
                    onClick={() => setEditingUser(user)}
                  >
                    <i className="fa-regular fa-pen-to-square"></i>
                  </button>
                )}
                <button className="btn btn-light" onClick={() => deleteUser(user.id)}>
                <i className="fa-regular fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reservas;
