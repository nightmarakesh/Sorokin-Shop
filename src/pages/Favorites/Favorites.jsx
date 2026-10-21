import { useProducts } from "../../context/ProductContext.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";
import SectionHead from "../../features/Catalog/SectionHead.jsx";
import ProductsSection from "../../features/Catalog/ProductsSection.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import './Favorites.css'

const Favorites = () => {
    const { favorites, isFavorite } = useFavorites();
    const { allProducts, loading } = useProducts();

    if (loading) return <div className="loading-state">Загрузка...</div>;

    const favoritesProducts = favorites
        .map((item) => {
            const product = allProducts.find((p) => p.id === item);
            return product ? { ...product, isFavorite: isFavorite(item) } : null;
        })
        .filter((p) => p !== null);

    return (
        <>
            <Header />
            <main className="page-content">
                {favoritesProducts.length === 0 ? (
                    <div className="favorites-empty">
                        <h2>Избранное</h2>
                        <p>Пока здесь ничего нет. Добавьте товары в избранное, чтобы они появились тут.</p>
                        <a href="/catalog" className="button button--black">Перейти в каталог</a>
                    </div>
                ) : (
                    <>
                        <SectionHead
                            title="Избранное"
                            label="Ваши любимые товары"
                            href="/catalog"
                            children="Смотреть все"
                        />
                        <ProductsSection
                            products={favoritesProducts}
                        />
                    </>
                )}
            </main>
            <Footer />
        </>
    );
};

export default Favorites;

