import SectionHead from "./SectionHead.jsx";
import GridProducts from "./GridProducts.jsx";
import './ProductSection.css'

const ProductsSection = (props) => {
    const {
        headTitle,
        headLabel,
        hrefHead,
        textButHead,
        filteredProducts,
        products
    } = props;
    const safeProducts = products ?? [];

    const isSearchActive = filteredProducts !== undefined && filteredProducts !== null;
    const searchResults = filteredProducts ?? [];
    const findProduct =  searchResults.length;
    console.log(filteredProducts)
    if (findProduct === 0 && safeProducts.length > 0 && isSearchActive) {
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