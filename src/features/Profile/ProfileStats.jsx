import { useOrders } from "../../context/OrderContext.jsx";
import { useFavorites } from "../../context/FavoritesContext.jsx";
import './ProfileStats.css'
const ProfileStats = () => {
    const { orders } = useOrders();
    const { favoritesCount } = useFavorites();

    return (
        <div className="profile-stats">
            <div className="profile-stat">
                <span className="profile-stat__value">{orders.length}</span>
                <span className="profile-stat__label">Заказов</span>
            </div>
            <div className="profile-stat">
                <span className="profile-stat__value">{favoritesCount}</span>
                <span className="profile-stat__label">В избранном</span>
            </div>
            {/* Здесь у тебя было дублирование «В корзине» — скорее всего, ошибка. */}
            {/* Если корзина — отдельный контекст, подключи useCart и покажи cartCount */}
        </div>
    );
};

export default ProfileStats;
