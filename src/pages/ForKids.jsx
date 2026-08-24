import {useKidsProducts} from "../context/ProductContext.jsx";
import {useSearch} from "../hooks/useSearch.jsx";
import CategoryPage from "../components/CategoryPage.jsx";

const ForKids = () => {
    const kidsProducts = useKidsProducts()
    const { searchQuery, setSearchQuery, filteredProducts} = useSearch(kidsProducts);
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