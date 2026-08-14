import Form from "./Form.jsx";

const Newsletter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-section__content">
                <p className="newsletter-section__label">
                    Будь в курсе новинок
                </p>

                <h2>
                    Получай новости
                    <br />
                    о новых коллекциях
                </h2>

                <p>
                    Подпишись на рассылку и получай информацию
                    о новинках и скидках.
                </p>
            </div>
            <Form/>
        </section>
    )
}

export default Newsletter