import {useState} from "react";
import SectionHead from "./SectionHead.jsx";
import GridProducts from "./GridProducts.jsx";

const ProductsSection = (props) => {
    const {
        onAddToCart,
        products = [],
        headTitle,
        headLabel,
        hrefHead,
        textButHead,

    } = props;

    const [productList, setProductList] = useState(products);
    return (
      <section className="products-section">
          <SectionHead
                title ={headTitle}
                label ={headLabel}
                href={hrefHead}
                children={textButHead}
          />
          <GridProducts
              products = { productList }
              onAddToCart = {onAddToCart}
          />
      </section>
  )
}

export default ProductsSection