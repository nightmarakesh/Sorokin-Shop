const URL  = 'http://localhost:3001/products'
const headers = {
    'Content-Type': 'application/json'
}
const productsAPI = {
    getAll : () => {
        return fetch(URL).then((response) => response.json())
    },
    getById: (id) => {
        return fetch(`${URL}/${id}`).then((response) => response.json())
    }
}
export default productsAPI