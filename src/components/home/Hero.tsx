import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnerLogos from './PartnerLogos';

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Digital Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 to-deep-black/70" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="text-pure-white">Your Vision</span><br />
              <span className="text-pure-white">Our</span><br />
              <span className="gradient-text">Resolution</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 text-off-white max-w-2xl leading-relaxed">
              From Craft to Enchantment: Enhancing Web Implementation Harmoniously
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link 
                to="/contact" 
                className="button-gradient text-pure-white px-8 py-4 rounded-lg inline-flex items-center justify-center text-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start Project <ArrowRight className="ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent border-2 border-pure-white text-pure-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-center font-medium"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
      <PartnerLogos />
    </>
  );
};

export default Hero;