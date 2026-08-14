const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-section__content">
                <p className="hero-section__label">
                    Новая коллекция 2026
                </p>

                <h1 className="hero-section__title">
                    Найди свою
                    <span> идеальную пару</span>
                </h1>

                <p className="hero-section__description">
                    Оригинальные кроссовки для спорта, города
                    и повседневного стиля.
                </p>

                <a
                    className="hero-section__button"
                    href="/catalog"
                >
                    Перейти в каталог
                </a>
            </div>

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