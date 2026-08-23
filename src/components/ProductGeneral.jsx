import Button from "./Button.jsx";
import {useCart} from "../context/CartContext.jsx";

const ProductGeneral = (props) => {
const {
    brand,
    model,
    price,
    id
} = props;
    const {onAddToCart} = useCart()

    return (

        <div className="product-card__content">
            <p className="product-card__brand">
                {brand}
            </p>

            <h3 className="product-card__title">
                {model}
            </h3>

            <div className="product-card__bottom">
                <strong className="product-card__price">
                    {price}
                </strong>
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
            </div>
        </div>
    )
}

export default ProductGeneral;