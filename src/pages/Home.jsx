import Header from "../components/Header.jsx";
import HomePage from "../components/HomePage.jsx";
import Footer from "../components/Footer.jsx";

const Home = (props) => {
    const {
        cartCount,
        onAddToCart,
        searchQuery,
        setSearchQuery
    } = props
    return (
        <>
            <Header
                cartCount={cartCount}
                searchQuery = {searchQuery}
                setSearchQuery = {setSearchQuery}
            />
            <HomePage
                onAddToCart={onAddToCart}
            />
            <Footer />
        </>

    )
}

export default Home;