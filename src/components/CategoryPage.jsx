import Header from "../components/Header.jsx";
import ProductsSection from "../components/ProductsSection.jsx";
import Footer from "../components/Footer.jsx";

const CategoryPage = ({products, searchQuery, setSearchQuery, filteredProducts}) => {
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
