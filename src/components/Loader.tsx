import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-bg flex items-center justify-center overflow-hidden z-[9999] relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle floating-element"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Morphing background shapes */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-accent opacity-10 morphing-shape" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent opacity-10 morphing-shape" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-accent opacity-10 morphing-shape" 
           style={{ animationDelay: '4s' }} />

      {/* Split Loader Halves with Enhanced Animation */}
      <div 
        className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accent to-accent-hover transition-transform duration-1000 z-20 ${
          isComplete ? '-translate-x-full' : ''
        }`}
        style={{
          clipPath: isComplete ? 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      />
      <div 
        className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent to-accent-hover transition-transform duration-1000 z-20 ${
          isComplete ? 'translate-x-full' : ''
        }`}
        style={{
          clipPath: isComplete ? 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      />
      
      {/* Loader Content with Enhanced Effects */}
      <div className="relative z-30 text-center">
        <div className="text-6xl font-bold mb-6 text-text glitch pulse-glow" data-text={`${progress}%`}>
          {progress}%
        </div>
        
        {/* Enhanced Progress Bar */}
        <div className="w-64 h-3 bg-gray-300 rounded-full overflow-hidden mx-auto relative">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 transition-all duration-100 ease-out relative overflow-hidden"
            style={{ width: `${progress}%` }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse" 
                 style={{ 
                   transform: `translateX(${progress * 2}%)`,
                   width: '50%'
                 }} />
          </div>
          
          {/* Floating particles on progress bar */}
          {progress > 20 && (
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full floating-element"
                  style={{
                    left: `${Math.min(progress - 10 + i * 10, 95)}%`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Loading Text with Typewriter Effect */}
        <div className="mt-6 text-text text-lg">
          <span className="magnetic-button">
            Loading Authentic Flavors
            <span className="animate-pulse">...</span>
          </span>
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-accent opacity-5 pointer-events-none" />
    </div>
  );
};

export default Loader;