import Banner from "./Banner.jsx";
import Logo from "../../../components/Logo.jsx";
import './BrandBanner.css'

const BrandBanner = () => {
  return(
      <section className="brand-banner">
          <Banner
                className="brand-banner"
                title={`Стиль начинается
                c правильной пары`}
                label="SorokinShop selection"
                description="Подбери кроссовки, которые подчеркнут
                твой образ."
                showButton={true}
                buttonText="Подобрать кроссовки"
                buttonLabel="catalog"
                href="/catalog"
          />
          {/*<div className="brand-banner__visual">*/}
          {/*    <span>SS</span>*/}
          {/*</div>*/}
          <Logo
              className="brand-banner-visual"
              mark = "SS"
          />
      </section>
  )
}

export default BrandBanner;