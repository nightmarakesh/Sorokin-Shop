import Newsletter from "./Newsletter.jsx";
import Benefits from "./Benefits.jsx";
import BrandBanner from "./BrandBanner.jsx";
import ProductSection from "./ProductSection.jsx";
import CategorySection from "./CategorySection.jsx";
import HeroSection from "./HeroSection.jsx";

const HomePage = ({onAddToCart}) => {

    const popularProducts = [ {brand : 'Puma', model : 'Air Max Pulse', price : '15 990 ₽', marker : 'Новинка'},
    {brand : 'New Balance', model : 'Forum Low', price : '11 990 ₽', marker : null},
    {brand : 'Adidas', model : '574 Core', price : '13 990 ₽', marker : 'Хит'},
    {brand : 'Nike', model : 'Suede Classic', price : '9 990 ₽', marker : null}]
    return (
        <main className="page-content">
            {/* Hero-блок */}
            <HeroSection />

            {/* Категории */}
            <CategorySection />

            {/* Популярные товары */}
            <ProductSection
                onAddToCart={onAddToCart}
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
