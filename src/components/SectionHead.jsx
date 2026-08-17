const SectionHead = (props) => {
    const { title='Заголовок',
            label = 'Подпись',
            href = '/',
            children,
            className = ''

    } = props;
    return (
        <div className={`section-heading${className}`}>
            <div>
                <p className="section-heading__label">
                    {label}
                </p>

                <h2 className="section-heading__title">
                    {title}
                </h2>
            </div>

            <a
                className="section-heading__link"
                href={href}
            >
                {children}
            </a>
        </div>
    )
}

export default SectionHead;