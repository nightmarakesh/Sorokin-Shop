import './HeaderActions.css'
const ActionsElement= ({className = 'header-action',href,label,type,children, counter}) => {
    const Tag = href? 'a' : 'button';
    const props =  {
       'aria-label': label,
        className: className,
        ...(href ? { 'href': href } : {'type': type}),
    }
// Можно сделать таким элементом уведомления от сайта
    return (
        <Tag {...props}>
            {children}
            <span className={`${className}__text`}> {label} </span>
            {typeof counter === 'number' && (
                <span className="cart-counter">{counter}</span>
            )}
        </Tag>
    )
}

export default ActionsElement;