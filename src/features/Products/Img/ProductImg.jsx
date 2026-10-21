import { useFavorites } from "../../../context/FavoritesContext.jsx";
import './ProductImg.css';
import Marker from "../Marker.jsx";

const ProductImg = ({ href, id, marker }) => {
    const { onToggleFavorite, isFavorite } = useFavorites();

    return (
        <div className="product-card__image">
            {marker !== null && <Marker text = {marker}/>}
            <button
                type="button"
                className="product-card-favorite"
                aria-label="Добавить в избранное"
                onClick={(e) => {
                    e.stopPropagation(); // важно, чтобы клик по кнопке не считался кликом по карточке
                    onToggleFavorite(id);
                }}
            >
                {isFavorite(id) ? '❤️' : '🤍'}
            </button>
            <img src={href} alt="Товар" loading="lazy" />
        </div>
    );
};

export default ProductImg;
