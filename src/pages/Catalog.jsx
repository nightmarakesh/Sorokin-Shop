import {useProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../features/Catalog/CategoryPage.jsx";
const Catalog = () => {
    const {allProducts , loading}  = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(allProducts);
    if (loading) return <div>Загрузка...</div>;
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