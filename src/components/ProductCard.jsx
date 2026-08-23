import ProductImg from "./ProductImg.jsx";
import ProductGeneral from "./ProductGeneral.jsx";
import Marker from "./Marker.jsx";

const ProductCard = (props) => {
 const {
     brand,
     model,
     price,
     marker = null,
     id
 } = props;

  return (
      <article className="product-card">
            <ProductImg />
            <ProductGeneral
                brand = {brand}
                model={model}
                price = {price}
                id = {id}
            />
          {marker !== null && <Marker text = {marker}/>}
      </article>
  )
}

export default ProductCard;