
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PaletteIcon } from 'lucide-react';
import ImageReveal from './ImageReveal';

type RoomType = 'kitchen' | 'bathroom' | 'living' | 'laundry';

const FittingsFinishes: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RoomType>('kitchen');

  return (
    <section id="fittings-finishes" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <AnimatedText
            text="FITTINGS & FINISHES"
            tag="p"
            className="text-luxury text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Premium Quality Specifications"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mx-auto mt-6 mb-6"></div>
          <AnimatedText
            text="The View Preston offers exceptional finishes throughout, combining style and functionality."
            tag="p"
            className="text-gray-600 max-w-2xl mx-auto"
            animation="slide-up"
            delay={200}
          />
        </div>

        <Tabs defaultValue="kitchen" className="w-full" onValueChange={(value) => setActiveTab(value as RoomType)}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-gray-100 p-1">
              <TabsTrigger 
                value="kitchen" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'kitchen' ? 'text-white bg-luxury' : 'text-gray-700'
                )}
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger 
                value="bathroom" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'bathroom' ? 'text-white bg-luxury' : 'text-gray-700'
                )}
              >
                Bathroom & Ensuite
              </TabsTrigger>
              <TabsTrigger 
                value="living" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'living' ? 'text-white bg-luxury' : 'text-gray-700'
                )}
              >
                Living & Bedroom
              </TabsTrigger>
              <TabsTrigger 
                value="laundry" 
                className={cn(
                  "px-4 py-2 text-sm transition-colors duration-200",
                  activeTab === 'laundry' ? 'text-white bg-luxury' : 'text-gray-700'
                )}
              >
                Laundry & External
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Kitchen Tab */}
          <TabsContent value="kitchen" className="mt-4">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <PaletteIcon className="text-luxury h-6 w-6" />
                  <h3 className="text-2xl font-medium text-gray-900">Kitchen, Island Bench, Pantry</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Appliances */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Appliances</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Premium Quality Appliances Set</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Next generation appliances offering cutting edge, energy efficiency and multi-cooking
                        technology. The appliances are designed to enhance cooking performance perfectly combining
                        innovative design and premium performance for all your cooking and cleaning needs.
                      </p>
                    </div>
                  </div>
                  
                  {/* Kitchen Sink */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Kitchen Sink</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Undermount Sink</p>
                      <p className="text-sm text-gray-600 mt-1">
                        700mm (nom.) 1 & 1/2 or double bowl Undermount Sink<br />
                        Finish: Brushed Gold
                      </p>
                    </div>
                  </div>
                  
                  {/* Kitchen Mixer */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Kitchen Mixer</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Tall Sink Mixer</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Tall kitchen mixer fit for kitchen sink<br />
                        Finish: Black
                      </p>
                    </div>
                  </div>
                  
                  {/* Benchtop & Splashback */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Benchtop & Splashback</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Reconstituted Stone</p>
                      <p className="text-sm text-gray-600 mt-1">
                        20mm (nom.) thick reconstituted stone in light colour<br />
                        Finish: Smooth
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature Light */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Feature Light</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">LED Strip Lighting</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Featured LED strip lighting under O/H cabinets<br />
                        Finish: Per Light fitting
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Detailed Kitchen Image */}
                <div className="mt-12">
                  <div className="border border-gray-200 rounded-md overflow-hidden">
                    <ImageReveal 
                      src="/lovable-uploads/d3feac66-49b1-4345-8401-0a6f91519e8b.png" 
                      alt="Detailed Kitchen Specifications"
                      className="w-full"
                      aspectRatio="aspect-[2/1]"
                      animation="fade"
                    />
                  </div>
                  <p className="text-xs text-center text-gray-500 mt-2">
                    Detailed kitchen specifications and finishes
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Bathroom Tab */}
          <TabsContent value="bathroom" className="mt-4">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <PaletteIcon className="text-luxury h-6 w-6" />
                  <h3 className="text-2xl font-medium text-gray-900">Bathroom, Ensuite</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Basin / Benchtop */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Basin / Benchtop</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Round Ceramic</p>
                      <p className="text-sm text-gray-600 mt-1">
                        White ceramic above counter round basin<br />
                        Finish: Ceramic
                      </p>
                    </div>
                  </div>
                  
                  {/* Basin Mixer */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Basin Mixer</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Tall Bench-Mount</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Bench-mount basin mixer to all vanities<br />
                        Finish: Black
                      </p>
                    </div>
                  </div>
                  
                  {/* Toilet Suite */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Toilet Suite</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Toilet Pan w/ In-wall Cistern</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Ceramic toilet pan & in-wall cistern with chrome button/plate<br />
                        Finish: Ceramic/Chrome
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Living Tab */}
          <TabsContent value="living" className="mt-4">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <PaletteIcon className="text-luxury h-6 w-6" />
                  <h3 className="text-2xl font-medium text-gray-900">Living / Bedroom</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Timber Floor */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Timber Floor (Living)</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Engineered Timber</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Floating engineered oak timber floorboards w/ underlay<br />
                        Finish: Oak Timber
                      </p>
                    </div>
                  </div>
                  
                  {/* Carpet Floor */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Carpet Floor (Bedroom)</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Plush/Textured</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Fire compliant carpet finish in grey colour w/ underlay<br />
                        Finish: Plush / Textured
                      </p>
                    </div>
                  </div>
                  
                  {/* Robe Doors */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Robe Doors</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Mirror Sliding Door</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Black frame with top/bottom sliding tracks and side jambs<br />
                        Finish: Mirror Finish / Black
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Laundry Tab */}
          <TabsContent value="laundry" className="mt-4">
            <div className="bg-white rounded-sm shadow-md overflow-hidden">
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <PaletteIcon className="text-luxury h-6 w-6" />
                  <h3 className="text-2xl font-medium text-gray-900">Laundry / External</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Laundry Trough */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Laundry Trough Cabinet</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Drop-in Type</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Drop-in type stainless steel laundry trough w/ tap hole<br />
                        Finish: Stainless Steel
                      </p>
                    </div>
                  </div>
                  
                  {/* Laundry Mixer */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Laundry Mixer</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Swivel Laundry Faucet</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Standard laundry faucet swivel type<br />
                        Finish: Chrome
                      </p>
                    </div>
                  </div>
                  
                  {/* Window */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-medium">Window</h4>
                      <p className="text-sm font-semibold uppercase text-luxury mt-1">Double Glazing</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Aluminium extrusions double-glazing window system<br />
                        Finish: Powdercoat / Glazing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 text-sm text-gray-500">
          * Items and descriptions shown are for theme and illustration purpose only. <br />
          The developer reserves the right to make changes or substitute with alternatives should it be needed.
        </div>
      </div>
    </section>
  );
};

export default FittingsFinishes;
