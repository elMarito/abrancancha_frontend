import { useState, useEffect } from "react";
// const BASE_END_POINT = '/players';
const CONTENT_TYPE_APPLICATION_JSON = { 'Content-Type': 'application/json' };
const BASE_URL = "http://localhost:3030/";
// const BASE_URL = "http://localhost:3000/"; // api funcionando
export const ENDPOINTS = {
    clubes: "clubes",
    tipos_cancha: "tipos_cancha",
    canchas_club: "canchas",
    estados_usuario: "estados_usuario",
    usuarios: "usuarios",
    administradores: "administradores",
    agendas: "agendas",
    reservas: "reservas"
};

export function useFetch(url) {
    // Basic
    //   const [data, setData] = useState(url);
    //   useEffect(() => {
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((json) => setData(json));
    //   }, []);
    //   return { data };

    // ---------------------------------------------
    //  With Loading
    //   const [data, setData] = useState(null);
    //   const [loading, setLoading] = useState(true);
    //   useEffect(() => {
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .finally(() => setLoading(false));
    //   }, []);
    //   return { data, loading };

    // ---------------------------------------------
    // With Error
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((response) => {/* response.json() */
                if (response.ok) return response.json();
                throw new Error(`${response.status}. ${response.statusText}`);
            }
            )
            .then((json) => setError("Error"))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);
    return { data, loading, error };

    // ---------------------------------------------
    // With Abort Controller
    //   const [data, setData] = useState(null);
    //   const [loading, setLoading] = useState(true);
    //   const [error, setError] = useState(null);
    //   const [controller, setController] = useState(null);

    //   useEffect(() => {
    //     const abortController = new AbortController();
    //     setController(abortController);

    //     fetch(url, { signal: abortController.signal })
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .catch((error) => {
    //         if (error.name === "AbortError") {
    //           console.log("Cancelled request");
    //         } else {
    //           setError(error);
    //         }
    //       })
    //       .finally(() => setLoading(false));

    //     return () => abortController.abort();
    //   }, []);

    //   const handleCancelRequest = () => {
    //     if (controller) {
    //       controller.abort();
    //       setError("Cancelled Request");
    //     }
    //   };

    //   return { data, loading, error, handleCancelRequest };
}

export const arrayToMap = async (array) => {
    const newMap = new Map();
    array.forEach(row => { newMap.set(row.id, row) });
    return newMap
}

export const fetchTranformTo = async (EndPoint, arrayToMap) => {
    // const BASE_URL = "http://localhost:3030/"
    const res1 = await fetch(BASE_URL + EndPoint);
    if (!res1.ok) throw new Error(`${res1.status}. ${res1.statusText}`);
    const data = await res1.json();

    return (arrayToMap === undefined) ? data : arrayToMap(data)
}

export const fetchCreate = async (endPoint, newData) => {
    const response = await fetch(`${BASE_URL}/${endPoint}`, {
        method: 'POST',
        headers: CONTENT_TYPE_APPLICATION_JSON,
        body: JSON.stringify(newData),
    });
    return response;
}
export const fetchUpdate = async (endPoint, newData, idData) => {
    const response = await fetch(`${BASE_URL}/${endPoint}/${idData}`, {
        method: 'POST',
        headers: CONTENT_TYPE_APPLICATION_JSON,
        body: JSON.stringify(newData),
    });
    return response;
}
export const fetchDelete = async (endPoint, idData) => {
    const response = await fetch(`${BASE_URL}/${endPoint}/${idData}`, {
        method: 'DELETE',
    });
    return response;
}