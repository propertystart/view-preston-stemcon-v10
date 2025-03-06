
import React from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-6">
            <div className="inline-block">
              <AnimatedText
                text="ABOUT"
                tag="p"
                className="text-luxury text-sm tracking-widest"
                animation="slide-up"
              />
            </div>
            <AnimatedText
              text="Timeless Elegance in Preston"
              tag="h2"
              className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight"
              animation="slide-up"
              delay={100}
            />
            <div className="h-px w-16 bg-luxury/30"></div>
            <AnimatedText
              text="The View Preston is a collection of meticulously crafted luxury apartments that redefine modern urban living. Located in the vibrant heart of Preston, this architectural masterpiece offers an unparalleled living experience."
              tag="p"
              className="text-gray-600 leading-relaxed"
              animation="slide-up"
              delay={200}
            />
            <AnimatedText
              text="Every detail has been thoughtfully considered to create homes that are as functional as they are beautiful. From the premium finishes to the intelligent layouts, The View Preston represents the perfect harmony of form and function."
              tag="p"
              className="text-gray-600 leading-relaxed"
              animation="slide-up"
              delay={300}
            />
            <AnimatedText
              text="With over 25 years of quality and innovation in Melbourne, Stemcon and MAP Architects have crafted a development that blends style, functionality, and sustainability. Backed by a 20-year builder's guarantee, it offers enduring quality and peace of mind for modern living."
              tag="p"
              className="text-gray-600 leading-relaxed"
              animation="slide-up"
              delay={400}
            />
            <div className="pt-4">
              <a
                href="#gallery"
                className="inline-block px-6 py-3 bg-luxury hover:bg-luxury-dark text-white transition-colors duration-300 text-sm"
              >
                EXPLORE
              </a>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative">
            <ImageReveal
              src="/lovable-uploads/df78c313-2699-4223-88ed-454d92507606.png"
              alt="Modern apartment living room with balcony view"
              aspectRatio="aspect-[3/4]"
              className="rounded-sm overflow-hidden"
              animation="slide-left"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-luxury/10 -z-10 rounded-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
