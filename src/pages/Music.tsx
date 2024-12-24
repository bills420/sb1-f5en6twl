import React from 'react';
import { Music2, Mic, Radio, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    icon: <Music2 className="h-8 w-8" />,
    title: "Beat Production",
    description: "Custom beat creation and production"
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Recording",
    description: "Professional recording services"
  },
  {
    icon: <Radio className="h-8 w-8" />,
    title: "Mixing & Mastering",
    description: "Industry-standard audio processing"
  },
  {
    icon: <HeadphonesIcon className="h-8 w-8" />,
    title: "Sound Design",
    description: "Custom sound effects and atmospheres"
  }
];

const Music = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Music Production Services</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Music studio"
            className="rounded-lg shadow-xl"
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Professional Music Production</h2>
            <p className="text-off-white">
              From beat making to full production, our state-of-the-art studio 
              and experienced producers help bring your musical vision to life.
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

export default Music;