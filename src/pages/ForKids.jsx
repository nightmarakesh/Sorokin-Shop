import { useProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../features/Catalog/CategoryPage.jsx";

const ForKids = () => {
    const {loading, kidsProducts} = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(kidsProducts);

    if(loading) return <div>Загрузка товаров..</div>
    return (
        <CategoryPage
            products={kidsProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
        />

    )
}

export default ForKids