import React, { useState, useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setParticles(newParticles);

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const addRippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 800);
  };

  const keywordItems = [
    {
      text: 'Traditional Taste',
      images: [
        'images/thekua',
        'images/thekua1',
        'images/thekua2'
      ]
    },
    {
      text: 'Pure Ingredients',
      images: [
        'https://images.pexels.com/photos/4198170/pexels-photo-4198170.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/6824505/pexels-photo-6824505.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    },
    {
      text: 'Handmade with Love',
      images: [
        'https://images.pexels.com/photos/5864032/pexels-photo-5864032.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/5718481/pexels-photo-5718481.jpeg?auto=compress&cs=tinysrgb&w=400'
      ]
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="bg-card px-8 py-16 text-center relative overflow-hidden parallax-container"
    >
      {/* Animated Background Elements */}
      <div className="parallax-bg parallax-bg-1 morphing-shape" 
           style={{
             transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
           }} />
      <div className="parallax-bg parallax-bg-2 morphing-shape"
           style={{
             transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
           }} />
      <div className="parallax-bg parallax-bg-3 morphing-shape"
           style={{
             transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 10}px)`
           }} />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle floating-element"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `translate(${mousePosition.x * (particle.id % 3 + 1) * 5}px, ${mousePosition.y * (particle.id % 3 + 1) * 5}px)`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-6 text-text text-reveal stagger-animation">
          Welcome to Thekua Junction
        </h1>
        <p className="text-xl text-text mb-12 stagger-animation">
          Authentic Thekua from Bihar & Jharkhand delivered to your doorstep.
        </p>
        
        <div className="flex justify-center gap-16 flex-wrap my-12 relative">
          {keywordItems.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer p-4 stagger-animation card-hover-effect"
              onMouseEnter={() => setHoveredItem(item.text)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                transform: `translate(${mousePosition.x * (index + 1) * 2}px, ${mousePosition.y * (index + 1) * 2}px)`
              }}
            >
              <span className="text-2xl font-bold text-text relative z-10 magnetic-button">
                {item.text}
              </span>
              
              {/* Floating Images with Enhanced Animation */}
              {item.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={`${item.text} ${imgIndex + 1}`}
                  className={`absolute w-20 h-20 object-cover rounded-lg pointer-events-none transition-all duration-500 floating-element ${
                    hoveredItem === item.text ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: hoveredItem === item.text 
                      ? imgIndex === 0 
                        ? 'translate(-120px, -60px) rotate(-10deg) scale(1.1)' 
                        : imgIndex === 1 
                        ? 'translate(0px, -100px) rotate(8deg) scale(1.1)' 
                        : 'translate(100px, -60px) rotate(12deg) scale(1.1)'
                      : 'translate(-50%, 0) scale(0.8)',
                    top: '100%',
                    left: '50%',
                    zIndex: 5,
                    filter: hoveredItem === item.text ? 'brightness(1.1) saturate(1.2)' : 'brightness(0.8)',
                    boxShadow: hoveredItem === item.text ? '0 10px 25px rgba(0,0,0,0.3)' : 'none'
                  }}
                />
              ))}
            </div>
          ))}
        </div>
        
        <button
          className="bg-accent hover:bg-accent-hover text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 relative overflow-hidden magnetic-button pulse-glow stagger-animation"
          onClick={addRippleEffect}
          style={{
            transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px) scale(${1 + mousePosition.y * 0.05})`
          }}
        >
          Order Now
        </button>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent opacity-5 pointer-events-none" />
    </section>
  );
};

export default Hero;