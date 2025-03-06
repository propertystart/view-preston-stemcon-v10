
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import FloorPlans from '@/components/FloorPlans';
import FittingsFinishes from '@/components/FittingsFinishes';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ImageReveal from '@/components/ImageReveal';
import AnimatedText from '@/components/AnimatedText';

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
      <FittingsFinishes />
      <FloorPlans />
      
      {/* Location Section */}
      <section id="location" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <AnimatedText
            text="LOCATION"
            tag="p"
            className="text-luxury text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Preston VIC 3072"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-sm overflow-hidden">
          <div className="p-8 md:p-10 space-y-8">
            <AnimatedText
              text="Invest in Preston, Melbourne – A Prime Opportunity for High Rental Yields!"
              tag="h3"
              className="text-2xl font-medium text-gray-900 text-center"
              animation="slide-up"
              delay={150}
            />
            
            <AnimatedText
              text="Preston is rapidly emerging as one of Melbourne's most promising investment hotspots, offering exceptional opportunities for property investors seeking strong rental yields, capital growth, and long-term stability."
              tag="p"
              className="text-gray-600 leading-relaxed"
              animation="slide-up"
              delay={200}
            />
            
            <div className="mt-8">
              <AnimatedText
                text="Why Invest in Preston?"
                tag="h4"
                className="text-xl font-medium text-luxury mb-4"
                animation="slide-up"
                delay={250}
              />
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 reveal reveal-delay-1">
                  <span className="text-luxury text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-gray-900">High Rental Demand</span>
                    <p className="text-gray-600 mt-1">With its proximity to Melbourne's CBD (just 9km away), excellent public transport, and thriving local economy, Preston attracts a diverse tenant base, including young professionals, students, and families.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-2">
                  <span className="text-luxury text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-gray-900">Strong Rental Yields</span>
                    <p className="text-gray-600 mt-1">Investors can expect above-average rental returns due to the increasing demand for quality apartments. With Melbourne's rental market tightening, properties in Preston are achieving low vacancy rates and competitive rental prices.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-3">
                  <span className="text-luxury text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-gray-900">Capital Growth Potential</span>
                    <p className="text-gray-600 mt-1">As one of Melbourne's fastest-growing suburbs, Preston has seen significant property value appreciation over the years. With continued infrastructure developments, modern amenities, and lifestyle upgrades, capital growth prospects remain strong.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-4">
                  <span className="text-luxury text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-gray-900">Lifestyle & Connectivity</span>
                    <p className="text-gray-600 mt-1">Preston offers a vibrant mix of café culture, shopping districts, green spaces, and entertainment options, making it an attractive place to live. The suburb also boasts excellent transport links, including train stations, tram routes, and major road access, ensuring seamless connectivity to the CBD and surrounding areas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 reveal reveal-delay-5">
                  <span className="text-luxury text-xl flex-shrink-0">✅</span>
                  <div>
                    <span className="font-medium text-gray-900">Affordable Investment Entry Point</span>
                    <p className="text-gray-600 mt-1">Compared to neighboring inner-city suburbs, Preston provides affordable apartment prices while still delivering strong rental yields—a perfect combination for savvy investors looking for the best of both worlds.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-luxury/10 p-6 rounded-sm reveal reveal-delay-6">
              <h4 className="text-xl font-medium text-gray-900 mb-2">The Time to Invest is Now!</h4>
              <p className="text-gray-700">With rising rental demand, increasing property values, and continued suburban revitalization, Preston is an outstanding location to secure a high-performing investment property. Whether you're a first-time investor or expanding your portfolio, this is your chance to capitalize on one of Melbourne's most promising suburbs.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
