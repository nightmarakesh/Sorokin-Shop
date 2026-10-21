import { useCart } from "../../context/CartContext.jsx";
import { useProducts } from "../../context/ProductContext.jsx";
import { useOrders } from "../../context/OrderContext.jsx";
import { useUser } from "../../context/UserContext.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Header from "../../components/Header/Header.jsx";
import CartItem from "./CartItem.jsx";
import CartSummary from "./CartSummary.jsx";
import "./Cart.css";

const Cart = () => {
    const { cartItems, onRemoveFromCart, onDecreaseQty, onAddToCart, onClearCart } = useCart();
    const { onCreateOrder } = useOrders();
    const { userData } = useUser();
    const { allProducts, loading } = useProducts();

    if (loading) return <div>Загрузка...</div>;

    const cartProducts = cartItems
        .map((item) => {
            const product = allProducts.find((product) => product.id === item.productId);
            return product ? { ...product, quantity: item.quantity } : null;
        })
        .filter((product) => product !== null);

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
                    <a href="/catalog" className="btn">Перейти в каталог</a>
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
                        <CartItem
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onDecreaseQty={onDecreaseQty}
                            onRemoveFromCart={onRemoveFromCart}
                        />
                    ))}
                </div>
                <CartSummary
                    totalPrice={totalPrice}
                    onCheckout={handleCheckout}
                    onClearCart={onClearCart}
                />
            </main>
            <Footer />
        </>
    );
};

export default Cart;
