import {useProducts} from "../context/ProductContext.jsx";
import {useFavorites} from "../context/FavoritesContext.jsx";
import CategoryPage from "../components/CategoryPage.jsx";

const Favorites = () => {
    const {favorites, isFavorite} = useFavorites()
    const allProducts = useProducts()
    const favoritesProducts = favorites
        .map((item) => {
            const product = allProducts.find((product) => product.id === item);
            return product ? { ...product, isFavorite: isFavorite(item) } : null;
        })
        .filter((product) => product !== null);
    return (
        <CategoryPage
            products={favoritesProducts}
        />
    )
}

export default Favorites;