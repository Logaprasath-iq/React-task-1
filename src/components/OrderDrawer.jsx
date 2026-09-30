function OrderDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart,
  onExploreMenu
}) {
  if (!isOpen) return null;

  // Calculate total items count and total price
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert(
      `🎉 Thank you for your order! Total amount: ₹${totalAmount}.\nYour food is being prepared and will be delivered in 30 minutes!`
    );
    if (onClearCart) {
      onClearCart();
    }
    if (onClose) {
      onClose();
    }
  };

  const handleExploreClick = () => {
    if (onClose) onClose();
    if (onExploreMenu) onExploreMenu();
  };

  return (
    <div className="order-drawer-overlay" onClick={onClose}>
      <aside
        className="order-drawer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Your Order Summary"
      >
        {/* Drawer Header */}
        <div className="order-drawer-header">
          <h2 className="order-drawer-title">
            Your Order Summary ({totalCount} {totalCount === 1 ? 'item' : 'items'})
          </h2>
          <button
            type="button"
            className="order-drawer-close-btn"
            onClick={onClose}
            aria-label="Close order summary"
          >
            ✕
          </button>
        </div>

        {/* Drawer Body: Empty State or Cart Items List */}
        {cartItems.length === 0 ? (
          <div className="order-drawer-empty">
            <div className="empty-plate-icon">🍽️</div>
            <p className="empty-order-text">Your order is currently empty.</p>
            <button
              type="button"
              className="btn btn-primary btn-explore-order"
              onClick={handleExploreClick}
            >
              Explore Menu
            </button>
          </div>
        ) : (
          <>
            <div className="order-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="order-item-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-item-thumb"
                  />

                  <div className="order-item-details">
                    <h3 className="order-item-name">{item.name}</h3>
                    <span className="order-item-price">₹{item.price}</span>
                  </div>

                  <div className="order-qty-controls">
                    <button
                      type="button"
                      className="qty-btn qty-minus"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      −
                    </button>
                    <span className="qty-number">{item.quantity}</span>
                    <button
                      type="button"
                      className="qty-btn qty-plus"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Drawer Footer with Total & Checkout */}
            <div className="order-drawer-footer">
              <div className="order-total-row">
                <span className="order-total-label">Total Amount:</span>
                <span className="order-total-price">₹{totalAmount}</span>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-checkout"
                onClick={handleCheckout}
              >
                Proceed to Checkout (₹{totalAmount})
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default OrderDrawer;
