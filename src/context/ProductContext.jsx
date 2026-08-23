import {createContext, useContext} from "react";
import {allProducts, popularProducts} from "../data/ProductsData.js";
const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider
            value={{allProducts, popularProducts}}>
            {children}
        </ProductsContext.Provider>
    );
};
export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('useProducts must be used within ProductsProvider');
    return context.allProducts;
};

export const usePopularProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('usePopularProducts must be used within ProductsProvider');
    return context.popularProducts;
};
