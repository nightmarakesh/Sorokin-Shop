import ProductCard from "./ProductCard.jsx";
import {useProducts} from "../context/ProductContext.jsx";
const GridProducts = ({filteredProducts}) => {
    const products= useProducts();
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