
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Tool replaced with Wrench to resolve SyntaxError
import { Phone, ArrowRight, Shield, Wrench, Navigation } from 'lucide-react';
import Hero from '../components/sections/Hero';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Testimonials from '../components/sections/Testimonials';
import CTASection from '../components/sections/CTASection';
import ContactForm from '../components/sections/ContactForm';
import { PHONE_NUMBER } from '../constants';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      
      {/* On-Site Repair Highlight */}
      <section className="py-24 bg-white/5 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-6">Mechanical Expertise</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                  On-Site Car <br /> <span className="text-accent italic">Repair Specialists</span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Most breakdown situations in Dubai don't actually require a tow. Our mobile workshops are equipped with professional diagnostic tools to fix engine, electrical, and cooling issues right where you are parked.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Diagnosis", icon: Wrench, desc: "Accurate mechanical fault finding." },
                    { title: "Fast Fix", icon: Shield, desc: "On-site belt and hose replacement." }
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="text-accent mt-1">
                        <feat.icon size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold uppercase text-sm mb-1">{feat.title}</div>
                        <p className="text-gray-500 text-xs">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1597439286443-41a457176472?auto=format&fit=crop&q=80&w=800" 
                  alt="Mechanic repairing car engine on-site in Dubai" 
                  className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <CTASection />

      {/* Emergency Request Section */}
      <section id="contact-home" className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-5/12">
              <div className="sticky top-32">
                <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-4">Urgent Dispatch</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                  Get Professional <br /> Support Now
                </h3>
                <p className="text-gray-400 mb-12 text-lg">
                  Submit your coordinates and problem description. Our digital dispatch center identifies the closest technician to minimize your wait time.
                </p>
                
                <div className="space-y-6">
                  <motion.a 
                    whileHover={{ x: 10 }}
                    href={`tel:${PHONE_NUMBER}`} 
                    className="flex items-center space-x-6 p-8 border border-white/10 rounded-2xl bg-card hover:border-accent transition-all group"
                  >
                    <div className="w-16 h-16 rounded-xl bg-accent text-black flex items-center justify-center">
                      <Phone size={32} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">Emergency Line</div>
                      <div className="text-2xl font-black text-white group-hover:text-accent transition-colors">
                        {PHONE_NUMBER}
                      </div>
                    </div>
                  </motion.a>
                  
                  <div className="flex items-center space-x-6 p-8 border border-white/10 rounded-2xl bg-white/5">
                    <div className="w-16 h-16 rounded-xl bg-white/10 text-white flex items-center justify-center">
                      <Navigation size={32} />
                    </div>
                    <div>
                      <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">Average Reach</div>
                      <div className="text-2xl font-black text-white uppercase italic">25 - 30 Minutes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 p-8 md:p-16 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)]"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
