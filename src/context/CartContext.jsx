import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const onAddToCart = (productId) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === productId);
            if (existing) {
                return prev.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { id: productId, quantity: 1 }];
        });
    };

    const onRemoveFromCart = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const onDecreaseQty = (productId) => {
        setCartItems((prev) =>
            prev.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0) // убираем, если стало 0
        );
    };

    const onClearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{ cartItems, cartCount, onAddToCart, onRemoveFromCart, onDecreaseQty, onClearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};