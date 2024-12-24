import React from 'react';
import { Scissors, Home, Paintbrush, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: "Beauty Services",
    description: "Professional hair styling and beauty treatments"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Home Makeover",
    description: "Complete home renovation and decoration"
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Interior Design",
    description: "Custom interior design solutions"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Spa Services",
    description: "Relaxing spa treatments and therapies"
  }
];

const Beautification = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Beautification Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Salon interior"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Transform Your Space & Style</h2>
            <p className="text-off-white">
              From personal beauty services to complete home makeovers, our expert team 
              delivers premium beautification services tailored to your needs.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-matte-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div className="text-pure-white mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-off-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beautification;