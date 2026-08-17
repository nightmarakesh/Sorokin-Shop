import Button from "./Button.jsx";

const ProductImg = () => {
    // const {
    //    href
    // } = props;
  return (
      <div className="product-card__image">
          <Button
              className="product-card-favorite"
              type="button"
              aria_label="Добавить в избранное"
              children="♡"
          />
          <div className="product-card__placeholder">
              👟
          </div>
      </div>
  )
}

export default ProductImg;