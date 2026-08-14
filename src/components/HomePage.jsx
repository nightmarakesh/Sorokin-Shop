import Newsletter from "./Newsletter.jsx";
import Benefits from "./Benefits.jsx";
import BrandBanner from "./BrandBanner.jsx";
import ProductSection from "./ProductSection.jsx";
import CategorySection from "./CategorySection.jsx";
import HeroSection from "./HeroSection.jsx";

const HomePage = () => {
    return (
        <main className="page-content">
            {/* Hero-блок */}
            <HeroSection />

            {/* Категории */}
            <CategorySection />

            {/* Популярные товары */}
            <ProductSection/>

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
