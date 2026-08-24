import {createContext, useContext} from "react";
import {allProducts, popularProducts, menProducts, womenProducts, kidsProducts, sportProducts} from "../data/ProductsData.js";
const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider
            value={{allProducts, popularProducts, menProducts, womenProducts, kidsProducts, sportProducts}}>
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
export const useMenProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('usePopularProducts must be used within ProductsProvider');
    return context.menProducts;
};

export const useWomenProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('usePopularProducts must be used within ProductsProvider');
    return context.womenProducts;
};

export const useKidsProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('usePopularProducts must be used within ProductsProvider');
    return context.kidsProducts;
};

export const useSportProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('usePopularProducts must be used within ProductsProvider');
    return context.sportProducts;
};
