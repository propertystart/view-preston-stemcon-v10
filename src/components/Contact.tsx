
import React, { useState } from 'react';
import AnimatedText from './AnimatedText';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

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
    
    try {
      // Store the contact submission in Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null, // Handle empty phone (optional field)
            message: formData.message
          }
        ]);
      
      if (error) {
        console.error('Error submitting form:', error);
        toast.error('There was an error sending your message. Please try again.');
        setIsSubmitting(false);
        return;
      }
      
      // Success
      toast.success('Your message has been sent. We will contact you shortly.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            text="For more information about The View Preston, please contact our sales team using the details below or fill out the form."
            tag="p"
            className="text-white leading-relaxed mb-8 text-center"
            animation="slide-up"
            delay={200}
          />
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white shadow-sm border border-gray-100 rounded-sm p-8">
              <div className="space-y-6">                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-luxury"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Contact Us</p>
                    <p className="text-sm text-gray-600 mt-1">Peter Anastas<br />peter@melbournec21.com.au<br />0419 930 959</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-sm border border-gray-100 rounded-sm p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Your phone number"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="How can we help you?" 
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-luxury hover:bg-luxury/90 text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
