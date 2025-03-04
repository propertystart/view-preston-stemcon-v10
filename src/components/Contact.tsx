
import React from 'react';
import AnimatedText from './AnimatedText';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div>
          <AnimatedText
            text="CONTACT"
            tag="p"
            className="text-luxury text-sm tracking-widest text-center"
            animation="slide-up"
          />
          <AnimatedText
            text="Get In Touch"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3 text-center"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mt-6 mb-6 mx-auto"></div>
          <AnimatedText
            text="For more information about The View Preston, please contact our sales team using the details below."
            tag="p"
            className="text-gray-600 leading-relaxed mb-8 text-center"
            animation="slide-up"
            delay={200}
          />
          
          <div className="space-y-6 mt-12 bg-white shadow-sm border border-gray-100 rounded-sm p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-luxury"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Visit Our Display Suite</p>
                <p className="text-sm text-gray-600 mt-1">123 Preston Avenue, Preston</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-luxury"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Opening Hours</p>
                <p className="text-sm text-gray-600 mt-1">Mon - Fri: 9am - 5pm<br />Sat - Sun: 10am - 4pm</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-luxury"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Contact Us</p>
                <p className="text-sm text-gray-600 mt-1">sales@theviewpreston.com.au<br />+61 3 1234 5678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
