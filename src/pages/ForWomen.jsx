import {useProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../features/Catalog/CategoryPage.jsx";

const ForWomen = () => {
    const {loading, womenProducts} = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(womenProducts);

    if(loading) return <div>Загрузка товаров..</div>
    return (
        <CategoryPage
            products={womenProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
        />

    )
}

export default ForWomen