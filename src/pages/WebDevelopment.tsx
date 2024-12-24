import React from 'react';
import { Code, Globe, Smartphone, Database } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites built with modern technologies"
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Web Applications",
    description: "Scalable and responsive web applications"
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "E-commerce Solutions",
    description: "Online store development and maintenance"
  }
];

const WebDevelopment = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Web Development Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Web development"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Digital Solutions</h2>
            <p className="text-off-white">
              We create cutting-edge web solutions using the latest technologies. 
              Our team specializes in building responsive, secure, and scalable 
              applications for businesses of all sizes.
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

export default WebDevelopment;