function Categories() {
  const categoryList = [
    {
      id: 1,
      name: 'Pizza',
      icon: '🍕',
      itemCount: '15+ Varieties',
      description: 'Cheesy, stone-baked artisan slices'
    },
    {
      id: 2,
      name: 'Burger',
      icon: '🍔',
      itemCount: '10+ Varieties',
      description: 'Gourmet patties with crispy fries'
    },
    {
      id: 3,
      name: 'Biryani',
      icon: '🍛',
      itemCount: '8+ Varieties',
      description: 'Aromatic slow-cooked basmati rice'
    },
    {
      id: 4,
      name: 'Desserts',
      icon: '🍰',
      itemCount: '12+ Varieties',
      description: 'Decadent cakes and sweet treats'
    },
    {
      id: 5,
      name: 'Drinks',
      icon: '🥤',
      itemCount: '14+ Varieties',
      description: 'Chilled juices, shakes & coolers'
    }
  ];

  const handleCategoryClick = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="categories-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-badge">WHAT WE SERVE</span>
          <h2 className="section-title">Food Categories</h2>
          <p className="section-subtitle">
            Explore our curated culinary collections made with the freshest
            handpicked ingredients.
          </p>
        </div>

        <div className="categories-grid">
          {categoryList.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={handleCategoryClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick();
                }
              }}
              aria-label={`View ${category.name} category`}
            >
              <div className="category-icon-wrapper">
                <span className="category-icon">{category.icon}</span>
              </div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-count">{category.itemCount}</p>
              <p className="category-desc">{category.description}</p>
              <div className="category-hover-indicator">
                <span>View items &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
