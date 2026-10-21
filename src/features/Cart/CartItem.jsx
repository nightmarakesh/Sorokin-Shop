import "./CartItem.css";

const CartItem = ({ product, onAddToCart, onDecreaseQty, onRemoveFromCart }) => {
    return (
        <div className="cart-item">
            <div className="cart-item__info">
                <p className="cart-item__brand">{product.brand}</p>
                <h3 className="cart-item__title">{product.model}</h3>
                <strong className="cart-item__price">{product.price}</strong>
                <div className="cart-item__qty">
                    <button
                        className="cart-item__qty-btn"
                        aria-label="Уменьшить количество"
                        onClick={() => onDecreaseQty(product.id)}
                    >
                        −
                    </button>
                    <span className="cart-item__qty-value">{product.quantity}</span>
                    <button
                        className="cart-item__qty-btn"
                        aria-label="Увеличить количество"
                        onClick={() => onAddToCart(product.id)}
                    >
                        +
                    </button>
                </div>
                <button
                    className="cart-item__remove"
                    onClick={() => onRemoveFromCart(product.id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    );
};

export default CartItem;
