import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const addRippleEffect = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    element.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Order', path: '/order' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent to-transparent opacity-5"
        style={{
          transform: `translateX(${mousePosition.x * 20}px)`
        }}
      />
      
      <nav className="flex justify-between items-center px-8 py-4 relative z-10">
        <Link 
          to="/" 
          className="text-2xl font-bold text-accent magnetic-button pulse-glow relative overflow-hidden"
          onClick={addRippleEffect}
          style={{
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`
          }}
        >
          Thekua Junction
        </Link>
        
        <ul className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-text hover:text-accent transition-all duration-300 relative overflow-hidden px-3 py-2 rounded magnetic-button ${
                  location.pathname === item.path ? 'text-accent font-semibold pulse-glow' : ''
                }`}
                onClick={addRippleEffect}
                style={{
                  transform: `translate(${mousePosition.x * (index + 1) * 2}px, ${mousePosition.y * (index + 1) * 2}px)`
                }}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-accent animate-pulse" />
                )}
              </Link>
            </li>
          ))}
        </ul>
        
        <button
          onClick={toggleTheme}
          className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-all duration-300 focus:outline-none magnetic-button overflow-hidden"
          style={{
            transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`
          }}
        >
          <div
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 flex items-center justify-center floating-element ${
              isDark ? 'translate-x-7' : 'translate-x-1'
            }`}
          >
            {isDark ? (
              <Moon className="w-3 h-3 text-gray-800" />
            ) : (
              <Sun className="w-3 h-3 text-yellow-500" />
            )}
          </div>
          
          {/* Ripple effect for theme toggle */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className={`absolute inset-0 bg-accent opacity-20 rounded-full transition-transform duration-300 ${
              isDark ? 'scale-100' : 'scale-0'
            }`} />
          </div>
        </button>
      </nav>
    </header>
  );
};

export default Header;