const CategoryCard = (props) => {
    const {
        className = 'category-card',
        category,
        title,
        description = 'Смотреть модели →'
    } = props
  return (
      <a
          className={`${className} ${className}--${category}`}
          href={`/catalog?category=${category}`}
      >
          <div className={`${className}__content`}>
              <h3>{title}</h3>
              <span className={`${className}__link`}>
                  {description}
                </span>
          </div>
      </a>
  )
}

export default CategoryCard;