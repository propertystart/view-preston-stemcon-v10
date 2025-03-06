
import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="relative h-full w-full">
          <img 
            src="/lovable-uploads/8aca0879-7d7c-40ed-b5d6-423cfbb79611.png" 
            alt="The View Preston Building" 
            className="object-cover object-center h-full w-full"
          />
          <div className="absolute inset-0 bg-noir bg-opacity-60"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <AnimatedText
            text="THE VIEW PRESTON"
            tag="h1"
            className="text-white text-4xl md:text-5xl lg:text-7xl font-light tracking-tight mb-2"
            animation="slide-up"
            delay={200}
          />
          <AnimatedText
            text="BY STEMCON"
            tag="p"
            className="text-noir-gold text-base md:text-lg lg:text-xl tracking-widest mb-8"
            animation="slide-up"
            delay={400}
          />
          <div className="h-px w-24 bg-noir-gold/50 mx-auto mb-8 animate-fade" style={{ animationDelay: '600ms' }}></div>
          <AnimatedText
            text="A TIMELESS COLLECTION OF LUXURY APARTMENTS IN THE HEART OF PRESTON"
            tag="p"
            className="text-white/90 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-12"
            animation="slide-up"
            delay={600}
          />
          <div className={`transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a
              href="#about"
              className="inline-block px-8 py-3 border border-noir-gold text-white hover:bg-noir-gold hover:text-noir-dark transition-all duration-300 text-sm tracking-wide"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-noir-gold/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-noir-gold animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-4 tracking-wider">SCROLL DOWN</p>
      </div>
    </section>
  );
};

export default Hero;
