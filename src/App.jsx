import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FoodMenu from './components/FoodMenu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import OrderDrawer from './components/OrderDrawer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add item to cart or increment quantity if already present
  const handleAddToCart = (foodItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === foodItem.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...foodItem, quantity: 1 }];
    });
    // Open drawer when an item is added so user immediately sees their order
    setIsCartOpen(true);
  };

  // Increase (+1) or decrease (-1) quantity; remove if quantity becomes 0
  const handleUpdateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Clear all items from cart (e.g. after checkout)
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll smoothly to menu when user clicks "Explore Menu" inside drawer
  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <div className="app-container">
      {/* Sticky Navigation Bar with dynamic cart count badge and order click */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Single Page Layout with all sections */}
      <main id="main-content">
        <Hero />
        <Categories />
        <FoodMenu onAddToCart={handleAddToCart} />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Order Summary Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
        onExploreMenu={handleExploreMenu}
      />
    </div>
  );
}

export default App;
