const ProductCard = () => {
  return (
      <article className="product-card">
          <div className="product-card__image">
              <button
                  className="product-card__favorite"
                  type="button"
                  aria-label="Добавить в избранное"
              >
                  ♡
              </button>

              <div className="product-card__placeholder">
                  👟
              </div>
          </div>

          <div className="product-card__content">
              <p className="product-card__brand">
                  Puma
              </p>

              <h3 className="product-card__title">
                  Suede Classic
              </h3>

              <div className="product-card__bottom">
                  <strong className="product-card__price">
                      9 990 ₽
                  </strong>

                  <button
                      className="product-card__button"
                      type="button"
                      aria-label="Добавить товар в корзину"
                  >
                      +
                  </button>
              </div>
          </div>
      </article>
  )
}

export default ProductCard;