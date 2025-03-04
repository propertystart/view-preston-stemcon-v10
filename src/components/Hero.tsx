
import React, { useEffect, useRef, useState } from 'react';
import AnimatedText from './AnimatedText';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      if (videoRef.current) {
        videoRef.current.style.transform = `translateY(${scrollValue * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 h-full w-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center h-[120%] w-full"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2075"
        >
          <source src="https://st.depositphotos.com/4752911/56936/v/600/depositphotos_569366952-stock-video-aerial-panorama-buildings-luxury-residency.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
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
            className="text-white text-base md:text-lg lg:text-xl tracking-widest mb-8"
            animation="slide-up"
            delay={400}
          />
          <div className="h-px w-24 bg-white/50 mx-auto mb-8 animate-fade" style={{ animationDelay: '600ms' }}></div>
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
              className="inline-block px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-sm tracking-wide"
            >
              DISCOVER MORE
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white animate-pulse"></div>
        </div>
        <p className="text-white/70 text-xs mt-4 tracking-wider">SCROLL DOWN</p>
      </div>
    </section>
  );
};

export default Hero;
