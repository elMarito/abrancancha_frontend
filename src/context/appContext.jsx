import { createContext, useState, useEffect } from "react";
import DbAdapter, { getAllData2 } from "../services/dbAdapter";
// import ErrorMsg from "../components/ErrorMsg";
import { useFetch } from "../services/useFetch";
export const appContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const BASE_URL = 'https://fakestoreapi.com/products';
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  
  
  //       {error && <li>Error: {error}</li>}
//         {loading && <li>Loading...</li>}
//         {data?.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
  // const [cache, setCache] = useState({
  //   dbAdapter: useFetch(BASE_URL)
  const [cache, setCache] = useState({
    dbAdapter: new DbAdapter(BASE_URL),
    products: [],
    cart: [],
    search: "",
    order: "",
    filters: [],
    productsShown: 0,
    user: null,
  });
  
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

kj

  return (
    // aca deberia pasarle algo
    <appContext.Provider value={{ cache, setCache }}>
      {children}
    </appContext.Provider>
  )
}
