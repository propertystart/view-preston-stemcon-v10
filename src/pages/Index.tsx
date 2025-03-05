import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ImageReveal from '@/components/ImageReveal';

const Index = () => {
  // Reveal animations on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Lazy loading images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('.lazy-img');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver support
      lazyImages.forEach((img) => {
        const imgEl = img as HTMLImageElement;
        imgEl.src = imgEl.dataset.src || '';
        imgEl.classList.add('loaded');
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      
      {/* Location Section */}
      <section id="location" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-luxury text-sm tracking-widest reveal">LOCATION</p>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3 reveal reveal-delay-1">
            Preston VIC 3072
          </h2>
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-delay-2">
            The View Preston offers an enviable lifestyle in one of Melbourne's most sought-after neighborhoods.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* First Image */}
          <div className="rounded-sm overflow-hidden shadow-md reveal reveal-delay-1">
            <ImageReveal
              src="/lovable-uploads/5ad29e32-3cee-4ab7-884e-0bfad206c946.png"
              alt="Suburb Profile Report - Preston VIC 3072 Map and Statistics"
              className="w-full"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          
          {/* Second Image */}
          <div className="rounded-sm overflow-hidden shadow-md reveal reveal-delay-2">
            <ImageReveal
              src="/lovable-uploads/4ebe84d4-9781-48c0-b39c-2b6b70ce7716.png"
              alt="Preston VIC 3072 Units For Sale Data"
              className="w-full"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          
          {/* Third Image */}
          <div className="rounded-sm overflow-hidden shadow-md reveal reveal-delay-3">
            <ImageReveal
              src="/lovable-uploads/68d4bf2b-4ca5-4dbb-a240-fd394ceba42b.png"
              alt="Preston VIC 3072 Market Activity Snapshot"
              className="w-full"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          
          {/* Fourth Image */}
          <div className="rounded-sm overflow-hidden shadow-md reveal reveal-delay-3">
            <ImageReveal
              src="/lovable-uploads/03566d92-74ab-4137-a802-cefb391be76a.png"
              alt="Preston VIC 3072 Rental Data"
              className="w-full"
              aspectRatio="aspect-auto"
              animation="fade"
            />
          </div>
          
          <div className="bg-white shadow-md p-6 mt-8 max-w-3xl mx-auto reveal reveal-delay-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Suburb Profile Highlights</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>8.9km distance from Melbourne CBD</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>32.9k population with 9.8% growth over 5 years</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>Median house price: $1,120,148</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>Median unit price: $601,234</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>59% owner occupiers vs 41% renters</span>
              </li>
            </ul>
            <p className="text-xs text-gray-500 mt-6 italic">Source: CoreLogic Suburb Profile Report - 24 February 2025</p>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
