import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CatalogPage from "../components/CatalogPage.jsx";
import {useState} from "react";
import {useProducts} from "../context/ProductContext.jsx";
const Catalog = () => {
    const allProducts = useProducts();
    const [searchQuery, setSearchQuery] = useState("");
    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filteredProducts =  clearSearchQuery.length > 0
        ? allProducts.filter((product) => {
            const searchText = `${product.brand} ${product.model}`;
        return searchText.toLowerCase().includes(clearSearchQuery);
    }) : null;

    return (
        <>
            <Header
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}
            />
            <CatalogPage
                filteredProducts = {filteredProducts}
            />
            <Footer />
        </>
    )

}

export default Catalog;