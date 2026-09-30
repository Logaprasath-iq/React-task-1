import { useState } from 'react';
import FoodCard from './FoodCard';

function FoodMenu() {
  const [activeFilter, setActiveFilter] = useState('All');

  // 6 Primary Food Items as specified in requirements
  const menuItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Pizza',
      description:
        'Crisp stone-baked crust topped with rich tomato sauce, fresh mozzarella, and aromatic basil.',
      price: 249,
      rating: '4.8',
      image:
        'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Classic Burger',
      category: 'Burger',
      description:
        'Juicy grilled patty layered with melted cheddar cheese, crisp lettuce, ripe tomatoes, and secret sauce.',
      price: 199,
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      category: 'Biryani',
      description:
        'Fragrant basmati rice slow-dum cooked with succulent marinated chicken, saffron, and traditional spices.',
      price: 280,
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Pasta Alfredo',
      category: 'Pasta',
      description:
        'Tender fettuccine tossed in a velvety rich parmesan and roasted garlic cream sauce with fresh herbs.',
      price: 229,
      rating: '4.7',
      image:
        'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      category: 'Desserts',
      description:
        'Decadent multilayered Belgian dark chocolate fudge cake with luscious ganache frosting.',
      price: 149,
      rating: '4.9',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Fresh Juice',
      category: 'Drinks',
      description:
        'Freshly pressed seasonal fruit juice served chilled with fresh mint leaves and zero added sugar.',
      price: 99,
      rating: '4.6',
      image:
        'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const categories = ['All', 'Pizza', 'Burger', 'Biryani', 'Pasta', 'Desserts', 'Drinks'];

  const filteredItems =
    activeFilter === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeFilter);

  const handleAddToCart = (item) => {
    alert(`${item.name} has been added to your cart! 🛒`);
  };

  return (
    <section id="menu" className="menu-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">OUR CHEF'S SPECIALS</span>
          <h2 className="section-title">Popular Menu</h2>
          <p className="section-subtitle">
            Crafted with passion, our best-selling dishes bring unforgettable
            aromas and flavors to your dining table.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="menu-filter-container">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Items Grid rendered with map() */}
        <div className="menu-grid">
          {filteredItems.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              image={food.image}
              category={food.category}
              rating={food.rating}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FoodMenu;
