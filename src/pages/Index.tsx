
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
            Perfectly Positioned
          </h2>
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto reveal reveal-delay-2">
            The View Preston offers an enviable lifestyle in one of Melbourne's most sought-after neighborhoods, with convenient access to transport, dining, shopping, and recreation.
          </p>
        </div>
        
        <div className="relative h-96 md:h-[500px] rounded-sm overflow-hidden reveal reveal-delay-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25245.15529821234!2d144.9797651!3d-37.7429277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad644af0a652bfb%3A0x5045675218ce930!2sPreston%20VIC%203072%2C%20Australia!5e0!3m2!1sen!2sus!4v1709889008970!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of The View Preston"
          ></iframe>
          
          <div className="absolute top-4 left-4 p-6 bg-white shadow-md max-w-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-2">The View Preston</h3>
            <p className="text-sm text-gray-600 mb-4">123 Preston Avenue, Preston VIC 3072</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>2 minutes to Preston Market</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>5 minutes to Preston Station</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-6 text-luxury">•</span>
                <span>15 minutes to Melbourne CBD</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
