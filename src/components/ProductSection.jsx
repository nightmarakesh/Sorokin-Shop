import SectionHead from "./SectionHead.jsx";
import GridProducts from "./GridProducts.jsx";
const ProductsSection = (props) => {
    const {
        headTitle,
        headLabel,
        hrefHead,
        textButHead,
        filteredProducts,
        products
    } = props;
    const hasProducts = products.length > 0;
    const findProduct =  filteredProducts?.length;
    const isEmptyFiltered = findProduct === 0;
    if (isEmptyFiltered && hasProducts) {
        return (
            <SectionHead
            label = {'По вашему запросу ничего не найдено :('}
        />
        )
    }
    return (
      <section className="products-section">
          <SectionHead
                title ={headTitle}
                label = {findProduct > 0 ? `По вашему запросу найдено ${findProduct} товаров` : headLabel}
                href={hrefHead}
                children={textButHead}
                className={findProduct > 0 ? '--black' : ''}
          />
          <GridProducts
              products = {products}
              filteredProducts = { filteredProducts }
          />
      </section>
  )
}

export default ProductsSection