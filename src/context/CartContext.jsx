import { createContext, useContext, useState, useEffect } from "react";
import cartAPI from "../api/cartAPI.js";
const CartContext = createContext(null);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       cartAPI.getAll()
            .then((data) => {
                setCartItems(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Ошибка загрузки корзины:', err);
                setLoading(false);
            });
    }, []);

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const onAddToCart = (productId) => {
        const existing = cartItems.find((item) => item.productId === productId);

        if (existing) {
                cartAPI.update(existing,1)
                .then((updatedItem) => {
                    setCartItems((prev) =>
                        prev.map((item) => (item.id === existing.id ? updatedItem : item))
                    );
                });
        } else {

            const newCartItem = {
                productId: productId,
                quantity: 1
            };

            cartAPI.add(newCartItem)
                .then((addedItem) => {
                    setCartItems((prev) => [...prev, addedItem]);
                });
        }
    };

    const onRemoveFromCart = (productId) => {
        // Находим запись в корзине по productId
        const item = cartItems.find((item) => item.productId === productId);
        if (!item) return;

        // Удаляем по внутреннему id записи
        cartAPI.remove(item.id)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка удаления: ${response.status}`);
                }
                return response.json();
            })
            .then(() => {
                setCartItems((prev) => prev.filter((i) => i.id !== item.id));
            })
            .catch((err) => {
                console.error('Не удалось удалить товар:', err);
            });
    };

    const onDecreaseQty = (productId) => {
        const existing = cartItems.find((item) => item.productId === productId);
        if (!existing) return;

        if (existing.quantity === 1) {
            onRemoveFromCart(productId);
            return;
        }

        cartAPI.update(existing,-1)
            .then((updatedItem) => {
                setCartItems((prev) =>
                    prev.map((item) => (item.id === existing.id ? updatedItem : item))
                );
            });
    };

    const onClearCart = async () => {
        await cartAPI.deleteAll(cartItems)
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                cartCount,
                loading,
                onAddToCart,
                onRemoveFromCart,
                onDecreaseQty,
                onClearCart,
            }}
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