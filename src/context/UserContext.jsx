/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// Crear Contexto
export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);


  const url = "http://localhost:3030/usuarios";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((usuarios) => {
        setUsuarios(usuarios);
        
      });
  }, []);



  return (
    <UserContext.Provider value={usuarios}>
      {children}
    </UserContext.Provider>
  );
};