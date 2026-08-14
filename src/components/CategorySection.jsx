import CategoryCard from "./CategoryCard.jsx";

const CategorySection = ()=> {
    return (
        <section className="categories-section">
            <div className="section-heading">
                <div>
                    <p className="section-heading__label">
                        Выбери направление
                    </p>

                    <h2 className="section-heading__title">
                        Категории
                    </h2>
                </div>

                <a
                    className="section-heading__link"
                    href="/catalog"
                >
                    Смотреть все
                </a>
            </div>

            <div className="categories-grid">
                <a
                    className="category-card category-card--men"
                    href="/catalog?category=men"
                >
                    <div className="category-card__content">
                <span className="category-card__number">
                  01
                </span>

                        <h3>Мужские</h3>

                        <span className="category-card__link">
                  Смотреть модели →
                </span>
                    </div>
                </a>

                <a
                    className="category-card category-card--women"
                    href="/catalog?category=women"
                >
                    <div className="category-card__content">
                            <span className="category-card__number">
                              02
                            </span>

                        <h3>Женские</h3>

                        <span className="category-card__link">
                              Смотреть модели →
                            </span>
                    </div>
                </a>

                <CategoryCard />
            </div>
        </section>
    )
}

export default CategorySection;