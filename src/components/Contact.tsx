
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Thank you for your enquiry', {
      description: 'We will be in touch with you shortly.'
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <AnimatedText
            text="CONTACT"
            tag="p"
            className="text-luxury text-sm tracking-widest"
            animation="slide-up"
          />
          <AnimatedText
            text="Register Your Interest"
            tag="h2"
            className="text-3xl md:text-4xl font-light text-gray-900 tracking-tight mt-3"
            animation="slide-up"
            delay={100}
          />
          <div className="h-px w-16 bg-luxury/30 mt-6 mb-6"></div>
          <AnimatedText
            text="To learn more about The View Preston or to book a private appointment, please fill out the form and one of our sales consultants will be in touch with you shortly."
            tag="p"
            className="text-gray-600 leading-relaxed mb-8"
            animation="slide-up"
            delay={200}
          />
          
          <div className="space-y-4 mt-8">
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
        
        <div className="relative">
          <div className="p-6 bg-white shadow-sm border border-gray-100 rounded-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-0 focus:border-luxury transition duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-0 focus:border-luxury transition duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-0 focus:border-luxury transition duration-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-none focus:ring-0 focus:border-luxury transition duration-200"
                  required
                />
              </div>
              
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-3 bg-luxury text-white text-sm transition-colors duration-300",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-luxury-dark"
                  )}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT ENQUIRY"}
                </button>
              </div>
            </form>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-luxury/10 -z-10 rounded-sm"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
