import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FoodMenu from './components/FoodMenu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Single Page Layout with all sections */}
      <main id="main-content">
        <Hero />
        <Categories />
        <FoodMenu />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
