function About() {
  const handleLearnMore = () => {
    alert(
      "Welcome to Foodie! Founded in 2011, we are on a mission to deliver culinary joy through honest, farm-fresh ingredients and handcrafted recipes. Thank you for making us your favorite dining destination!"
    );
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          {/* Left Column: Visual Image with Experience Badge */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
                alt="Chefs carefully preparing gourmet food in the Foodie restaurant kitchen"
                className="about-image"
                loading="lazy"
              />
              <div className="about-badge-card">
                <span className="about-badge-number">15+</span>
                <span className="about-badge-text">
                  Years of Culinary Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Restaurant Story & Values */}
          <div className="about-content-column">
            <span className="section-badge">OUR STORY</span>
            <h2 className="about-title">Good Food Brings People Together</h2>
            <p className="about-description">
              At Foodie, we believe that dining is more than just a meal — it is
              a celebration of life, family, and friendships. Since day one, we
              have remained committed to using only 100% farm-fresh, organic
              ingredients, handpicked spices, and artisanal culinary techniques.
            </p>
            <p className="about-description-secondary">
              Whether you crave stone-baked pizzas, aromatic slow-cooked
              biryanis, or mouth-watering gourmet burgers, our dedicated chefs
              prepare every dish with heart, ensuring an unforgettable feast for
              your senses.
            </p>

            {/* Feature Highlights */}
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🌱</span>
                <div>
                  <h4 className="feature-title">100% Fresh & Organic</h4>
                  <p className="feature-text">Sourced daily from certified local farms</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">👨‍🍳</span>
                <div>
                  <h4 className="feature-title">Master Chefs</h4>
                  <p className="feature-text">Authentic recipes perfected over decades</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="feature-icon">🛵</span>
                <div>
                  <h4 className="feature-title">Fast & Hygienic Delivery</h4>
                  <p className="feature-text">Sealed thermal packaging delivered hot</p>
                </div>
              </div>
            </div>

            <div className="about-actions">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLearnMore}
                aria-label="Learn more about Foodie restaurant"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
