
import React, { useEffect, useState } from 'react';

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
          <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
