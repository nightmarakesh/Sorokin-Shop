import ProductCard from "./ProductCard.jsx";

const ProductsSection = () => {
  return (
      <section className="products-section">
          <div className="section-heading">
              <div>
                  <p className="section-heading__label">
                      Выбор покупателей
                  </p>

                  <h2 className="section-heading__title">
                      Популярные модели
                  </h2>
              </div>

              <a
                  className="section-heading__link"
                  href="/catalog"
              >
                  Весь каталог
              </a>
          </div>

          <div className="products-grid">
              <article className="product-card">
                  <div className="product-card__image">
                <span className="product-card__badge">
                  Новинка
                </span>

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
                          Nike
                      </p>

                      <h3 className="product-card__title">
                          Air Max Pulse
                      </h3>

                      <div className="product-card__bottom">
                          <strong className="product-card__price">
                              15 990 ₽
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
                          Adidas
                      </p>

                      <h3 className="product-card__title">
                          Forum Low
                      </h3>

                      <div className="product-card__bottom">
                          <strong className="product-card__price">
                              11 990 ₽
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

              <article className="product-card">
                  <div className="product-card__image">
                <span className="product-card__badge">
                  Хит
                </span>

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
                          New Balance
                      </p>

                      <h3 className="product-card__title">
                          574 Core
                      </h3>

                      <div className="product-card__bottom">
                          <strong className="product-card__price">
                              13 990 ₽
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
              <ProductCard />
          </div>
      </section>
  )
}

export default ProductsSection