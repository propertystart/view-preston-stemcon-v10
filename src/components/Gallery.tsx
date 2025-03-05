
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

type GalleryCategory = 'all' | 'exterior' | 'amenities' | 'kitchens';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, 'all'>;
}

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [isInView, setIsInView] = useState(false);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2835",
      alt: "Modern apartment exterior",
      category: "exterior"
    },
    {
      id: 2,
      src: "/lovable-uploads/0ef9a1d7-761e-47eb-8aa5-fb910f51d7b5.png",
      alt: "Luxury kitchen with timber cabinetry and city view",
      category: "kitchens"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&q=80&w=2070",
      alt: "Rooftop pool amenity",
      category: "amenities"
    },
    {
      id: 4,
      src: "/lovable-uploads/7023f75a-7f82-4dab-901d-fc15d744bba2.png",
      alt: "Modern kitchen with island and dining area",
      category: "kitchens"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=2787",
      alt: "Building facade at sunset",
      category: "exterior"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=2074",
      alt: "Fitness center",
      category: "amenities"
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('gallery');
    if (sectionElement) observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, []);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <AnimatedText
            text="GALLERY"
            tag="p"
            className="text-luxury text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Experience The View Preston"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="Browse our collection of images showcasing the exceptional quality and design of The View Preston."
            tag="p"
            className="text-gray-600 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {['all', 'exterior', 'kitchens', 'amenities'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as GalleryCategory)}
              className={`px-4 py-2 text-sm transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-luxury text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category === 'kitchens' ? 'Modern Kitchens' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <div key={item.id} className={`transition-opacity duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <ImageReveal
                src={item.src}
                alt={item.alt}
                aspectRatio="aspect-[4/3]"
                className="rounded-sm overflow-hidden"
                animation="fade"
                delay={index * 100}
              />
              <p className="mt-2 text-sm text-gray-600">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
