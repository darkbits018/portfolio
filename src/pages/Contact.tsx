import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="text-[#E6C068]" />,
      label: 'Email',
      value: 'contact@rocktim.dev',
      link: 'mailto:contact@rocktim.dev'
    },
    {
      icon: <Phone className="text-[#E6C068]" />,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="text-[#E6C068]" />,
      label: 'Location',
      value: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,+CA'
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-12">
          <h2 className="text-4xl md:text-5xl font-bold animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-[#E6C068] absolute -top-4 animate-on-scroll opacity-0 transform translate-x-4 transition-all duration-700 delay-300"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-400">
            <p className="text-gray-300 mb-8 max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={info.label}
                  className="flex items-start space-x-4 animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700"
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#22262B]">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{info.label}</h3>
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#E6C068] transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0 transform translate-y-4 transition-all duration-700 delay-600">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#22262B] border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#E6C068] transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#22262B] border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#E6C068] transition-colors duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#22262B] border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-[#E6C068] transition-colors duration-300"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-transparent border border-[#E6C068] text-[#E6C068] hover:bg-[#E6C068] hover:text-[#1A1D21] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitMessage && (
                <div className="text-green-400 mt-4">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};