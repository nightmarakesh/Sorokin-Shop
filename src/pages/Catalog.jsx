import {useProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../components/CategoryPage.jsx";
const Catalog = () => {
    const allProducts = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(allProducts);

    return (
        <CategoryPage
            products = {allProducts}
            searchQuery = {searchQuery}
            setSearchQuery = {setSearchQuery}
            filteredProducts={filteredProducts}

        />
    )

}

export default Catalog;