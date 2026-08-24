import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext(null);

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        const saved = localStorage.getItem('orders');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    const onCreateOrder = (items, totalPrice) => {
        const order = {
            id: `order-${Date.now()}`,
            date: new Date().toISOString(),
            items: items,
            total: totalPrice
        };
        setOrders((prev) => [order, ...prev]);
        return order.id;
    };

    const onClearOrders = () => setOrders([]);

    return (
        <OrderContext.Provider value={{ orders, onCreateOrder, onClearOrders }}>
            {children}
        </OrderContext.Provider>
    );
};

export const useOrders = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrders must be used within OrderProvider');
    }
    return context;
};