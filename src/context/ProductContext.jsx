import {createContext, useContext, useEffect, useState} from "react";
import productsAPI from "../api/productsAPI.js";
const ProductsContext = createContext(null);
export const ProductsProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        productsAPI.getAll()
            .then((data) => {
                setAllProducts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Ошибка загрузки товаров:', err);
                setLoading(false);
            });
    }, []);

    const popularProducts = allProducts.slice(0, 4);
    const menProducts = allProducts.filter((product) => product.category === 'man');
    const womenProducts = allProducts.filter((product) => product.category === 'women');
    const kidsProducts = allProducts.filter((product) => product.category === 'kids');
    const sportProducts = allProducts.filter((product) => product.category === 'sport');

    return (
        <ProductsContext.Provider
            value={
                {
                    allProducts,
                    popularProducts,
                    menProducts,
                    womenProducts,
                    kidsProducts,
                    sportProducts,
                    loading
                }
            }
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) throw new Error('useProducts must be used within ProductsProvider');
    return context;
};


