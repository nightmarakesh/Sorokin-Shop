import Newsletter from "./Newsletter/Newsletter.jsx";
import Benefits from "./Benifits/Benefits.jsx";
import BrandBanner from "./Banner/BrandBanner.jsx";
import ProductSection from "../Catalog/ProductsSection.jsx";
import CategorySection from "./Category/CategorySection.jsx";
import HeroSection from "./Hero/HeroSection.jsx";
import { useProducts} from "../../context/ProductContext.jsx";
const Home = () => {
    const {loading, popularProducts} = useProducts();
    if(loading) return <div>Загрузка...</div>;
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

export default Home;
