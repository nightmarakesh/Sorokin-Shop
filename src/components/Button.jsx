const Button = ({className, type = 'button', children, label, href, onClick}) => {
    const Tag = href ? 'a' : 'button';
    const props =  {
        className : `${className}__button`,
        'aria-label' : label,
        ...(href ? { 'href': href } : {'type': type, 'onClick': onClick }),
    }
    return (
        <Tag {...props}>
            {children}
        </Tag>
    )
}

export default Button;