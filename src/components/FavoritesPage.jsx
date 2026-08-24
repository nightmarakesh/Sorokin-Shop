import ProductsSection from "./ProductsSection.jsx";
import {useFavorites} from "../context/FavoritesContext.jsx";
import {useProducts} from "../context/ProductContext.jsx";

const FavoritesPage = () => {
   const {favorites, isFavorite} = useFavorites()
    const allProducts = useProducts()
    const favoritesProducts = favorites
        .map((item) => {
            const product = allProducts.find((product) => product.id === item);
            return product ? { ...product, isFavorite: isFavorite(item) } : null;
        })
        .filter((product) => product !== null);
    return (
        <ProductsSection
            products = {favoritesProducts}
            headTitle = "Избранное"
        />
    )
}

export default FavoritesPage;