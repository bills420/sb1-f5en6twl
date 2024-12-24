import React from 'react';
import PaymentMethods from './PaymentMethods';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-matte-black text-pure-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <FooterLinks />
          <div className="space-y-8">
            <PaymentMethods />
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-off-white">info@billsco.co.nz</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-off-white text-sm">
              © {new Date().getFullYear()} Bills Co. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm text-off-white hover:text-pure-white">Privacy Policy</a>
              <a href="#" className="text-sm text-off-white hover:text-pure-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;