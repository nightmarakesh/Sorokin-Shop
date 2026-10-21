import Banner from "../Banner/Banner.jsx";
import Form from "../../../components/Form.jsx";
import './NewsLetter.css'
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
            <Form
                className="newsletter-form"
                id="email"
                label="Email"
                typeField="email"
                placeholder="Введите свой Email"
                typeButton="submit"
                children="Подписаться"
                onClick={() => alert("Спасибо, что доверяете нам")}
            />
        </section>
    )
}

export default Newsletter