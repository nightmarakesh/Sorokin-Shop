const CategoryCard = () => {
  return (
      <a
          className="category-card category-card--sport"
          href="/catalog?category=sport"
      >
          <div className="category-card__content">
                <span className="category-card__number">
                  03
                </span>

              <h3>Для спорта</h3>

              <span className="category-card__link">
                  Смотреть модели →
                </span>
          </div>
      </a>
  )
}

export default CategoryCard;