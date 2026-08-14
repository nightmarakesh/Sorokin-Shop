const PromoBar = () => {
    return (
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
    )
}

export default PromoBar;