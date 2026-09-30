# Foodie – Food & Restaurant Website

A complete, modern, responsive restaurant and food ordering landing page built using **React JS** and **Vite**. Designed with a clean, full-size widescreen layout, warm culinary aesthetic, modern typography, and pure custom CSS.

---

## 🍽️ Project Overview

**Foodie** is a modern food and restaurant landing page designed to showcase delicious dishes, promote signature menus, and connect with diners. It is implemented cleanly and modularly, making it ideal both as a production-grade restaurant website and as a beginner-friendly React JS training assignment that is simple to understand and explain to your Team Lead (TL).

### 🌟 Highlights
- **Full-Size Display Layout**: Generous wide container scaling fluidly across widescreen monitors, laptops, tablets, and phones.
- **Clean & Beginner-Friendly Code**: Simple React hooks (`useState`), props, array methods (`map`), and basic CSS transitions with zero complex keyframe animations.
- **High-Quality Food Imagery**: Curated high-resolution Unsplash food photography.
- **Component-Driven Architecture**: Modular functional components with props, state management, and event handling.
- **Zero Heavy Frameworks**: 100% custom CSS (no Bootstrap, no Tailwind CSS) with clean media queries.

---

## 🚀 Technologies Used

- **React 19** (Functional Components, Hooks: `useState`, `useEffect`)
- **Vite** (Next-generation lightning-fast frontend tooling)
- **JavaScript (ES6+)**
- **HTML5** (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** (Custom properties/variables, Flexbox, CSS Grid, Responsive Media Queries)
- **Unsplash Images** (High-quality food photography)

---

## ✨ Features & Sections

### 1. Navigation Bar (`Navbar.jsx`)
- Brand logo with culinary iconography (`🍽️ Foodie`).
- Quick navigation links (`Home`, `Categories`, `Menu`, `About`, `Contact`).
- **Order Now** action button with smooth scroll to the menu.
- **Sticky Header**: Stays pinned at the top on scroll with a subtle border and blur.
- **Mobile Responsive Drawer**: Clean hamburger menu toggle for mobile viewports.

### 2. Hero Section (`Hero.jsx`)
- Badge: `WELCOME TO FOODIE`.
- Eye-catching typography: *"Delicious Food, Made With Love."*
- Descriptive culinary introduction.
- Interactive call-to-action buttons: **Explore Menu** and **Contact Us**.
- Full-size clean hero food image with rounded borders and soft shadow.
- Quick statistics counter (`50+ Dishes`, `30k+ Happy Foodies`, `4.9★ Rating`).

### 3. Food Categories (`Categories.jsx`)
- Dynamic rendering using JavaScript arrays and `map()`.
- Interactive category cards:
  - 🍕 Pizza
  - 🍔 Burger
  - 🍛 Biryani
  - 🍰 Desserts
  - 🥤 Drinks
- Clean hover elevation with quick scroll to menu on click.

### 4. Popular Menu & Reusable Card (`FoodMenu.jsx` & `FoodCard.jsx`)
- Curated showcase of signature dishes:
  - **Margherita Pizza** – ₹249
  - **Classic Burger** – ₹199
  - **Chicken Biryani** – ₹280
  - **Pasta Alfredo** – ₹229
  - **Chocolate Cake** – ₹149
  - **Fresh Juice** – ₹99
- Category filter tabs (*All, Pizza, Burger, Biryani, Pasta, Desserts, Drinks*).
- Reusable **`FoodCard`** component accepting props: `name`, `description`, `price`, `image`, `rating`, `category`, and `onAddToCart`.
- Interactive **Add to Cart** action triggering a simple alert (`alert("Margherita Pizza has been added to your cart! 🛒")`).

### 5. About Us (`About.jsx`)
- Professional restaurant culinary photo with experience highlight.
- Compelling brand story: *"Good Food Brings People Together"*.
- Key value propositions:
  - 🌱 100% Fresh & Organic
  - 👨‍🍳 Master Chefs
  - 🛵 Fast & Hygienic Delivery
- Interactive **Learn More** button with informative alert.

### 6. Contact Us (`Contact.jsx`)
- Comprehensive contact details (Address, Phone, Email, Hours) with custom icons.
- Controlled React form handling:
  - Full Name (`name`)
  - Email Address (`email`)
  - Subject (`subject`)
  - Message (`message`)
- Form validation, page-refresh prevention (`e.preventDefault()`), submission confirmation alert, and inline feedback message.

### 7. Footer (`Footer.jsx`)
- Foodie brand story and social media channels (Instagram, Facebook, Twitter, YouTube).
- Quick navigation links and operating schedule.
- Interactive newsletter subscription with instant confirmation.
- Semantic copyright bar and legal links.

---

## 📁 Project Structure

```
food-website/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky header with responsive mobile drawer
│   │   ├── Hero.jsx         # Full-size Hero banner with buttons & statistics
│   │   ├── Categories.jsx   # Interactive food category cards
│   │   ├── FoodMenu.jsx     # Menu grid with category filter tabs
│   │   ├── FoodCard.jsx     # Reusable food card component with props
│   │   ├── About.jsx        # About Us two-column section
│   │   ├── Contact.jsx      # Contact info cards and controlled form
│   │   └── Footer.jsx       # Footer with links, hours & newsletter
│   ├── App.jsx              # Main application layout component
│   ├── App.css              # Unified custom stylesheet (all sections + media queries)
│   └── main.jsx             # React entry point with StrictMode
├── index.html               # HTML5 entry with Google Fonts & favicon
├── package.json             # Scripts & dependencies
├── vite.config.js           # Vite configuration
└── README.md                # Project documentation
```

---

## 🛠️ Installation & Setup

Follow these straightforward steps to run the project locally:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (version 18.x or later recommended).

### 2. Navigate to the project directory
```bash
cd "food-website"
```

### 3. Install dependencies
```bash
npm install
```

### 4. Start the development server
```bash
npm run dev
```

The Vite development server will start instantly (typically at `http://localhost:5173/`). Open this URL in your web browser.

### 5. Build for production
```bash
npm run build
```

This compiles optimized production-ready HTML, CSS, and JS files into the `dist/` directory.

### 6. Preview production build
```bash
npm run preview
```

---

## 🌐 GitHub Deployment Instructions

### Option 1: Deploying to GitHub Pages

1. **Install `gh-pages`**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `vite.config.js`**:
   Add the base path matching your repository name:
   ```javascript
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     plugins: [react()],
     base: '/<repository-name>/', // e.g., '/foodie-website/'
   });
   ```

3. **Add deployment scripts to `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Foodie restaurant website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```
   In GitHub, navigate to **Settings > Pages** and set the source branch to `gh-pages`.

---

### Option 2: Deploying to Vercel (Recommended, 1-Click)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your repository.
4. Select the project directory (`food-website`), leave Vite settings as default, and click **Deploy**.

---

### Option 3: Deploying to Netlify
1. Sign in to [Netlify](https://netlify.com).
2. Click **"Add new site" > "Import an existing project"**.
3. Connect your GitHub repository.
4. Set Build command: `npm run build` and Publish directory: `dist`.
5. Click **Deploy Site**.

---

## 📱 Responsive Breakpoints

The custom CSS handles all screen viewports fluidly:
- **Full-Size Desktop & Widescreen** (`> 1024px`): Full multi-column layout, sticky navigation bar, wide container.
- **Laptop & Tablet Landscape** (`769px – 1024px`): 3-column categories, 2-column menu grid.
- **Tablets & Mobile Portrait** (`≤ 768px`):
  - Collapsible mobile hamburger menu drawer.
  - Stacked hero section and about section.
  - Single-column food menu cards.
  - Stacked contact info and form.
  - No horizontal scrolling.
- **Small Mobile Devices** (`≤ 480px`): Full-width action buttons, touch-friendly tap targets, and proportional typography.

---

## 📄 License
This project is open-source and free to use for educational, training, and commercial portfolio purposes.
