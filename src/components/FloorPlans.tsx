
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

type FloorPlanType = {
  id: number;
  title: string;
  image: string;
  specs: {
    bedrooms: number;
    bathrooms: number;
    carpark: number;
    internalArea: string;
    externalArea: string;
    totalArea: string;
  };
};

const FloorPlans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<number>(0);
  const [isInView, setIsInView] = useState(false);
  
  // Floor plan data
  const floorPlans: FloorPlanType[] = [
    {
      id: 1,
      title: "Apartment G.02",
      image: "/lovable-uploads/e0788bec-4a9c-4e38-a3a7-6e68dd7ba0bd.png",
      specs: {
        bedrooms: 3,
        bathrooms: 2,
        carpark: 2,
        internalArea: "109sqm",
        externalArea: "31sqm",
        totalArea: "140sqm"
      }
    },
    {
      id: 2,
      title: "Apartment 4.04",
      image: "/lovable-uploads/b85647b3-07e0-47d6-9714-7b2521b6fa25.png",
      specs: {
        bedrooms: 2,
        bathrooms: 2,
        carpark: 1,
        internalArea: "84sqm",
        externalArea: "47sqm",
        totalArea: "131sqm"
      }
    },
    {
      id: 3,
      title: "Apartment 1.08",
      image: "/lovable-uploads/7bfaa2de-6617-453c-bf1d-7116759d7e47.png",
      specs: {
        bedrooms: 1,
        bathrooms: 1,
        carpark: 1,
        internalArea: "53sqm",
        externalArea: "7sqm",
        totalArea: "60sqm"
      }
    }
  ];

  // Intersection Observer for animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('floor-plans');
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section id="floor-plans" className="py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedText
            text="FLOOR PLANS"
            tag="p"
            className="text-luxury text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Choose Your Perfect Space"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Explore our range of thoughtfully designed floor plans tailored to suit various lifestyle needs."
            tag="p"
            className="text-gray-600 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        {/* Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {floorPlans.map((plan, index) => (
            <button
              key={plan.id}
              onClick={() => setActivePlan(index)}
              className={`px-5 py-3 transition-colors duration-300 ${
                activePlan === index
                  ? 'bg-luxury text-white'
                  : 'bg-white border border-gray-200 text-gray-800 hover:bg-gray-100'
              }`}
            >
              <div className="text-left">
                <div className={`font-medium ${activePlan === index ? 'text-white' : 'text-gray-900'}`}>
                  {plan.title}
                </div>
                <div className={`text-sm ${activePlan === index ? 'text-white/80' : 'text-gray-500'}`}>
                  {plan.specs.bedrooms} Bed • {plan.specs.bathrooms} Bath • {plan.specs.totalArea}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Current Floor Plan Display */}
        <div className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-white shadow-md rounded-sm overflow-hidden">
            <div className="md:flex">
              {/* Floor Plan Image */}
              <div className="md:w-3/4">
                <ImageReveal
                  src={floorPlans[activePlan].image}
                  alt={`Floor plan for ${floorPlans[activePlan].title}`}
                  aspectRatio="aspect-auto"
                  className="w-full h-full"
                  animation="fade"
                />
              </div>
              
              {/* Specifications */}
              <div className="md:w-1/4 p-6 md:p-8 bg-gray-50">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  {floorPlans[activePlan].title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.bedrooms}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.bathrooms}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Car Parks</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.carpark}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Internal Area</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.internalArea}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="text-gray-600">External Area</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.externalArea}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Area</span>
                    <span className="font-medium text-gray-900">{floorPlans[activePlan].specs.totalArea}</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-luxury/10 p-4 rounded-sm">
                    <h4 className="text-sm font-medium text-luxury">Legend:</h4>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1">
                      <li><span className="font-medium">CL</span> - Clothesline</li>
                      <li><span className="font-medium">D</span> - Dishwasher</li>
                      <li><span className="font-medium">F</span> - Fridge</li>
                      <li><span className="font-medium">P</span> - Pantry</li>
                      <li><span className="font-medium">S</span> - Storage</li>
                      <li><span className="font-medium">TAP</span> - Outdoor Water Tap</li>
                      <li><span className="font-medium">WM</span> - Washing Machine</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-luxury hover:bg-luxury/90 text-white px-8 py-3 font-medium transition-colors">
              Book a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
