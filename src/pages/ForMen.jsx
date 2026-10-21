import { useProducts} from "../context/ProductContext.jsx";
import CategoryPage from "../features/Catalog/CategoryPage.jsx";
import { useSearch } from "../hooks/useSearch.jsx";

const ForMen = () => {
    const {loading, menProducts} = useProducts();
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(menProducts);
    if(loading) return <div>Загрузка товаров..</div>
    return (
        <CategoryPage
            products={menProducts}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filteredProducts={filteredProducts}
        />

    )
}

export default ForMen