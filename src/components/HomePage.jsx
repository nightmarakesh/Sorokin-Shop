import Newsletter from "./Newsletter.jsx";
import Benefits from "./Benefits.jsx";
import BrandBanner from "./BrandBanner.jsx";
import ProductSection from "./ProductsSection.jsx";
import CategorySection from "./CategorySection.jsx";
import HeroSection from "./HeroSection.jsx";
import {usePopularProducts} from "../context/ProductContext.jsx";

const HomePage = () => {
    const popularProducts = usePopularProducts();
    return (
        <main className="page-content">
            {/* Hero-блок */}
            <HeroSection />

            {/* Категории */}
            <CategorySection />

            {/* Популярные товары */}
            <ProductSection
                products={popularProducts}
                headTitle ={"Популярные модели"}
                headLabel ={"Выбор покупателей"}
                hrefHead="/catalog"
                textButHead="Весь каталог"
            />

            {/* Баннер бренда */}
            <BrandBanner/>

            {/* Преимущества */}
            <Benefits />

            {/* Подписка */}
            <Newsletter />
        </main>
    )
}

export default HomePage;
