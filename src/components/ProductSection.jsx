import SectionHead from "./SectionHead.jsx";
import GridProducts from "./GridProducts.jsx";

const ProductsSection = () => {
  const products = [
      {brand : 'Puma', model : 'Air Max Pulse', price : '15 990 ₽', marker : 'Новинка'},
      {brand : 'New Balance', model : 'Forum Low', price : '11 990 ₽', marker : null},
      {brand : 'Adidas', model : '574 Core', price : '13 990 ₽', marker : 'Хит'},
      {brand : 'Nike', model : 'Suede Classic', price : '9 990 ₽', marker : null}
  ]
    return (
      <section className="products-section">
          <SectionHead
                title = "Популярные модели"
                label = "Выбор покупателей"
                href="/catalog"
                children="Весь каталог"
          />
          <GridProducts products = { products } />
      </section>
  )
}

export default ProductsSection