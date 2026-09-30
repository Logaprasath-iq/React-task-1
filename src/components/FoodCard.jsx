function FoodCard({ id, name, description, price, image, category, rating, onAddToCart }) {
  const handleAdd = () => {
    if (onAddToCart) {
      onAddToCart({ id, name, price, image });
    }
  };

  return (
    <article className="food-card">
      <div className="food-card-image-wrap">
        <img
          src={image}
          alt={name}
          className="food-card-img"
          loading="lazy"
        />
        {category && <span className="food-card-tag">{category}</span>}
        {rating && (
          <span className="food-card-rating">
            ⭐ {rating}
          </span>
        )}
      </div>

      <div className="food-card-body">
        <div className="food-card-header">
          <h3 className="food-card-title">{name}</h3>
        </div>

        <p className="food-card-description">{description}</p>

        <div className="food-card-footer">
          <div className="food-price-wrapper">
            <span className="food-price-label">Price</span>
            <span className="food-card-price">₹{price}</span>
          </div>

          <button
            type="button"
            className="btn btn-add-cart"
            onClick={handleAdd}
            aria-label={`Add ${name} to cart for ₹${price}`}
          >
            <span className="btn-icon">+</span>
            <span>Add</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
