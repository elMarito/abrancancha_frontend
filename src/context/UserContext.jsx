/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Crear Contexto
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "http://localhost:3030/usuarios";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((usuarios) => {
        setUsuarios(usuarios);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando usuarios...</p>;
  }

  return (
    <UserContext.Provider value={usuarios}>
      {children}
    </UserContext.Provider>
  );
};