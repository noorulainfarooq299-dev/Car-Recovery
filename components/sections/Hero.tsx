
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1563220497-62f92f24806a?auto=format&fit=crop&q=80&w=1920" 
          alt="Emergency Roadside Assistance Dubai"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <ShieldCheck size={16} className="text-accent" />
            <span className="text-accent text-xs font-black uppercase tracking-widest">
              Live: 24/7 Professional Dispatch Active
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] uppercase mb-8 tracking-tighter">
            24/7 Car Recovery <br />
            <span className="text-accent italic">& On-Site Repair</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed font-medium">
            Emergency roadside assistance, battery replacement, flat tyre fixing and expert mechanical repair anywhere in Dubai within <span className="text-white font-bold border-b-2 border-accent">30 minutes</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:${PHONE_NUMBER}`}
              className="group flex items-center justify-center space-x-4 bg-accent text-black px-10 py-5 rounded font-black text-xl uppercase transition-all shadow-[0_20px_40px_rgba(255,193,7,0.2)]"
            >
              <Phone size={24} />
              <span>Call Now</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              href="#contact"
              className="flex items-center justify-center space-x-3 bg-white/5 border border-white/20 text-white px-10 py-5 rounded font-bold text-xl uppercase backdrop-blur-sm transition-all"
            >
              <span>Request Help</span>
              <ArrowRight size={20} />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-white/10 pt-10">
            {[
              { label: "Arrival Time", val: "30 Mins" },
              { label: "Pricing", val: "From AED 100" },
              { label: "Technicians", val: "Certified" },
              { label: "Status", val: "Available 24/7" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border-l border-accent/40 pl-4"
              >
                <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">{stat.label}</div>
                <div className="text-white text-lg font-black italic uppercase">{stat.val}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-white/20 uppercase font-black text-sm tracking-[0.5em] vertical-text"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll Down
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
