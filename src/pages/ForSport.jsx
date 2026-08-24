import Header from "../components/Header.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import {useSportProducts, useWomenProducts} from "../context/ProductContext.jsx";
import Footer from "../components/Footer.jsx";
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