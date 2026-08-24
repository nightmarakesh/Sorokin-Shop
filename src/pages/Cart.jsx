import { useCart } from "../context/CartContext.jsx";
import { useProducts } from "../context/ProductContext.jsx";
import { useOrders } from "../context/OrderContext.jsx";
import { useUser } from "../context/UserContext.jsx";
import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

const Cart = () => {
    const { cartItems, onRemoveFromCart, onDecreaseQty, onAddToCart, onClearCart } = useCart();
    const allProducts  = useProducts();
    const { onCreateOrder } = useOrders();
    const { userData } = useUser();

    const cartProducts = cartItems
        .map((item) => {
            const product = allProducts.find((p) => p.id === item.id);
            return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((p) => p !== null);

    const totalPrice = cartProducts.reduce((sum, product) => {
        const priceNum = parseInt(product.price.replace(/[\s₽]/g, ''), 10);
        return sum + priceNum * product.quantity;
    }, 0);

    const handleCheckout = () => {
        if (!userData.name || !userData.phone) {
            alert('Заполните имя и телефон в профиле, чтобы оформить заказ.');
            window.location.href = '/profile';
            return;
        }
        const orderItems = cartProducts.map((p) => ({
            id: p.id,
            brand: p.brand,
            model: p.model,
            price: p.price,
            quantity: p.quantity
        }));
        onCreateOrder(orderItems, totalPrice);
        onClearCart();
        alert('Заказ оформлен! История доступна в профиле.');
        window.location.href = '/profile';
    };

    if (cartProducts.length === 0) {
        return (
            <>
                <Header />
                <main className="page-content">
                    <h2>Корзина пуста</h2>
                    <p>Добавьте товары в корзину, чтобы увидеть их здесь.</p>
                    <Button href="/catalog">Перейти в каталог</Button>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="page-content">
                <h2>Ваша корзина</h2>
                <div className="cart-list">
                    {cartProducts.map((product) => (
                        <div key={product.id} className="cart-item">
                            <div className="cart-item__info">
                                <p className="cart-item__brand">{product.brand}</p>
                                <h3 className="cart-item__title">{product.model}</h3>
                                <strong className="cart-item__price">{product.price}</strong>
                                <div className="cart-item__qty">
                                    <button
                                        className="cart-item__qty-btn"
                                        aria-label="Уменьшить количество"
                                        onClick={() => onDecreaseQty(product.id)}
                                    >−</button>
                                    <span className="cart-item__qty-value">{product.quantity}</span>
                                    <button
                                        className="cart-item__qty-btn"
                                        aria-label="Увеличить количество"
                                        onClick={() => onAddToCart(product.id)}
                                    >+</button>
                                </div>
                                <button
                                    className="cart-item__remove"
                                    onClick={() => onRemoveFromCart(product.id)}
                                >Удалить</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-total">
                    <span>Итого:</span>
                    <strong>{totalPrice.toLocaleString()} ₽</strong>
                </div>
                <div className="cart-actions">
                    <Button className="cart-checkout" type="button" onClick={handleCheckout}>
                        Оформить заказ
                    </Button>
                    <Button className="cart-clear" type="button" onClick={onClearCart}>
                        Очистить корзину
                    </Button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cart;;


