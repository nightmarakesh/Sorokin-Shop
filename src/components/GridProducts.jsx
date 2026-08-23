import ProductCard from "./ProductCard.jsx";
const GridProducts = ({filteredProducts, products}) => {
    return (
        <div className="products-grid">
            {(filteredProducts ?? products).map((product) => (
                <ProductCard
                    key={product.id}
                    brand = {product.brand}
                    model= {product.model}
                    price = {product.price}
                    marker = {product.marker}
                    id={product.id}
                />
            ))}
        </div>
    )
}

export default GridProducts;