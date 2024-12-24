import React from 'react';
import ContactForm from '../components/common/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@billsco.co.nz</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+64 22 075 5223</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Auckland, New Zealand</span>
              </div>
            </div>
            <ContactForm />
          </div>

          <div className="bg-matte-black p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
