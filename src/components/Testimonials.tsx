import React, { useEffect, useState, useRef } from 'react';

const Testimonials: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [animateScroll, setAnimateScroll] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setAnimateScroll(true);
    }, 3000);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearTimeout(timer);
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "This platform has truly transformed how I enjoy authentic sweets. The thekuas are absolutely delicious!",
      author: "Ravi Kumar",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      direction: "left"
    },
    {
      id: 2,
      text: "The customer support and quality are exceptional. Fresh, traditional taste delivered right to my door.",
      author: "Priya Sharma",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      direction: "right"
    },
    {
      id: 3,
      text: "Affordable and reliable products delivered on time — exactly what a sweet lover needs.",
      author: "Sunil Verma",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      direction: "left"
    },
    {
      id: 4,
      text: "Amazing quality and taste! Reminds me of my grandmother's homemade thekuas.",
      author: "Anjali Singh",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
      direction: "right"
    }
  ];

  return (
    <div 
      ref={sectionRef}
      className="relative overflow-hidden bg-card py-8 parallax-container"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-10 left-20 w-16 h-16 bg-accent opacity-10 rounded-full floating-element"
        style={{
          transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`
        }}
      />
      <div 
        className="absolute bottom-20 right-20 w-20 h-20 bg-accent opacity-10 morphing-shape"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`
        }}
      />
      <div 
        className="absolute top-1/2 left-10 w-12 h-12 bg-accent opacity-10"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px) rotate(${mousePosition.x * 360}deg)`
        }}
      />

      {/* Intro Text Overlay with Enhanced Animation */}
      {showIntro && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex gap-4 text-4xl font-bold text-accent">
            <span 
              className="transform transition-all duration-1000 glitch"
              data-text="Happy customers"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
              }}
            >
              Happy customers
            </span>
            <span 
              className="transform transition-all duration-1000 pulse-glow"
              style={{
                transform: `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
              }}
            >
              over there →
            </span>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-accent text-reveal">
          What Our Customers Say
        </h2>
        
        <div className="relative">
          <div 
            className={`flex gap-8 ${animateScroll ? 'animate-scroll' : ''}`}
            style={{
              width: 'max-content',
              animationDuration: '30s',
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear'
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className={`flex-shrink-0 w-96 bg-bg rounded-2xl p-6 shadow-lg card-hover-effect relative overflow-hidden ${
                  testimonial.direction === 'left' ? 'flex-row' : 'flex-row-reverse'
                } flex items-center gap-4`}
                style={{
                  transform: `translate(${mousePosition.x * (index % 3 + 1) * 2}px, ${mousePosition.y * (index % 3 + 1) * 2}px)`
                }}
              >
                {/* Floating particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full floating-element opacity-60" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-accent rounded-full floating-element opacity-40" 
                     style={{ animationDelay: '1s' }} />
                
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-24 h-24 rounded-full object-cover border-4 border-accent flex-shrink-0 transition-transform duration-300 hover:scale-110 pulse-glow"
                />
                <div className={`flex-1 ${testimonial.direction === 'right' ? 'text-right' : 'text-left'}`}>
                  <p className="text-text italic mb-3 leading-relaxed magnetic-button">
                    "{testimonial.text}"
                  </p>
                  <h4 className="font-bold text-accent">
                    - {testimonial.author}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent opacity-5 pointer-events-none" />
    </div>
  );
};

export default Testimonials;