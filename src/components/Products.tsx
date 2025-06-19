import React, { useState, useEffect } from 'react';

const Products: React.FC = () => {
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

  const products = [
    {
      id: 1,
      name: 'Classic Jaggery Thekua',
      price: '₹200 / 500g',
      image:  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Thekua_-_Chhath_Festival_-_Kolkata_2013-11-09_4316.JPG/1200px-Thekua_-_Chhath_Festival_-_Kolkata_2013-11-09_4316.JPG',
      hoverImage: 'https://c.ndtvimg.com/2018-11/1ivb9hq_thekua_625x300_13_November_18.jpg'
    },
    {
      id: 2,
      name: 'Coconut Thekua',
      price: '₹250 / 500g',
      image: 'https://images.pexels.com/photos/4198043/pexels-photo-4198043.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/5946071/pexels-photo-5946071.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      name: 'Premium Mixed Thekua',
      price: '₹300 / 500g',
      image: 'https://images.pexels.com/photos/5864032/pexels-photo-5864032.jpeg?auto=compress&cs=tinysrgb&w=400',
      hoverImage: 'https://images.pexels.com/photos/4198021/pexels-photo-4198021.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="px-8 py-16 relative overflow-hidden parallax-container">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent opacity-10 rounded-full floating-element"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-24 h-24 bg-accent opacity-10 morphing-shape"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }}
      />

      <h2 className="text-4xl font-bold text-center mb-12 text-accent text-reveal">
        Our Products
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="bg-card border border-border rounded-xl p-6 text-center card-hover-effect group stagger-animation relative overflow-hidden"
            style={{
              animationDelay: `${index * 0.2}s`,
              transform: `translate(${mousePosition.x * (index + 1) * 2}px, ${mousePosition.y * (index + 1) * 2}px)`
            }}
          >
            {/* Morphing background shape */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-accent opacity-5 morphing-shape" />
            
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110"
              />
              <img
                src={product.hoverImage}
                alt={`${product.name} hover`}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
              />
              
              {/* Floating particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-accent rounded-full floating-element"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 text-text magnetic-button">
              {product.name}
            </h3>
            <p className="text-lg font-bold mb-4 text-accent pulse-glow">
              {product.price}
            </p>
            
            <button
              className="bg-accent hover:bg-accent-hover text-white py-2 px-6 rounded-lg transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 relative overflow-hidden magnetic-button"
              onClick={addRippleEffect}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;