import ProductSection from "./ProductSection.jsx";

const CatalogPage = ({onAddToCart}) => {
    const allProducts =
        [
            { brand: 'Puma', model: 'Air Max Pulse', price: '15 990 ₽', marker: null },
            { brand: 'New Balance', model: 'Forum Low', price: '11 990 ₽', marker: null },
            { brand: 'Adidas', model: '574 Core', price: '13 990 ₽', marker: null },
            { brand: 'Nike', model: 'Suede Classic', price: '9 990 ₽', marker: null },
            { brand: 'Reebok', model: 'Club C 85', price: '10 490 ₽', marker: null },
            { brand: 'Asics', model: 'Gel-Lyte III', price: '14 290 ₽', marker: null },
            { brand: 'Converse', model: 'Chuck Taylor All Star', price: '8 990 ₽', marker: null },
            { brand: 'Vans', model: 'Old Skool', price: '9 490 ₽', marker: null },
            { brand: 'Jordan', model: 'Air Jordan 1 Retro', price: '22 990 ₽', marker: null },
            { brand: 'Fila', model: 'Disruptor II', price: '11 290 ₽', marker: null },
            { brand: 'Saucony', model: 'Shadow 6000', price: '13 490 ₽', marker: null },
            { brand: 'Under Armour', model: 'HOVR Sonic 6', price: '12 790 ₽', marker: null },
            { brand: 'Diadora', model: 'N9000', price: '14 990 ₽', marker: null },
            { brand: 'Lacoste', model: 'L003', price: '16 490 ₽', marker: null },
            { brand: 'Timberland', model: 'Earthkeepers Chukka', price: '17 990 ₽', marker: null },
            { brand: 'Hoka', model: 'Clifton 9', price: '18 490 ₽', marker: null },
            { brand: 'Salomon', model: 'XT-6', price: '19 990 ₽', marker: null },
            { brand: 'Mizuno', model: 'Wave Rider 26', price: '15 290 ₽', marker: null },
            { brand: 'Kappa', model: 'Falcade', price: '10 990 ₽', marker: null },
            { brand: 'Anta', model: 'C1 Pro', price: '12 490 ₽', marker: null }
        ]
    return (
        <main className="page-content">
            <ProductSection
                products={allProducts}
                onAddToCart = {onAddToCart}
                headLabel ={`Всего найдено ${allProducts.length} товаров по вашему зарпосу: `}
            />
        </main>

    )
}
export default CatalogPage