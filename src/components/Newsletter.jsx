import EmailForm from "./EmailForm.jsx";
import Banner from "./Banner.jsx";

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <Banner
                className="newsletter-section"
                title={`Получай новости
                    о новых коллекциях`}
                label="Будь в курсе новинок"
                description="Подпишись на рассылку и получай информацию
                о новинках и скидках."
                showButton={false}
            />
            <EmailForm/>
        </section>
    )
}

export default Newsletter