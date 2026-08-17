const BenefitCard = (props) => {
    const {
        description,
        title,
        icon
    } = props;
  return (
      <article className="benefit-card">
          <div className="benefit-card__icon">
              {icon}
          </div>

          <h3>
              {title}
          </h3>

          <p>
              {description}
          </p>
      </article>
  )
}

export default BenefitCard;