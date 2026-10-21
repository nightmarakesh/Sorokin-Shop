import { useOrders } from "../../context/OrderContext.jsx";
import './OrderHistory.css'
const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};

const OrderHistory = ({ onClearOrders }) => {
    const { orders } = useOrders();

    if (!orders || orders.length === 0) {
        return <p className="profile-empty">У вас пока нет заказов.</p>;
    }

    return (
        <>
            <div className="profile-section__head">
                <h3>История заказов</h3>
                <button
                    className="profile-edit-btn"
                    onClick={onClearOrders}
                >
                    Очистить историю
                </button>
            </div>

            <div className="orders-list">
                {orders.map((order) => (
                    <div key={order.id} className="order-card">
                        <div className="order-card__head">
                            <span className="order-card__id">Заказ #{order.id.slice(-6)}</span>
                            <span className="order-card__date">{formatDate(order.date)}</span>
                            <strong className="order-card__total">{order.total.toLocaleString()} ₽</strong>
                        </div>
                        <div className="order-card__items">
                            {order.items.map((item) => (
                                <div key={item.id} className="order-item">
                                    <span>{item.brand} {item.model}</span>
                                    <span className="order-item__qty">×{item.quantity}</span>
                                    <span>{item.price}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default OrderHistory;
