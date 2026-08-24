
const rawProducts = [
    { brand: 'Puma', model: 'Air Max Pulse', price: '15 990 ₽', marker: 'Новинка', category: 'sport', href: '/assets/sneakers/product-0.jpg' },
    { brand: 'New Balance', model: 'Forum Low', price: '11 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-1.jpg' },
    { brand: 'Adidas', model: '574 Core', price: '13 990 ₽', marker: 'Хит', category: 'women', href: '/assets/sneakers/product-2.jpg' },
    { brand: 'Nike', model: 'Suede Classic', price: '9 990 ₽', marker: 'Распродажа', category: 'kids', href: '/assets/sneakers/product-3.jpg' },
    { brand: 'Reebok', model: 'Club C 85', price: '10 490 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-4.jpg' },
    { brand: 'Asics', model: 'Gel-Lyte III', price: '14 290 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-5.jpg' },
    { brand: 'Converse', model: 'Chuck Taylor All Star', price: '8 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-6.jpg' },
    { brand: 'Vans', model: 'Old Skool', price: '9 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-7.jpg' },
    { brand: 'Jordan', model: 'Air Jordan 1 Retro', price: '22 990 ₽', marker: 'Хит', category: 'man', href: '/assets/sneakers/product-8.jpg' },
    { brand: 'Fila', model: 'Disruptor II', price: '11 290 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-9.jpg' },
    { brand: 'Saucony', model: 'Shadow 6000', price: '13 490 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-10.jpg' },
    { brand: 'Under Armour', model: 'HOVR Sonic 6', price: '12 790 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-11.jpg' },
    { brand: 'Diadora', model: 'N9000', price: '14 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-12.jpg' },
    { brand: 'Lacoste', model: 'L003', price: '16 490 ₽', marker: 'Новинка', category: 'women', href: '/assets/sneakers/product-13.jpg' },
    { brand: 'Timberland', model: 'Earthkeepers Chukka', price: '17 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-14.jpg' },
    { brand: 'Hoka', model: 'Clifton 9', price: '18 490 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-15.jpg' },
    { brand: 'Salomon', model: 'XT-6', price: '19 990 ₽', marker: 'Хит', category: 'sport', href: '/assets/sneakers/product-16.jpg' },
    { brand: 'Mizuno', model: 'Wave Rider 26', price: '15 290 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-17.jpg' },
    { brand: 'Kappa', model: 'Falcade', price: '10 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-18.jpg' },
    { brand: 'Anta', model: 'C1 Pro', price: '12 490 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-19.jpg' },
    { brand: 'Nike', model: 'Air Force 1 Low', price: '12 990 ₽', marker: 'Хит', category: 'man', href: '/assets/sneakers/product-20.jpg' },
    { brand: 'Adidas', model: 'Ultraboost 22', price: '18 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-21.jpg' },
    { brand: 'Puma', model: 'Suede XL', price: '8 490 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-22.jpg' },
    { brand: 'New Balance', model: '990v6', price: '24 990 ₽', marker: 'Новинка', category: 'man', href: '/assets/sneakers/product-23.jpg' },
    { brand: 'Reebok', model: 'Classic Leather', price: '7 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-24.jpg' },
    { brand: 'Asics', model: 'GT-2000 12', price: '13 490 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-25.jpg' },
    { brand: 'Vans', model: 'Sk8-Hi', price: '8 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-26.jpg' },
    { brand: 'Converse', model: 'One Star', price: '7 490 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-27.jpg' },
    { brand: 'Jordan', model: 'Air Jordan 4 Retro', price: '26 990 ₽', marker: 'Хит', category: 'man', href: '/assets/sneakers/product-28.jpg' },
    { brand: 'Skechers', model: 'D Lites 3', price: '6 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-29.jpg' },
    { brand: 'Tommy Hilfiger', model: 'Cupsole', price: '9 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-30.jpg' },
    { brand: 'Dr. Martens', model: '1460 Bex', price: '19 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-31.jpg' },
    { brand: 'CAT', model: 'Colorado', price: '8 490 ₽', marker: 'Распродажа', category: 'man', href: '/assets/sneakers/product-32.jpg' },
    { brand: 'Geox', model: 'Spherica', price: '14 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-33.jpg' },
    { brand: 'ECCO', model: 'Soft 7', price: '16 990 ₽', marker: null, category: 'man', href: '/assets/sneakers/product-34.jpg' },
    { brand: 'Nike', model: 'Air Max 270', price: '14 990 ₽', marker: 'Хит', category: 'women', href: '/assets/sneakers/product-35.jpg' },
    { brand: 'Adidas', model: 'Stan Smith', price: '9 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-36.jpg' },
    { brand: 'Puma', model: 'Carina', price: '6 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-37.jpg' },
    { brand: 'New Balance', model: '327', price: '11 990 ₽', marker: 'Новинка', category: 'women', href: '/assets/sneakers/product-38.jpg' },
    { brand: 'Reebok', model: 'Nano X4', price: '12 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-39.jpg' },
    { brand: 'Asics', model: 'Gel-Kayano 30', price: '16 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-40.jpg' },
    { brand: 'Vans', model: 'Authentic', price: '6 490 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-41.jpg' },
    { brand: 'Converse', model: 'Run Star Hike', price: '10 990 ₽', marker: 'Хит', category: 'women', href: '/assets/sneakers/product-42.jpg' },
    { brand: 'Skechers', model: 'GOrun Ride', price: '8 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-43.jpg' },
    { brand: 'Steve Madden', model: 'Golden', price: '11 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-44.jpg' },
    { brand: 'Tommy Hilfiger', model: 'Cupsole Metal', price: '10 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-45.jpg' },
    { brand: 'Guess', model: 'Athleisure', price: '9 490 ₽', marker: 'Распродажа', category: 'women', href: '/assets/sneakers/product-46.jpg' },
    { brand: 'Calvin Klein', model: 'C-K Classic', price: '12 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-47.jpg' },
    { brand: 'Superga', model: 'Cotu Classic', price: '5 990 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-48.jpg' },
    { brand: 'Keds', model: 'Champion', price: '5 490 ₽', marker: null, category: 'women', href: '/assets/sneakers/product-49.jpg' },
    { brand: 'Nike', model: 'Pegasus 41', price: '15 990 ₽', marker: 'Новинка', category: 'sport', href: '/assets/sneakers/product-50.jpg' },
    { brand: 'Adidas', model: 'Adizero Adios Pro 3', price: '29 990 ₽', marker: 'Хит', category: 'sport', href: '/assets/sneakers/product-51.jpg' },
    { brand: 'Asics', model: 'Magic Speed 3', price: '14 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-52.jpg' },
    { brand: 'Hoka', model: 'Mach 6', price: '17 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-53.jpg' },
    { brand: 'Brooks', model: 'Ghost 16', price: '15 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-54.jpg' },
    { brand: 'Saucony', model: 'Endorphin Pro 4', price: '21 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-55.jpg' },
    { brand: 'Mizuno', model: 'Neo Vista', price: '18 990 ₽', marker: 'Новинка', category: 'sport', href: '/assets/sneakers/product-56.jpg' },
    { brand: 'On Running', model: 'Cloudboom Echo 3', price: '27 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-57.jpg' },
    { brand: 'New Balance', model: 'FuelCell SC Elite v4', price: '23 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-58.jpg' },
    { brand: 'Puma', model: 'Fast-Trac Nitro', price: '13 990 ₽', marker: 'Распродажа', category: 'sport', href: '/assets/sneakers/product-59.jpg' },
    { brand: 'Reebok', model: 'Floatzig 1', price: '9 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-60.jpg' },
    { brand: 'Under Armour', model: 'HOVR Phantom 3', price: '16 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-61.jpg' },
    { brand: 'Salomon', model: 'Speedcross 6', price: '16 990 ₽', marker: 'Хит', category: 'sport', href: '/assets/sneakers/product-62.jpg' },
    { brand: 'Inov-8', model: 'Trailfly G 390', price: '19 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-63.jpg' },
    { brand: 'Karhu', model: 'Ikoni 14', price: '17 990 ₽', marker: null, category: 'sport', href: '/assets/sneakers/product-64.jpg' },
    { brand: 'Nike', model: 'Air Max 90 PS', price: '8 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-65.jpg' },
    { brand: 'Adidas', model: 'Samba Youth', price: '6 990 ₽', marker: 'Хит', category: 'kids', href: '/assets/sneakers/product-66.jpg' },
    { brand: 'Puma', model: 'Smash V2 Kids', price: '4 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-67.jpg' },
    { brand: 'New Balance', model: '2002R Kids', price: '9 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-68.jpg' },
    { brand: 'Reebok', model: 'Nano Flex Kids', price: '5 990 ₽', marker: 'Распродажа', category: 'kids', href: '/assets/sneakers/product-69.jpg' },
    { brand: 'Asics', model: 'Contend 9 GS', price: '5 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-70.jpg' },
    { brand: 'Vans', model: 'Old Skool Kids', price: '5 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-71.jpg' },
    { brand: 'Converse', model: 'Chuck 70 Kids', price: '6 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-72.jpg' },
    { brand: 'Skechers', model: 'GOrun Kids', price: '4 990 ₽', marker: 'Новинка', category: 'kids', href: '/assets/sneakers/product-73.jpg' },
    { brand: 'Kappa', model: 'Junior Runner', price: '4 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-74.jpg' },
    { brand: 'Geox', model: 'Spherica Kids', price: '7 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-75.jpg' },
    { brand: 'Fila', model: 'Disruptor Kids', price: '5 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-76.jpg' },
    { brand: 'Anta', model: 'Kids Pro', price: '6 490 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-77.jpg' },
    { brand: 'Li-Ning', model: 'Kids Run', price: '5 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-78.jpg' },
    { brand: 'Saucony', model: 'Cohesion Kids', price: '4 990 ₽', marker: null, category: 'kids', href: '/assets/sneakers/product-79.jpg' }
];


export const allProducts = rawProducts.map((product, index) => ({
    ...product,
    id: `product-${index}`
}));

export const popularProducts = allProducts.slice(0,4);
export const menProducts = allProducts.filter((product) => (
    product.category === 'man'));
export const womenProducts = allProducts.filter((product) => (
    product.category === 'women'));
export const kidsProducts = allProducts.filter((product) => (
    product.category === 'kids'));
export const sportProducts = allProducts.filter((product) => (
    product.category === 'sport'));