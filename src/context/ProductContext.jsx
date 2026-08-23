import {createContext, useContext} from "react";
import {allProducts} from "../data/ProductsData.js";
const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {
    return (
        <ProductsContext.Provider value={allProducts}>
            {children}
        </ProductsContext.Provider>
    );
};
export const useProducts = () => {
    const products = useContext(ProductsContext);
    if (!products) {
        throw new Error('useProducts must be used within ProductsProvider');
    }
    return products;
};
