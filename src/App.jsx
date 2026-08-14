import './App.css';
function App() {

  return (
    <>
        <header className="site-header">
            <div className="promo-bar">
                <p>
                    Скидки до 1000р при заказе сегодня!
                </p>
                <button
                    className="promo-bar__close"
                    type="button"
                    aria-label="Закрыть уведомление"
                >
                    ×
                </button>
            </div>

            <div className="header-main">
                <a
                    className="logo"
                    href="/"
                    aria-label="SorokinShop — на главную"
                >
                    <span className="logo__mark">SS</span>
                    <span className="logo__text">SorokinShop</span>
                </a>
                <form className="search-form">
                    <label
                        className="search-form__label"
                        htmlFor="search"
                    >
                            Поиск по каталогу:
                    </label>

                    <input
                        className="search-form__input"
                        id="search"
                        name="search"
                        type="search"
                        placeholder="Поиск..."
                    />

                    <button
                        className="search-form__button"
                        type="submit"
                        aria-label="Найти"
                    >
                        <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="currentColor"
                        >
                            <circle cx="11" cy="11" r="6" />
                            <path d="m16 16 5 5" />
                        </svg>
                    </button>
                </form>
                <div className="header-actions">
                    <button
                        className="header-action"
                        type="button"
                        aria-label="Избранное"
                        >
                        <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="24"
                        >
                            <path d="M20.8 8.6c0 5.5-8.8 10.4-8.8 10.4S3.2 14.1 3.2 8.6A4.6 4.6 0 0 1 12 6.1a4.6 4.6 0 0 1 8.8 2.5Z" />
                        </svg>
                        <span className="header-action__text">
                            Избранное
                        </span>
                    </button>

                    <button
                        className="header-action"
                        type="button"
                        aria-label="Профиль"
                        >
                        <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="24"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21a8 8 0 0 1 16 0" />
                        </svg>

                        <span className="header-action__text">
                            Профиль
                        </span>
                    </button>

                    <button
                        className="header-action header-action--cart"
                        type="button"
                        aria-label="Корзина"
                    >
                        <svg
                            className="icon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            width="24"
                            height="24"
                        >
                            <path d="M3 4h2l2 12h10l3-9H6" />
                            <circle cx="9" cy="20" r="1" />
                            <circle cx="17" cy="20" r="1" />
                        </svg>

                        <span className="header-action__text">
                            Корзина
                        </span>
                        <span className="cart-counter"> 0 </span>

                    </button>
                </div>
            </div>

            <div className="main-nav">
                <nav>
                    <ul className="main-nav__list">
                        <li>
                            <a
                                className="main-nav__link main-nav__link--active"
                                href="/">
                                Главная
                            </a>
                        </li>
                        <li>
                            <a
                                className="main-nav__link"
                                href="/catalog"
                            >
                                Каталог
                            </a>
                        </li>
                        <li>
                            <a
                                className="main-nav__link"
                                href="/catalog?category=men"
                            >
                            Для мужчин жи есть
                            </a>
                        </li>
                        <li>
                            <a
                                className="main-nav__link"
                                href="/catalog?category=woomen"
                            >
                                Для женщин
                            </a>
                        </li>
                        <li>
                            <a
                                className="main-nav__link"
                                href="/catalog?category=new"

                            >
                                Новинки
                            </a>
                        </li>
                        <li>
                            <a
                                className="main-nav__link main-nav__link--sale"
                                href="/catalog?category=sale"
                            >
                                Скидки
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <main className="page-content">
            {/* Hero-блок */}
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

            {/* Категории */}
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
                </div>
            </section>

            {/* Популярные товары */}
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
                </div>
            </section>

            {/* Баннер бренда */}
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

            {/* Преимущества */}
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

                    <article className="benefit-card">
                        <div className="benefit-card__icon">
                            ♥
                        </div>

                        <h3>Помощь с выбором</h3>

                        <p>
                            Наши консультанты помогут подобрать пару.
                        </p>
                    </article>
                </div>
            </section>

            {/* Подписка */}
            <section className="newsletter-section">
                <div className="newsletter-section__content">
                    <p className="newsletter-section__label">
                        Будь в курсе новинок
                    </p>

                    <h2>
                        Получай новости
                        <br />
                        о новых коллекциях
                    </h2>

                    <p>
                        Подпишись на рассылку и получай информацию
                        о новинках и скидках.
                    </p>
                </div>

                <form className="newsletter-form">
                    <label
                        className="newsletter-form__label"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        className="newsletter-form__input"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Твой email"
                    />

                    <button
                        className="newsletter-form__button"
                        type="submit"
                    >
                        Подписаться
                    </button>
                </form>
            </section>
        </main>

        <footer className="site-footer">
            <p>© 2026 SoleSpace. Все права защищены.</p>
        </footer>
    </>
  )
}

export default App
