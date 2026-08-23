import ProductSection from "./ProductSection.jsx";

const CatalogPage = ({filteredProducts}) => {
    return (
        <main className="page-content">
            <ProductSection  filteredProducts = {filteredProducts}/>

        </main>

    )
}
export default CatalogPage