import React from 'react';
import { Link } from 'react-router-dom';
import ServiceBanners from './ServiceBanners';

const services = [{}, {}];

const Services = () => {
  return (
    <div className="bg-deep-black py-20">
      <ServiceBanners />
      <div className="container mx-auto px-6">
        {services.map((service, index) => (
          <Link key={index} to={service.link}>
            <div className="mb-16 hover:opacity-80 transition-opacity">
              <h2
                className={`service-title ${
                  service.gradient ? 'gradient-text' : 'text-pure-white'
                }`}
              >
                {service.title}
              </h2>
              <p className="text-xl text-off-white ml-2">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
