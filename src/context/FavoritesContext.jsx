import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const favoritesCount = favorites.length;

    const onToggleFavorite = (productId) => {
        setFavorites((prev) => {
            if (prev.includes(productId)) {
                return prev.filter((id) => id !== productId);
            }
            return [...prev, productId];
        });
    };

    const onRemoveFavorite = (productId) => {
        setFavorites((prev) => prev.filter((id) => id !== productId));
    };

    const onClearFavorites = () => setFavorites([]);

    const isFavorite = (productId) => favorites.includes(productId);

    return (
        <FavoritesContext.Provider
            value={{ favorites, favoritesCount, onToggleFavorite, onRemoveFavorite, onClearFavorites, isFavorite }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within FavoritesProvider');
    }
    return context;
};
