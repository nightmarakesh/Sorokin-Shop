import ActionsElement from "./ActionsElement.jsx";
const ActionsSection = (props) => {
    const {
        actions = []
    } = props;
    return (
        <div className="header-actions">
            {actions.map(({label,href,icon, counter}) => (
                <ActionsElement
                    label={label}
                    href={href}
                    counter = {counter}
                >
                    {icon}
                </ActionsElement>
            ))}
        </div>
    )
}

export default ActionsSection;