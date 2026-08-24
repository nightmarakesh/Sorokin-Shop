import {useWomenProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../components/CategoryPage.jsx";

const ForWomen = () => {
    const womenProducts = useWomenProducts()
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(womenProducts);
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