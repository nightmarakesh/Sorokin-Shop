import {useSportProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../components/CategoryPage.jsx";

const ForSport = () => {
    const sportProducts = useSportProducts()
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(sportProducts);
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