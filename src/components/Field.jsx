const Field = (props) => {
    const {
        className='',
        id,
        label='',
        type='text',
        placeholder
    } = props
    return (
        <>
            <label
                className={`${className}__label`}
                htmlFor={id}
            >
                {label}
            </label>

            <input
                className={`${className}__input`}
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
            />
        </>
    )
}

export default Field;