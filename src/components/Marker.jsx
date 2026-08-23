const Marker = ({ text }) => {
    const displayText = typeof text === 'object' && text !== null ? text.text : text;
    if (!displayText) return null;

    return (
        <span className="product-card__badge">
      {displayText}
    </span>
    );
};

export default Marker;