import Button from "../../../components/Button/Button.jsx";
import {useCart} from "../../../context/CartContext.jsx";
import RouterLink from "../../../components/RouterLink.jsx";
import './ProductGeneral.css'
const ProductGeneral = (props) => {
const {
    brand,
    model,
    price,
    id
} = props;
    const { cartItems, onAddToCart, onDecreaseQty } = useCart();

    const cartItem = cartItems.find((item) => item.productId === id);
    const quantity = cartItem?.quantity ?? 0;

    return (

        <div className="product-card__content">
                <RouterLink to={`/catalog/${id}`} aria-label = "Details of cardproduct">
                    <p className="product-card__brand">
                        {brand}
                    </p>

                    <h3 className="product-card__title">
                        {model}
                    </h3>
                </RouterLink>
            <div className="product-card__bottom">
                <strong className="product-card__price">
                    {price}
                </strong>
                {quantity === 0 ? (
                    <Button
                        className="product-card"
                        type="button"
                        aria_label="Добавить товар в корзину"
                        onClick={() => {
                            onAddToCart(id)
                        }
                        }
                    >
                       +
                    </Button>
                )
                :
                    (
                        <div className="product-card__qty">
                            <button
                                className="product-card__qty-btn"
                                type="button"
                                aria-label="Уменьшить количество"
                                onClick={() => onDecreaseQty(id)}
                            >
                                −
                            </button>
                            <span className="product-card__qty-value">
                            {quantity}
                             </span>
                            <button
                                className="product-card__qty-btn"
                                type="button"
                                aria-label="Увеличить количество"
                                onClick={() => onAddToCart(id)}
                            >
                                +
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default ProductGeneral;