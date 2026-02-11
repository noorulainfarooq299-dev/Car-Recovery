
import React from 'react';
import { SERVICES, PHONE_NUMBER } from '../constants';

const Services: React.FC = () => {
  return (
    <main className="pt-24 bg-black">
      <section className="py-20 bg-dark border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            Professional <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            From emergency towing to complex desert recoveries, we provide the full spectrum of roadside assistance in Dubai.
          </p>
        </div>
      </section>

      {/* SEO Optimized Service Blocks */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-32">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-accent font-black uppercase tracking-widest text-sm mb-4">Premium Service</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                  {service.title} <br /> In Dubai
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {service.longDescription || service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {["Fast Arrival", "Expert Technicians", "Modern Equipment", "Fair Pricing"].map(benefit => (
                    <div key={benefit} className="flex items-center space-x-3 text-white font-bold text-sm bg-white/5 p-4 rounded border border-white/5">
                      <span className="text-accent">⚡</span>
                      <span className="uppercase">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-block bg-accent text-black font-black uppercase px-10 py-4 rounded hover:bg-white transition-all transform hover:scale-105"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final SEO Text */}
      <section className="py-24 bg-dark border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-white uppercase mb-8">Dubai’s Top Rated Roadside Support</h2>
          <div className="text-gray-500 space-y-6 text-sm leading-relaxed">
            <p>
              Looking for "car recovery near me" in Dubai? Our specialized teams are available in Dubai Marina, Downtown, Al Barsha, and beyond. We provide cheap car recovery Dubai motorists can trust without compromising on quality or safety.
            </p>
            <p>
              Our services include battery replacement Dubai, flat tire fix, and high-end luxury sports car towing. We utilize the latest GPS tracking to ensure our technicians reach you in under 30 minutes, no matter where you are in the city.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
