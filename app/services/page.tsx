
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SERVICES, PHONE_NUMBER } from '../../constants';

const ServicesPage: React.FC = () => {
  return (
    <main className="pt-24 bg-black">
      <section className="py-24 bg-dark border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8"
          >
            Specialist <span className="text-accent">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            From emergency towing to complex mechanical repairs at the roadside, our team provides comprehensive automotive support across all areas of Dubai.
          </motion.p>
        </div>
      </section>

      {/* Main Service Sections */}
      <section className="py-24">
        <div className="container mx-auto px-4 space-y-40">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="lg:w-1/2 group"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
                  <img 
                    src={service.image} 
                    alt={`${service.title} in Dubai`} 
                    className="w-full aspect-[4/3] object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <div className="bg-accent text-black px-4 py-1 text-[10px] font-black uppercase mb-3 inline-block rounded">
                      Premium Support
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <div className="lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-accent font-black uppercase tracking-widest text-sm mb-6 flex items-center space-x-3">
                    <ShieldCheck size={18} />
                    <span>Certified Service</span>
                  </h2>
                  <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    {service.longDescription || service.description} Our team utilizes modern tools and GPS dispatch to reach you in the minimum time possible, whether you are in a residential area or on a major highway.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {["On-Site Diagnosis", "Sub-30 Min Reach", "Certified Technicians", "Upfront Pricing"].map(benefit => (
                      <div key={benefit} className="flex items-center space-x-3 text-white/80 font-bold text-xs bg-white/5 p-5 rounded-2xl border border-white/5">
                        <CheckCircle2 size={16} className="text-accent" />
                        <span className="uppercase tracking-widest">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center space-x-4 bg-accent text-black font-black uppercase px-12 py-5 rounded-2xl transition-all shadow-[0_15px_30px_rgba(255,193,7,0.3)]"
                  >
                    <span>Request Service</span>
                    <ArrowRight size={20} />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Footer Text */}
      <section className="py-24 bg-dark border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-black text-white uppercase mb-10 tracking-tight">Dubai Professional Roadside & Repair Network</h2>
          <div className="text-gray-500 space-y-8 text-sm leading-relaxed text-justify md:text-center">
            <p>
              When you require car breakdown repair Dubai services, you need a provider that combines speed with technical proficiency. Our team specializes in emergency towing Dubai and on-site car battery replacement Dubai. We understand the unique challenges of the UAE climate and its impact on vehicle engines and cooling systems.
            </p>
            <p>
              Looking for a flat tyre fix Dubai or car not starting repair Dubai? Our mobile units are fully equipped for immediate roadside assistance. We cover all major sectors including Dubai Marina, Downtown, Al Barsha, and Deira. Our commitment is to provide affordable car recovery Dubai without compromising on professional safety protocols.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
