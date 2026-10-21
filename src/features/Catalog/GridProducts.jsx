import ProductCard from "../Products/Card/ProductCard.jsx";
import './ProductSection.css'

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
                    href = {product.href}
                    id={product.id}
                />
            ))}
        </div>
    )
}

export default GridProducts;