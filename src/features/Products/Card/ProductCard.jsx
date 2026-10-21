import ProductImg from "../Img/ProductImg.jsx";
import ProductGeneral from "../General/ProductGeneral.jsx";
import './ProductCard.css'
const ProductCard = (props) => {
 const {
     brand,
     model,
     price,
     marker = null,
     id,
     href,
 } = props;

  return (

      <article className="product-card">
            <ProductImg
                href={href}
                id = {id}
                marker = {marker}
            />
            <ProductGeneral
                brand = {brand}
                model={model}
                price = {price}
                id = {id}
            />

      </article>
  )
}

export default ProductCard;