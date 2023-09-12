// CRUD:Create, Read, Update y Delete
const URL_API = "https://5fc82e232af7770165ad172.mockapi.io/api/users";
const id = "4";
// READ: get a single resource by id 
fetch(`${URL_API}/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

// READ: get all resources 
fetch(URL_API)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

//DELETE: delete a resource by id 
fetch(`${URL_API}/${id}`, { method: "DELETE", })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

//CREATE:  create a new resource 
const newUser = {
    createdAt: new Date(),
    name: "Marcelo Felipillo",
    avatar: " https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
    email: "marcefe1iÊ9@yahoo.com.es",
};

fetch(URL_API, {
    method: " PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

//UPDATE: update resource by id 
const updatedUser = {
    createdAt: "2023-05-31T00:20:29.394Z",
    name: "Marcelo Felipillo",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
    email: "marcefe1iÊ9@yahoo.com.es",
};

fetch(`${URL_API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

/*********************************************************************** */
// proyecto  a termiinar
const FETCH_TYPES = {
    CREATE: { method: "POST", headers: { "Content-Type": "application/json" }, body: undefined, },
    READ: undefined,
    UPDATE: { method: "PUT", headers: { "Content-Type": "application/json" }, body: undefined, },
    DELETE: { method: "DELETE", }
}
// export 
const MESSAGE_TYPES = Object.freeze({
    ERROR: "Error x",
    WARNING: Symbol(),
    })

async function CRUD(url, method = "", Data) {
    switch (method) {
        case FETCH_TYPES.CREATE: case FETCH_TYPES.UPDATE:
            let ALGOO = { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Data), }
        // prueba.UPDATE.body = JSON.stringify(Data);//-nose si esto anda        
        case FETCH_TYPES.DELETE:
        case FETCH_TYPES.READ:
            break;

        default:
            break;
    }
    let prueba = FETCH_TYPES;
    prueba.UPDATE.body = "algo";//-nose si esto anda
    try {
        // fetch(`${URL_API}/${id}`, ALGOO)
        const auth = await checkAuth() // async operation
        const user = await getUser(auth) // async operation
        return user
    }
    catch (error) {

        return { name: 'Default', error: error }
    }
}

CRUD(URL_API, FETCH_TYPES.CREATE)
    .then(user => console.log(user.name))
    .catch(err => console.log(err))



async function fetchUser() {
    try {
        const auth = await checkAuth() // async operation
        const user = await getUser(auth) // async operation
        renderTable(tbody, data);
        return user
    }
    catch (error) {

        return { name: 'Default', error: error }
    }
}

fetchUser()
    .then(user => console.log(user.name))
    .catch(err => console.log(err))


// type FETCH_TYPESS = "POST" | "GET"; solo funciona en typescript
// https://www.instagram.com/p/CuCifIOtdw0/?igshid=MzRlODBiNWFlZA%3D%3D
async function fetchDatos() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error HTTP: " + response.status);
        }
        const data = await response.json();

    }
    catch (error) {
        console.log("hubo un error")
    }
}

fetchDatos();
