import Field from "./Field.jsx";
import Button from "./Button/Button.jsx";

const Form = (props) => {
    const {
        className,
        id,
        typeButton,
        typeField = id,
        placeholder = 'Введите...',
        label = id,
        children,
        onClick
    } = props
    return (
        <form className={className}>
            <Field
                className={className}
                id={id}
                label={label}
                type={typeField}
                placeholder={placeholder}
            />
            <Button
                className={className}
                type={typeButton}
                children={children}
                onClick={onClick}
            />
        </form>
    )
}

export default Form;