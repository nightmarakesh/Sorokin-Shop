import ProductImg from "./ProductImg.jsx";
import ProductGeneral from "./ProductGeneral.jsx";
import Marker from "./Marker.jsx";

const ProductCard = (props) => {
 const {
     brand,
     model,
     price,
     marker = null,
     onAddToCart
 } = props;
    const ID = `product-${model}`;
    // console.log('ProductCard ID:', ID);
  return (

      <article className="product-card" id={ID}>
            <ProductImg />
            <ProductGeneral
                brand = {brand}
                model={model}
                price = {price}
                onAddToCart = {onAddToCart}
                id = {ID}
            />
          {marker !== null && <Marker text = {marker}/>}

      </article>
  )
}

export default ProductCard;