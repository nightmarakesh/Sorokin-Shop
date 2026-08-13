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
                    className="promo-block__close"
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
                    <span className="logo__mark">S</span>
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
            <section className="placeholder-section">
                <h1>Главная страница магазина</h1>
                <p>
                    Здесь позже появятся баннер, категории и популярные
                    модели кроссовок.
                </p>
            </section>
        </main>
    </>
  )
}

export default App
