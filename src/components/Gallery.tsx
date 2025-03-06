
import React, { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';
import ImageReveal from './ImageReveal';

type GalleryCategory = 'all' | 'livingrooms' | 'bedrooms' | 'kitchens' | 'bathrooms';

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
      src: "/lovable-uploads/80e2c3cf-f133-47c3-aa79-43906bced854.png",
      alt: "Contemporary living room with balcony access and city views",
      category: "livingrooms"
    },
    {
      id: 2,
      src: "/lovable-uploads/0ef9a1d7-761e-47eb-8aa5-fb910f51d7b5.png",
      alt: "Luxury kitchen with timber cabinetry and city view",
      category: "kitchens"
    },
    {
      id: 3,
      src: "/lovable-uploads/a325c6c9-52f1-4c4d-adc6-5c56e6921288.png",
      alt: "Master bedroom with city views and private balcony",
      category: "bedrooms"
    },
    {
      id: 4,
      src: "/lovable-uploads/7023f75a-7f82-4dab-901d-fc15d744bba2.png",
      alt: "Modern kitchen with island and dining area",
      category: "kitchens"
    },
    {
      id: 5,
      src: "/lovable-uploads/63139a0b-aeac-43fc-84ea-f18c4933c5c4.png",
      alt: "Open plan living room with kitchen and dining area",
      category: "livingrooms"
    },
    {
      id: 6,
      src: "/lovable-uploads/acb28c92-2a8f-4d68-91a7-02402859602a.png",
      alt: "Spacious bedroom with ensuite bathroom",
      category: "bedrooms"
    },
    {
      id: 7,
      src: "/lovable-uploads/cc69496e-22fd-4111-baba-f384d769677f.png",
      alt: "Elegant bathroom with vessel sink and fluted glass shower",
      category: "bathrooms"
    },
    {
      id: 8,
      src: "/lovable-uploads/57a1ae6e-261a-46f6-938c-5ef4bcfe6806.png",
      alt: "Luxury ensuite with double vanity and freestanding bath",
      category: "bathrooms"
    },
    {
      id: 9,
      src: "/lovable-uploads/9523b9dd-0a31-478c-93a6-c98d36c42f85.png",
      alt: "Spacious balcony with dining table and panoramic city views",
      category: "livingrooms"
    },
    {
      id: 10,
      src: "/lovable-uploads/d82448b0-41a6-46a7-b4d2-e996cd7193e4.png",
      alt: "Contemporary kitchen with timber cabinetry and breakfast bar",
      category: "kitchens"
    },
    {
      id: 11,
      src: "/lovable-uploads/4ac60df3-cfc9-48e6-aeb3-3b0633908177.png",
      alt: "Modern bedroom with mirrored wardrobe and balcony access",
      category: "bedrooms"
    },
    {
      id: 12,
      src: "/lovable-uploads/78e68ecf-5336-494e-b55d-225fedca6938.png",
      alt: "Luxury bathroom with freestanding bath and natural stone tiles",
      category: "bathrooms"
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
          {['all', 'livingrooms', 'kitchens', 'bedrooms', 'bathrooms'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as GalleryCategory)}
              className={`px-4 py-2 text-sm transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-luxury text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              {category === 'kitchens' 
                ? 'Modern Kitchens' 
                : category === 'bedrooms'
                  ? 'Generous Bedrooms'
                  : category === 'bathrooms'
                    ? 'Modern Bathroom Design'
                    : category === 'livingrooms' 
                      ? 'Luxury Living Rooms'
                      : category.charAt(0).toUpperCase() + category.slice(1)}
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
