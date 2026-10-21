import BenefitCard from "./BenefitCard.jsx";
import './Benefits.css'

const GridBenefits = (props) => {
    const {
        benefits = []
    } = props;

    return (
        <div className="benefits-grid">
            {benefits.map(({title, description, icon}) => (
                <BenefitCard
                   key={title}
                   title={title}
                   description={description}
                   icon={icon}
                />
            ))}
        </div>
    )
}

export default GridBenefits;