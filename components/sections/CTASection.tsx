
import React from 'react';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../../constants';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-black aspect-square" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-black text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Need Immediate <br /> Car Recovery?
            </h2>
            <p className="text-black/80 text-xl font-bold uppercase mb-0">
              Don't wait in the heat. Our nearest truck is just minutes away.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-black text-white px-10 py-5 rounded font-black text-2xl uppercase shadow-2xl hover:bg-white hover:text-black transition-all flex items-center justify-center space-x-3"
            >
              <span>{PHONE_NUMBER}</span>
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-10 py-5 rounded font-black text-2xl uppercase shadow-2xl hover:bg-green-500 transition-all flex items-center justify-center space-x-3"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
