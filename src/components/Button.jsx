const Button = ({className, type = 'button', children, label, href}) => {
    const Tag = href ? 'a' : 'button';
    const props =  {
        className : `${className}__button`,
        'aria-label' : label,
        ...(href ? { 'href': href } : {'type': type}),
    }
    return (
        <Tag {...props}>
            {children}
        </Tag>
    )
}

export default Button;