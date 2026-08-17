const Logo = ({className, title, href='/',label, mark}) => {
    return (
        <a
            className={className}
            href={href}
            aria-label={label}
        >
            <span className={`${className}__mark`}>{mark}</span>
            <span className="logo__text">{title}</span>
        </a>
    )
}

export default Logo;