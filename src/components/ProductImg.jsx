import Button from "./Button.jsx";
import {useFavorites} from "../context/FavoritesContext.jsx";

const ProductImg = (props) => {
    const {
       href,
        id
    } = props;
   const {onToggleFavorite, isFavorite} = useFavorites()

  return (
      <div className="product-card__image">
          <Button
              className="product-card-favorite"
              type="button"
              aria_label="Добавить в избранное"
              onClick={() => {
                  onToggleFavorite(id)

              }}
          >
              {isFavorite(id) ? '❤️' : '🤍'}
          </Button>
              <img src={href} alt="нету ручек нет конфетки" loading="lazy" />
          {/*{isFavorite === true ? alert('Вы добавили товар в избранное'):alert('Вы удалили товар из избранного')})}*/}
      </div>
  )
}

export default ProductImg;