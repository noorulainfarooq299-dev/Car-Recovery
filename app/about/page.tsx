
import React from 'react';
import { motion } from 'framer-motion';
// Fixed: Tool replaced with Wrench to resolve SyntaxError
import { ShieldCheck, Wrench, Users, Target, Clock } from 'lucide-react';
import { COMPANY_NAME, TAGLINE } from '../../constants';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 bg-black">
      {/* Sub-hero */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8"
          >
            Our <span className="text-accent">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            {TAGLINE}. For over a decade, we have redefined roadside assistance by combining recovery logistics with high-level mechanical expertise.
          </motion.p>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] font-black text-[20vw] vertical-text leading-none select-none pointer-events-none">
          ABOUT
        </div>
      </section>

      {/* Content Block */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-accent font-black uppercase tracking-widest text-sm mb-6">Foundations</h2>
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                  Engineering Safety <br /> On Every Road
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {COMPANY_NAME} was established to solve a critical gap in the Dubai market: the need for mechanics who come to you. While traditional companies focus solely on towing, we focus on getting your car back to operational status immediately.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm">Expert Team</h4>
                  <p className="text-gray-500 text-xs">Our mechanics are certified across European and Asian vehicle platforms.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent text-black flex items-center justify-center">
                    <Target size={24} />
                  </div>
                  <h4 className="text-white font-bold uppercase text-sm">Strategic Dispatch</h4>
                  <p className="text-gray-500 text-xs">Proprietary GPS routing for sub-30 minute response times.</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
                alt="Dubai Roadside Assistance Professional Team"
                className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
              />
              <div className="absolute -bottom-12 -left-12 bg-card p-12 rounded-[2rem] border border-white/5 shadow-2xl hidden md:block">
                <div className="text-5xl font-black text-accent mb-2">100%</div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest">In-Site Repair Focus</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl font-black uppercase tracking-tight">Core Operational Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", icon: ShieldCheck, desc: "We provide clear diagnosis and fixed pricing before any repair begins." },
              { title: "Precision", icon: Wrench, desc: "Using advanced diagnostic computers to identify issues with surgical accuracy." },
              { title: "Commitment", icon: Clock, desc: "24/7 availability because vehicle failures do not follow a schedule." }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-card rounded-3xl border border-white/5 text-center group transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-accent group-hover:text-black transition-all">
                  <v.icon size={32} />
                </div>
                <h3 className="text-white font-black text-xl uppercase mb-4 tracking-tighter">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
