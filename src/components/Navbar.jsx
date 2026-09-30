import { useState, useEffect } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smoothly scroll to any section by its ID
  const scrollTo = (sectionId) => {
    setIsMobileMenuOpen(false); // Close mobile menu if open
    setActiveSection(sectionId); // Highlight active section
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Automatically update the active navbar link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'categories', 'menu', 'about', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo - Clicking scrolls to Home */}
        <button
          type="button"
          className="logo-btn"
          onClick={() => scrollTo('home')}
        >
          <span className="logo-icon">🍽️</span>
          <span className="logo-text">
            Food<span className="accent-text">ie</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="nav-menu">
          <ul className="nav-links">
            <li>
              <button
                type="button"
                className={`nav-btn ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollTo('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-btn ${activeSection === 'categories' ? 'active' : ''}`}
                onClick={() => scrollTo('categories')}
              >
                Categories
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-btn ${activeSection === 'menu' ? 'active' : ''}`}
                onClick={() => scrollTo('menu')}
              >
                Menu
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollTo('about')}
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollTo('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        {/* Order Now Button - scrolls straight to the Menu section */}
        <div className="nav-action">
          <button
            type="button"
            className="btn btn-primary order-btn"
            onClick={() => scrollTo('menu')}
          >
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          className={`hamburger-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <button
              type="button"
              className={`mobile-nav-btn ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollTo('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-nav-btn ${activeSection === 'categories' ? 'active' : ''}`}
              onClick={() => scrollTo('categories')}
            >
              Categories
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-nav-btn ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollTo('menu')}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-nav-btn ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollTo('about')}
            >
              About
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`mobile-nav-btn ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollTo('contact')}
            >
              Contact
            </button>
          </li>
          <li className="mobile-btn-item">
            <button
              type="button"
              className="btn btn-primary mobile-order-btn"
              onClick={() => scrollTo('menu')}
            >
              Order Now
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
