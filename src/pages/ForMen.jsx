import {useMenProducts} from "../context/ProductContext.jsx";
import CategoryPage from "../components/CategoryPage.jsx";
import {useSearch} from "../hooks/useSearch.jsx";

const ForMen = () => {
    const menProducts = useMenProducts()
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(menProducts);
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