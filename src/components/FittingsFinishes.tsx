
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaletteIcon } from 'lucide-react';
import ImageReveal from './ImageReveal';

type RoomType = 'kitchen' | 'bathroom' | 'living' | 'laundry';

const FittingsFinishes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RoomType | null>(null);

  const handleTabChange = (value: string) => {
    setActiveTab(prev => prev === value as RoomType ? null : value as RoomType);
  };

  return (
    <section id="fittings-finishes" className="py-20 md:py-32 bg-noir">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <AnimatedText
            text="FITTINGS & FINISHES"
            tag="p"
            className="text-noir-gold text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Premium Quality Specifications"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="The View Preston offers exceptional finishes throughout, combining style and functionality."
            tag="p"
            className="text-gray-300 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        <Tabs value={activeTab || ""} onValueChange={handleTabChange} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-noir-dark p-1 border border-noir-gold/10">
              <TabsTrigger 
                value="kitchen" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'kitchen' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger 
                value="bathroom" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'bathroom' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Bathroom & Ensuite
              </TabsTrigger>
              <TabsTrigger 
                value="living" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'living' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Living & Bedroom
              </TabsTrigger>
              <TabsTrigger 
                value="laundry" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'laundry' ? 'text-noir-dark bg-noir-gold' : 'text-gray-300'
                )}
              >
                Laundry & External
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Message when no tab is selected */}
          {!activeTab && (
            <div className="text-center my-16">
              <p className="text-white text-lg">Please select a category to view specifications and images.</p>
            </div>
          )}

          {/* Kitchen Tab */}
          {activeTab === 'kitchen' && (
            <TabsContent value="kitchen" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Kitchen, Island Bench, Pantry</h3>
                  </div>
                  
                  {/* Detailed Kitchen Image - REPLACED WITH NEW IMAGE */}
                  <div className="mt-2 mb-8">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/cc1fb6b3-d04c-48a8-9aa8-ebf3dccef397.png" 
                        alt="Kitchen, Island Bench, Pantry Specifications"
                        className="w-full"
                        aspectRatio="aspect-auto"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Items and descriptions shown are for theme and illustration purpose only. The developer reserves the right to make changes or substitute with alternatives should it be needed.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Bathroom Tab */}
          {activeTab === 'bathroom' && (
            <TabsContent value="bathroom" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Bathroom, Ensuite</h3>
                  </div>
                  
                  {/* Replacing the image with the new one */}
                  <div className="mt-2 mb-8">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/d4f81801-ce56-43c3-bdde-5fc6ff09c9f5.png" 
                        alt="Bathroom and Ensuite Specifications"
                        className="w-full"
                        aspectRatio="aspect-auto"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Items and descriptions shown are for theme and illustration purpose only. The developer reserves the right to make changes or substitute with alternatives should it be needed.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Living Tab - REPLACING WITH NEW IMAGE */}
          {activeTab === 'living' && (
            <TabsContent value="living" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Living / Bedroom</h3>
                  </div>
                  
                  {/* Replacing with the new image */}
                  <div className="mt-2 mb-8">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/5c1daee2-6a12-4111-9fff-302c8288a89d.png" 
                        alt="Living and Bedroom Specifications"
                        className="w-full"
                        aspectRatio="aspect-auto"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Items and descriptions shown are for theme and illustration purpose only. The developer reserves the right to make changes or substitute with alternatives should it be needed.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}

          {/* Laundry Tab */}
          {activeTab === 'laundry' && (
            <TabsContent value="laundry" className="mt-4">
              <div className="bg-noir-dark rounded-sm shadow-md overflow-hidden border border-noir-gold/20">
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <PaletteIcon className="text-noir-gold h-6 w-6" />
                    <h3 className="text-2xl font-medium text-white">Laundry / External</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Laundry Trough */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Laundry Trough Cabinet</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Drop-in Type</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Drop-in type stainless steel laundry trough w/ tap hole<br />
                          Finish: Stainless Steel
                        </p>
                      </div>
                    </div>
                    
                    {/* Laundry Mixer */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Laundry Mixer</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Swivel Laundry Faucet</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Standard laundry faucet swivel type<br />
                          Finish: Chrome
                        </p>
                      </div>
                    </div>
                    
                    {/* Window */}
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-lg font-medium text-white">Window</h4>
                        <p className="text-sm font-semibold uppercase text-noir-gold mt-1">Double Glazing</p>
                        <p className="text-sm text-gray-300 mt-1">
                          Aluminium extrusions double-glazing window system<br />
                          Finish: Powdercoat / Glazing
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Detailed Laundry & External Image */}
                  <div className="mt-12">
                    <div className="border border-noir-gold/30 rounded-md overflow-hidden">
                      <ImageReveal 
                        src="/lovable-uploads/cb85fd16-8c63-4b3c-8f5b-6c46c41aea96.png" 
                        alt="Detailed Laundry & External Specifications"
                        className="w-full"
                        aspectRatio="aspect-[2/1]"
                        animation="fade"
                      />
                    </div>
                    <p className="text-xs text-center text-gray-400 mt-2">
                      Detailed laundry and external specifications and finishes
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          )}
        </Tabs>

        <div className="text-center mt-8 text-sm text-gray-400">
          * Items and descriptions shown are for theme and illustration purpose only. <br />
          The developer reserves the right to make changes or substitute with alternatives should it be needed.
        </div>
      </div>
    </section>
  );
};

export default FittingsFinishes;
