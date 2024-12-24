import React from 'react';
import { Hammer, Truck, Home, HardHat } from 'lucide-react';

const services = [
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Demolition",
    description: "Professional demolition services for residential and commercial properties"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Site Clearing",
    description: "Complete site preparation and waste removal"
  },
  {
    icon: <Home className="h-8 w-8" />,
    title: "Construction",
    description: "Building and renovation services"
  },
  {
    icon: <HardHat className="h-8 w-8" />,
    title: "General Labour",
    description: "Skilled workforce for various construction needs"
  }
];

const Labour = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Construction & Labour Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Construction site"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Professional Construction Solutions</h2>
            <p className="text-off-white">
              Our experienced team provides comprehensive construction and labour services, 
              from demolition to building completion. We prioritize safety, efficiency, and 
              quality in every project.
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

export default Labour;