import Header from "../components/Header.jsx";
import HomePage from "../components/HomePage.jsx";
import Footer from "../components/Footer.jsx";

const Home = (props) => {
    const {
        cartCount,
        onAddToCart
    } = props
    return (
        <>
            <Header
                cartCount={cartCount}
            />
            <HomePage
                onAddToCart={onAddToCart}
            />
            <Footer />
        </>

    )
}

export default Home;