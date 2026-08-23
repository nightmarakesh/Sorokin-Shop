import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cartItems');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const cartCount = cartItems.length;

    const onAddToCart = (productId) => {
        setCartItems((prev) => [...prev, productId]);
    };

    const onRemoveFromCart = (productId) => {
        setCartItems((prev) => prev.filter((id) => id !== productId));
    };

    return (
        <CartContext.Provider value={{ cartItems, cartCount, onAddToCart, onRemoveFromCart }}>
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