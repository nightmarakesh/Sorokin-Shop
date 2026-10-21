import Button from "../../components/Button/Button.jsx";
import "./CartSummary.css";

const CartSummary = ({ totalPrice, onCheckout, onClearCart }) => {
    return (
        <>
            <div className="cart-total">
                <span>Итого:</span>
                <strong>{totalPrice.toLocaleString()} ₽</strong>
            </div>
            <div className="cart-actions">
                <Button className="cart-checkout" type="button" onClick={onCheckout}>
                    Оформить заказ
                </Button>
                <Button className="cart-clear" type="button" onClick={onClearCart}>
                    Очистить корзину
                </Button>
            </div>
        </>
    );
};

export default CartSummary;
