import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import About from './pages/About';
import Order from './pages/Order';
import Contact from './pages/Contact';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-bg text-text transition-colors duration-400">
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;