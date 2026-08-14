import BenefitCard from "./BenefitCard.jsx";

const Benefits = () => {
  return (
      <section className="benefits-section">
          <div className="section-heading section-heading--center">
              <p className="section-heading__label">
                  Почему SoleSpace
              </p>

              <h2 className="section-heading__title">
                  Покупать удобно
              </h2>
          </div>

          <div className="benefits-grid">
              <article className="benefit-card">
                  <div className="benefit-card__icon">
                      ✓
                  </div>

                  <h3>Оригинальная продукция</h3>

                  <p>
                      Только оригинальные модели от известных
                      брендов.
                  </p>
              </article>

              <article className="benefit-card">
                  <div className="benefit-card__icon">
                      →
                  </div>

                  <h3>Быстрая доставка</h3>

                  <p>
                      Доставим заказ в удобное для тебя время.
                  </p>
              </article>

              <article className="benefit-card">
                  <div className="benefit-card__icon">
                      ↺
                  </div>

                  <h3>Лёгкий возврат</h3>

                  <p>
                      Можно вернуть товар, если размер не подошёл.
                  </p>
              </article>
              <BenefitCard/>

          </div>
      </section>
  )
}

export default Benefits;