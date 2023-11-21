/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
// import DbAdapter, { getAllData2 } from "../services/dbAdapter";
// import ErrorMsg from "../components/ErrorMsg";
import { ENDPOINTS, fetchTranformTo, useFetch } from "../services/useFetch";
import { AUTORIZATION_LEVEL } from "../components/LoginForm/Login";

export const appContext = createContext({});
// export const appContext = createContext({dbAdapter: new DbAdapter(BASE_URL),
//   user: null,
//   tiposCancha: new Map()});

export const AppContextProvider = ({ children }) => {

  const BASE_URL = "http://localhost:3030/"
  const [cache, setCache] = useState({
    // dbAdapter: new DbAdapter(BASE_URL),
    user: null,
    tiposCancha: new Map(),
    filtros: { tipoCancha: 0, fecha: new Date().toISOString(), hora: "" }
    // filtros: { tipoCancha: 0, fecha: new Date().toISOString().split('T')[0], hora: "" }<-esto atrasa la fecha
  });

  const getTiposCancha = async () => {
    try {
      const allTiposCanchas = await fetchTranformTo(ENDPOINTS.tipos_cancha);
      const tiposMap = new Map();
      allTiposCanchas.forEach((tipo) => { tiposMap.set(tipo.id, tipo.nombre) });
      setCache(prev => ({ ...prev, tiposCancha: tiposMap }));
    } catch (error) {
      console.log(error)/* alert("ojo") */ /* err = setError(err) */
    }
  }

  useEffect(() => {
    getTiposCancha()
    // fetch(BASE_URL + "tipos_cancha")
    //   .then(res => {
    //     if (res.ok) return res.json();
    //     throw new Error(`${res.status}. ${res.statusText}`);
    //   })
    //   .then(data => {
    //     const tiposMap = new Map();
    //     data.forEach((tipo) => { tiposMap.set(tipo.id, tipo.nombre) });
    //     setCache(prev => ({ ...prev, tiposCancha: tiposMap }));
    //     // setCache((prevState) => ({ ...prevState, categories: data, }));
    //     // console.log(data);
    //   })
    //   .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
  }, [])
  // const [cache, setCache] = useState({
  //   dbAdapter: new DbAdapter(BASE_URL),
  //   products: [],
  //   cart: [],
  //   search: "",
  //   order: "",
  //   filters: [],
  //   productsShown: 0,
  //   user: null,
  // });


  // const [dbAdapter, setdbAdapter] = useState(new DbAdapter());
  // console.log("hola2");
  // const getProducts = (url) => {
  // cache.dbAdapter.getAllData(()=> setCache)

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const data = await cache.dbAdapter.getAllData();
  //       setCache(prev => ({ ...prev, products: data }));
  //     } catch (error) {
  //       console.log(error);
  //       // <ErrorMsg msg={error}/>
  //     }
  //   }

  //   (async () => await fetchItems())();
  // }, [])

  return (
    // aca deberia pasarle algo
    <appContext.Provider value={{ cache, setCache }}>
      {children}
    </appContext.Provider>
  )
}

// export const useAuth = ()=>useContext(appContext);
export const useAuth = (autorizationLevel) => {
  const { cache, setCache } = useContext(appContext);
  let user = cache.user;
  useEffect(

    () => console.log("anda¿")
    , [])
  return user !== null && user.autorizacion === autorizationLevel;
};

export const setUser = (user) => {
  const { cache, setCache } = useContext(appContext);
  setCache(prevState => ({ ...prevState, user }));
};

