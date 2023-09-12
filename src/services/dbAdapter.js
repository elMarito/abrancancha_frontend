export const MESSAGE_TYPES = Object.freeze({
    ERROR: "Error x",
    WARNING: Symbol(),
})

export default class DbAdapter {
    // static API_KEY = "kkkkkk";
    constructor(url) {
        // console.log("dbadapter");
        this.urlBase = url; //"https://fakestoreapi.com/products";
    }
    async getAllData() {
        const response = await fetch(this.urlBase);
        if (response.ok) return await response.json();
        throw new Error(`${response.status}. ${response.statusText}`);
        // const data = await response.json();
    }
    // async getAllData(setAlgo) {
    //     const response = await fetch(this.urlBase);
    //     if (response.ok) return response.json();
    //     throw new Error(`${response.status}. ${response.statusText}`);
    //     setAlgo(...onstorage,)
    // }
    // async addNew(data) {
    //     const response = await fetch(this.urlBase);
    //     return response.json();
    // }
    // async delete(id) {
    //     const response = await fetch(this.urlBase);
    //     return response.json();
    // }
    // async buscar(id) {
    //     const response = await fetch(this.urlBase);
    //     return response.json();
    // }

}


export const getAllData2 = (BASE_URL) => {
    //  fetch(BASE_URL)
    fetch("https://fakestoreapi.com/products")
        .then(res => {
            if (res.ok) return res.json();
            throw new Error(`${res.status}. ${res.statusText}`);
        })
        .catch( /* alert("ojo") */ /* err = setError(err) */)
    //   .then(json => setProducts(json))
}



const API_URL = "https://fakestoreapi.com";
export async function getAllProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (response.ok) return await response.json();
        throw new Error(`${response.status}. ${response.statusText}`);
        // const data = await response.json();
    } catch (error) {
        console.log(error);
        // <ErrorMsg msg={error}/>
    }
}
