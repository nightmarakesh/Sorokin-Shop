import SectionHead from "./SectionHead.jsx";
import GridBenefits from "./GridBenefits.jsx";

const Benefits = () => {
  const benefits = [
      {title : 'Оригинальная продукция',description : 'Только оригинальные модели от известных брендов.',icon: '✓'},
      {title : 'Быстрая доставка',description : 'Доставим заказ в удобное для тебя время.',icon: '→'},
      {title : 'Лёгкий возврат',description : 'Можно вернуть товар, если размер не подошёл.',icon: '↺'},
      {title : 'Помощь с выбором',description : 'Наши консультанты помогут подобрать пару.',icon: '♥'}
  ]
    return (
      <section className="benefits-section">
          <SectionHead
              title = "Покупать удобно"
              label = "Почему SorokinShop"
              href="/catalog"
              className="--center"
          />
          <GridBenefits benefits = {benefits} />
      </section>
  )
}

export default Benefits;