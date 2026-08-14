import ActionsElement from "./ActionsElement.jsx";

const ActionsSection = () => {
    return (
        <div className="header-actions">
            <ActionsElement />

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
    )
}

export default ActionsSection;