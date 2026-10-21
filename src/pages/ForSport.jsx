import {useProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../features/Catalog/CategoryPage.jsx";

const ForSport = () => {
    const {loading, sportProducts} = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(sportProducts);

    if(loading) return <div>Загрузка товаров..</div>
    return (
        <CategoryPage
            products={sportProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
        />

    )
}

export default ForSport