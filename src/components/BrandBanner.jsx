const BrandBanner = () => {
  return(
      <section className="brand-banner">
          <div className="brand-banner__content">
              <p className="brand-banner__label">
                  SoleSpace selection
              </p>

              <h2 className="brand-banner__title">
                  Стиль начинается
                  <br />
                  с правильной пары
              </h2>

              <p className="brand-banner__description">
                  Подбери кроссовки, которые подчеркнут
                  твой образ.
              </p>

              <a
                  className="brand-banner__button"
                  href="/catalog"
              >
                  Подобрать кроссовки
              </a>
          </div>

          <div className="brand-banner__visual">
              <span>SS</span>
          </div>
      </section>
  )
}

export default BrandBanner;