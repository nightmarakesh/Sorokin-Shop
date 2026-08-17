const Marker = (props) => {
    const {
        text
    } = props;
    return (
        <span className="product-card__badge">
                  {text}
        </span>
    )
}

export default Marker;