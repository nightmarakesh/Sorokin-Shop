const URL ='http://localhost:3001/cart';
const headers = {
    'Content-Type': 'application/json'
}

const cartAPI = {
    getAll : () => {
        return fetch(URL).then((response) => response.json())
    },
    add : (newCartItem) => {
        return fetch(URL, {
            method: 'POST',
            headers ,
            body: JSON.stringify(newCartItem),
        })
            .then((response) => response.json())
    },
    remove : (id) => {
        return fetch(`${URL}/${id}`, {method: 'DELETE'})
    },
    deleteAll: (cartItems) => {
        return Promise.all(cartItems.forEach((item) => cartAPI.remove(item.id)))

    },
    update : (existing, num) => {
        return fetch(`${URL}/${existing.id}`, {
            method: 'PATCH',
            headers ,
            body: JSON.stringify({ quantity: existing.quantity + num}),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }
                return response.json();
            })
    }
}

export default cartAPI;