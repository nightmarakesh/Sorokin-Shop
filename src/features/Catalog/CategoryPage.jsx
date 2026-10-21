import Header from "../../components/Header/Header.jsx";
import ProductsSection from "./ProductsSection.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './ProductSection.css'

const CategoryPage = ({products, searchQuery, setSearchQuery, filteredProducts}) => {
    console.log(filteredProducts);
    return (
        <>
            <Header
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <main className="page-content">
                <ProductsSection
                    products ={products}
                    filteredProducts = { filteredProducts }
                />
            </main>
            <Footer />

        </>

    )
}

export default CategoryPage;
