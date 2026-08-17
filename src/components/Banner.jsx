import Button from "./Button.jsx";

const Banner = ({className,title,label,description,href,showButton = false,buttonText, buttonLabel}) => {
    const renderTitle = () => {
        if (typeof title === 'string') {
            return title.split('\n').map((line, i) => (
                <span key={i}>{line}<br/></span>
            ));
        }
        return title;
    };

    return (
            <div className={`${className}__content`}>
                <p className={`${className}__label`}>
                    {label}
                </p>

                <h2 className={`${className}__title`}>
                    {renderTitle()}
                </h2>

                <p className={`${className}__description`}>
                    {description}
                </p>
                {showButton && (
                    <Button
                        className={className}
                        href={href}
                        label={buttonLabel}
                    >
                        {buttonText}
                    </Button>
                )}


            </div>
        )
    }

export default Banner;