import Banner from "../Banner/Banner.jsx";
import './HeroSection.css'
const HeroSection = () => {
    return (
        <section className="hero-section">

            <Banner
                className="hero-section"
                title={<>Найди свою <span> идеальную пару</span></>}
                label="Новая коллекция 2026"
                description="Оригинальные кроссовки для спорта, города
                    и повседневного стиля."
                showButton={true}
                buttonText="Перейти в каталог"
                buttonLabel="catalog"
                href="/catalog"
            />

            <div className="hero-section__visual">
                <div className="hero-section__circle">
                    <span>SoleSpace</span>
                </div>

                <div className="hero-section__shoe">
                    👟
                </div>
            </div>
        </section>
    )
}

export default HeroSection;