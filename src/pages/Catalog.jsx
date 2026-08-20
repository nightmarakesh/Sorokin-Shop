import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import CatalogPage from "../components/CatalogPage.jsx";

const Catalog = (props) => {
    const {
        cartCount,
        onAddToCart
    } = props

    return (
        <>
            <Header
                cartCount={cartCount}
            />
            <CatalogPage
                onAddToCart={onAddToCart}
            />
            <Footer />
        </>
    )
}

export default Catalog;