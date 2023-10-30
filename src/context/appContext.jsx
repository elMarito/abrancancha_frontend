import { createContext, useState, useEffect, useContext } from "react";
import DbAdapter, { getAllData2 } from "../services/dbAdapter";
// import ErrorMsg from "../components/ErrorMsg";
import { useFetch } from "../services/useFetch";
import { AUTORIZATION_LEVEL } from "../components/LoginForm/Loginform";

export const appContext = createContext({});
// export const appContext = createContext({dbAdapter: new DbAdapter(BASE_URL),
//   user: null,
//   tiposCancha: new Map()});

export const AppContextProvider = ({ children }) => {
  // const BASE_URL = 'https://fakestoreapi.com/products';
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);


  //       {error && <li>Error: {error}</li>}
  //         {loading && <li>Loading...</li>}
  //         {data?.map((item) => (
  //           <li key={item.id}>{item.title}</li>
  //         ))}
  // const [cache, setCache] = useState({
  //   dbAdapter: useFetch(BASE_URL)
  const BASE_URL = "http://localhost:3030/"
  const [cache, setCache] = useState({
    dbAdapter: new DbAdapter(BASE_URL),
    user: null,
    tiposCancha: new Map()
  });

  useEffect(() => {
    // console.log("effect");
    fetch(BASE_URL + "tipos_cancha")
      .then(res => {
        if (res.ok) return res.json();
        throw new Error(`${res.status}. ${res.statusText}`);
      })
      .then(data => {
        const tiposMap = new Map();
        data.forEach((tipo) => { tiposMap.set(tipo.id, tipo.nombre) });
        setCache(prev => ({ ...prev, tiposCancha: tiposMap }));
        // setCache((prevState) => ({ ...prevState, categories: data, }));
        // console.log(data);
      })
      .catch(error => console.log(error)/* alert("ojo") */ /* err = setError(err) */)
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

    ()=>console.log("anda¿")
    ,[])
  return user !== null && user.autorizacion === autorizationLevel;
};

export const setUser = (user) => {
  const { cache, setCache } = useContext(appContext);
  setCache(prevState => ({ ...prevState, user }));
};


