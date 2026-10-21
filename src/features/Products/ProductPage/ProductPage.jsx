import {useEffect, useState} from "react";
import productsAPI from "../../../api/productsAPI.js";
import './ProductPage.css'

const ProductPage = ({params}) => {
   const productId = params.id;
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    useEffect(() => {
        productsAPI.getById(productId)
            .then((product) => {
            setProduct(product);
            setHasError(false);
        })
            .catch(() =>
            setHasError(true)
            )
            .finally(() => setIsLoading(false));
    },[productId]);
    if(isLoading){
        return <div>Loading...</div>
    }
    if(hasError){
        return <div>Ошибка при загрузке данных</div>
    }
    return (
        <div>
            <h1>{`${product.brand} ${product.model}`}</h1>
            <img src={product.href} alt="product" className="productImage" />
            <p>{product.price}</p>
        </div>
    )
}

export default ProductPage;