import ProductSection from "./ProductSection.jsx";
import {useProducts} from "../context/ProductContext.jsx";

const CatalogPage = ({filteredProducts}) => {
    const allProducts = useProducts();
    return (
        <main className="page-content">
            <ProductSection
                filteredProducts = {filteredProducts}
                products = {allProducts}
            />

        </main>

    )
}
export default CatalogPage