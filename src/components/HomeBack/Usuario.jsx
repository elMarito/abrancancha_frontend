import React, { useState, useEffect } from "react";
import NavBarBack from "./NavbarBack";

function Usuario() {
  const baseUrl = "http://localhost:3030/usuarios";

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Error al recuperar los usuarios");
      }
    } catch (error) {
      console.error("Error al recuperar los usuarios", error);
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este jugador?')) {
      try {
        const response = await fetch(`${baseUrl}/${userId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          Swal.fire(
            'Jugador eliminado',
            'El jugador fue eliminado con éxito',
            'success',
          );
           // Actualizar la tabla después de eliminar
          fetchUsers();
        } else {
          Swal.fire('Error', 'No se pudo eliminar al jugador', 'error');
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
          'Usuario editado',
          'El usuario fue editado con éxito',
          'success',
        );
        // Actualizar la tabla después de editar
        fetchUsers();
      } else {
        Swal.fire('Error', 'No se pudo editar el usuario', 'error');
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
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="text"
                    required
                    value={editingUser.nombre}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        nombre: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.nombre
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="email"
                    required
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        email: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUser && editingUser.id === user.id ? (
                  <input
                    type="tel"
                    required
                    value={editingUser.telefono}
                    onChange={(e) =>
                      setEditingUser({
                        ...editingUser,
                        telefono: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.telefono
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

export default Usuario;
