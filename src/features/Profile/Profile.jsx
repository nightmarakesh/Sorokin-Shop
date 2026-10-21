import { useOrders } from "../../context/OrderContext.jsx";
import ProfileStats from "./ProfileStats.jsx";
import ProfileInfoForm from "./ProfileInfoForm.jsx";
import OrderHistory from "./OrderHistory.jsx";
import './Profile.css'
const Profile = () => {
    const { onClearOrders } = useOrders();

    return (
        <>
            <main className="page-content">
                <h2>Профиль</h2>

                <ProfileStats />

                <section className="profile-section">
                    <div className="profile-section__head">
                        <h3>Личные данные</h3>
                    </div>
                    <ProfileInfoForm />
                </section>

                <section className="profile-section">
                    <OrderHistory onClearOrders={onClearOrders} />
                </section>
            </main>
        </>
    );
};

export default Profile