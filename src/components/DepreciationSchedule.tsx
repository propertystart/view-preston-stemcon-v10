
import React from 'react';
import ImageReveal from './ImageReveal';
import AnimatedText from './AnimatedText';

const DepreciationSchedule: React.FC = () => {
  return (
    <section id="depreciation-schedule" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-noir">
      <div className="text-center mb-12">
        <AnimatedText
          text="DEPRECIATION SCHEDULE"
          tag="p"
          className="text-noir-gold text-sm tracking-widest"
          animation="slide-up"
        />
        <AnimatedText
          text="Tax Benefits For Property Investors"
          tag="h2"
          className="text-3xl md:text-4xl font-light text-white tracking-tight mt-3"
          animation="slide-up"
          delay={100}
        />
        <div className="h-px w-16 bg-noir-gold/30 mx-auto mt-6 mb-6"></div>
      </div>
      
      <div className="space-y-12 max-w-4xl mx-auto">
          <div className="text-gray-300 p-4 text-center">
            Property investors can claim significant tax deductions in the first year of ownership.
          </div>
        </div>
        
        {/* Concept of Depreciation */}
        <div className="bg-noir-light p-6 rounded-sm shadow-lg">
          <h3 className="text-xl font-medium text-noir-gold mb-6 text-center">Basic Concept of Depreciation</h3>
          <p className="text-white mb-6 text-lg text-center">(CAPITAL WORKS: DIVISION 43)</p>
          
          <div className="space-y-6 text-gray-300">
            <p>
              Property investors are in the business of making money, and as with every business the Australian Taxation Office allows you to claim depreciation as a tax deduction.
            </p>
            
            <p>
              Depreciation is the accounting method used for calculating the loss in value of a building and its fixtures & fittings as the property gets older.
            </p>
            
            <p>
              With a Tax Depreciation Schedule, you can claim that loss on rental properties as a deduction in your tax return.
            </p>
            
            <p>
              By estimating the value of each item, an investor can claim $3,020 in an average kitchen in the first full year alone. But depreciation isn't just limited to the kitchen, it applies to every room of the house plus the outside areas. For new strata tax return every year until the cost of the asset is fully written off.
            </p>
            
            <p>
              For strata properties, your portion of the common areas can also be claimed including pools, gyms and car parks.
            </p>
            
            <p>
              Having a Tax Depreciation Schedule helps increase your tax return and generate additional cash flow that can be used to help finance your next investment!
            </p>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium text-white mb-4 text-center">Depreciation Over Time</h4>
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-sm max-w-lg">
                <div className="text-noir text-center text-sm mb-2">
                  <p className="font-medium">Construction Cost: $400,000</p>
                  <p className="font-medium">Depreciation per year: $10,000</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-600 mb-1">YEARS SINCE CONSTRUCTION</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Estimated Tax Deductions */}
        <div className="bg-noir-light p-6 rounded-sm shadow-lg">
          <h3 className="text-xl font-medium text-noir-gold mb-6 text-center">Estimated Tax Deductions</h3>
          <p className="text-white mb-6 text-center">Here are some examples of the tax deductions available to The View at 3 Arthur Street, Preston, VIC</p>
          
          <ImageReveal
            src="/lovable-uploads/7b545d25-5d36-4785-a79d-2dcb30519f97.png"
            alt="Estimated tax deductions table"
            className="w-full rounded-sm shadow-inner"
            aspectRatio="aspect-auto"
            animation="slide-up"
          />
          
          <p className="text-white text-sm mt-4 text-center">*DEDUCTIONS FOR PLANT & EQUIPMENT ARE ONLY AVAILABLE WHEN BUYING A BRAND NEW PROPERTY</p>
        </div>
        
        <div className="bg-noir-gold/10 p-6 rounded-sm border border-noir-gold/20">
          <h4 className="text-xl font-medium text-white mb-4 text-center">Maximize Your Investment Returns</h4>
          <p className="text-gray-300 text-center">Consult with a qualified tax professional to prepare a detailed depreciation schedule for your specific apartment at The View Preston.</p>
        </div>
      </div>
    </section>
  );
};

export default DepreciationSchedule;
