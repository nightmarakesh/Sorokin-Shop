import ProductCard from "./ProductCard.jsx";
const GridProducts = (props) => {
    const {
        products=[]
        } = props;
    return (
        <div className="products-grid">
            {products.map(({brand,model,price,marker}) => (
                <ProductCard
                    key={`${brand}-${model}`}
                    brand = {brand}
                    model= {model}
                    price = {price}
                    marker = {marker}
                />
            ))}
        </div>
    )
}

export default GridProducts;