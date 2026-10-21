const NavElement = ({className,href,label}) => {
    //В перспективе добавить возможность комбинировать стили через переключаетль mark
    return (
        <li>
            <a
                className={className}
                href={href}
                aria-label={label}
            >
                {label}
            </a>
        </li>
    )
}

export default NavElement;