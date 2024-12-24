import React from 'react';
import { Briefcase, Clock, MapPin, DollarSign } from 'lucide-react';

const jobs = [
  {
    title: "Senior Web Developer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$90K - $120K"
  },
  {
    title: "Music Producer",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$70K - $90K"
  },
  {
    title: "Construction Manager",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$80K - $100K"
  },
  {
    title: "Beauty Specialist",
    type: "Full-time",
    location: "Auckland, NZ",
    salary: "$60K - $80K"
  }
];

const Careers = () => {
  return (
    <div className="bg-deep-black text-pure-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Join Our Team</h1>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <ul className="space-y-4 text-off-white">
              <li>• Competitive salary and benefits</li>
              <li>• Professional development opportunities</li>
              <li>• Flexible working arrangements</li>
              <li>• Diverse and inclusive workplace</li>
            </ul>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Team collaboration"
            className="rounded-lg shadow-xl"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="bg-matte-black p-6 rounded-lg hover:transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
              <div className="space-y-2 text-off-white">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>{job.salary}</span>
                </div>
              </div>
              <button className="mt-4 bg-pure-white text-deep-black px-4 py-2 rounded hover:bg-off-white transition-colors duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;