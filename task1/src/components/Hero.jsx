function Hero() {
  const scrollTo = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="section-container hero-container">
        {/* Left Column: Heading, Description & Action Buttons */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">WELCOME TO FOODIE</span>
          </div>

          <h1 className="hero-title">
            Delicious Food, <br />
            <span className="hero-title-accent">Made With Love.</span>
          </h1>

          <p className="hero-description">
            Experience the finest culinary delights crafted with fresh, organic
            ingredients and authentic recipes. Savor mouthwatering flavors
            prepared by expert chefs and delivered hot straight to your table.
          </p>

          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => scrollTo('menu')}
            >
              Explore Menu
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => scrollTo('contact')}
            >
              Contact Us
            </button>
          </div>

          {/* Highlights / Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Dishes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">30k+</span>
              <span className="stat-label">Happy Foodies</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Food Image */}
        <div className="hero-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
            alt="Delicious Food Dish"
            className="hero-main-img"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
