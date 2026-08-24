import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import { useUser } from "../context/UserContext.jsx";
import { useOrders } from "../context/OrderContext.jsx";
import { useFavorites } from "../context/FavoritesContext.jsx";

const Profile = () => {
    const { userData, onUpdateUser } = useUser();
    const { orders, onClearOrders } = useOrders();
    const { favoritesCount } = useFavorites();

    const [form, setForm] = useState(userData);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateUser(form);
        setIsEditing(false);
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <>
            <Header />
            <main className="page-content">
                <h2>Профиль</h2>

                {/* Краткая статистика */}
                <div className="profile-stats">
                    <div className="profile-stat">
                        <span className="profile-stat__value">{orders.length}</span>
                        <span className="profile-stat__label">Заказов</span>
                    </div>
                    {/*/!*<div className="profile-stat">*!/*/}
                    {/*/!*    <span className="profile-stat__value">{orders.reduce((sum, order) =>{*!/*/}
                    {/*/!*        return sum + order.total.toLocaleString() ;*!/*/}
                    {/*/!*    },0).slice(1)} ₽</span>*!/*/}
                    {/*/!*    <span className="profile-stat__label">На общую сумму</span>*!/*/}
                    {/*</div>*/}
                    <div className="profile-stat">
                        <span className="profile-stat__value">{favoritesCount}</span>
                        <span className="profile-stat__label">В избранном</span>
                    </div>
                    <div className="profile-stat">
                        <span className="profile-stat__value">{favoritesCount}</span>
                        <span className="profile-stat__label">В корзине</span>
                    </div>
                </div>

                {/* Данные пользователя */}
                <section className="profile-section">
                    <div className="profile-section__head">
                        <h3>Личные данные</h3>
                        {!isEditing && (
                            <button
                                className="profile-edit-btn"
                                onClick={() => setIsEditing(true)}
                            >
                                Редактировать
                            </button>
                        )}
                    </div>

                    {isEditing ? (
                        <form className="profile-form" onSubmit={handleSave}>
                            <label className="profile-form__field">
                                <span>Имя</span>
                                <input
                                    type="text"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    placeholder="Как к вам обращаться"
                                    required
                                />
                            </label>
                            <label className="profile-form__field">
                                <span>Email</span>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    placeholder="example@mail.ru"
                                />
                            </label>
                            <label className="profile-form__field">
                                <span>Телефон</span>
                                <input
                                    type="tel"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    placeholder="+7 (999) 123-45-67"
                                    required
                                />
                            </label>
                            <label className="profile-form__field">
                                <span>Адрес доставки</span>
                                <input
                                    type="text"
                                    value={form.address}
                                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                                    placeholder="Город, улица, дом, квартира"
                                />
                            </label>
                            <div className="profile-form__actions">
                                <Button type="submit" className="profile-save">Сохранить</Button>
                                <button
                                    type="button"
                                    className="profile-cancel"
                                    onClick={() => {
                                        setForm(userData);
                                        setIsEditing(false);
                                    }}
                                >
                                    Отмена
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="profile-info">
                            <p><strong>Имя:</strong> {userData.name || '— не заполнено —'}</p>
                            <p><strong>Email:</strong> {userData.email || '— не заполнено —'}</p>
                            <p><strong>Телефон:</strong> {userData.phone || '— не заполнено —'}</p>
                            <p><strong>Адрес:</strong> {userData.address || '— не заполнено —'}</p>
                        </div>
                    )}
                </section>

                {/* История заказов */}
                <section className="profile-section">
                    <div className="profile-section__head">
                        <h3>История заказов</h3>
                        {orders.length > 0 && (
                            <button
                                className="profile-edit-btn"
                                onClick={onClearOrders}
                            >
                                Очистить историю
                            </button>
                        )}
                    </div>

                    {orders.length === 0 ? (
                        <p className="profile-empty">У вас пока нет заказов.</p>
                    ) : (
                        <div className="orders-list">
                            {orders.map((order) => (
                                <div key={order.id} className="order-card">
                                    <div className="order-card__head">
                                        <span className="order-card__id">Заказ #{order.id.slice(-6)}</span>
                                        <span className="order-card__date">{formatDate(order.date)}</span>
                                        <strong className="order-card__total">{order.total.toLocaleString()} ₽</strong>
                                    </div>
                                    <div className="order-card__items">
                                        {order.items.map((item) => (
                                            <div key={item.id} className="order-item">
                                                <span>{item.brand} {item.model}</span>
                                                <span className="order-item__qty">×{item.quantity}</span>
                                                <span>{item.price}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Profile;