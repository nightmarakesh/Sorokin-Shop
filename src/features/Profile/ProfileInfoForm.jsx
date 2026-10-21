import { useState } from "react";
import Button from "../../components/Button/Button.jsx";
import { useUser } from "../../context/UserContext.jsx";
import './ProfileInfoForm.css'

const ProfileInfoForm = () => {
    const { userData, onUpdateUser } = useUser();

    const [form, setForm] = useState(userData);
    const [isEditing, setIsEditing] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateUser(form);
        setIsEditing(false);
    };

    const resetForm = () => {
        setForm(userData);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
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
                        onClick={resetForm}
                    >
                        Отмена
                    </button>
                </div>
            </form>
        );
    }

    return (
        <div className="profile-info">
            <p><strong>Имя:</strong> {userData.name || '— не заполнено —'}</p>
            <p><strong>Email:</strong> {userData.email || '— не заполнено —'}</p>
            <p><strong>Телефон:</strong> {userData.phone || '— не заполнено —'}</p>
            <p><strong>Адрес:</strong> {userData.address || '— не заполнено —'}</p>
        </div>
    );
};

export default ProfileInfoForm;
