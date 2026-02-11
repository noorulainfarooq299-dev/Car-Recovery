
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../../constants';

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent text-sm font-black uppercase tracking-widest mb-4"
            >
              Expert Roadside Care
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Specialized Recovery <br /> & Repair Solutions
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="text-accent font-bold uppercase text-xs tracking-widest flex items-center space-x-2 group">
              <span>Explore All Services</span>
              <LucideIcons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.Wrench;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/50"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  <div className="absolute top-4 right-4 bg-accent p-2 rounded text-black transform -rotate-12 group-hover:rotate-0 transition-transform">
                    <IconComponent size={24} />
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-lg font-black text-white mb-3 uppercase tracking-tight">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden line-clamp-2">
                    {service.description}
                  </p>
                  <Link 
                    to="/services" 
                    className="inline-flex items-center text-accent text-[10px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                  >
                    <span>Detailed Info</span>
                    <LucideIcons.ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
