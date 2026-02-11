
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap, UserCheck, Wallet, Wrench, Globe } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const points = [
    { title: "24/7 Response", desc: "Constant dispatch ready across all Dubai sectors.", icon: Clock },
    { title: "30-Min Arrival", desc: "The fastest reach for urgent breakdown situations.", icon: Zap },
    { title: "Expert Mechanics", desc: "Certified professionals for on-site diagnosis.", icon: UserCheck },
    { title: "Equipped Fleet", desc: "Trucks designed for both towing and mechanical repair.", icon: Wrench },
    { title: "Upfront Pricing", desc: "No hidden fees. Premium support at competitive rates.", icon: Wallet },
    { title: "Dubai-Wide", desc: "Full coverage from Marina to Silicon Oasis.", icon: Globe }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-5/12 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&q=80&w=800" 
                alt="Professional Mechanical Team Dubai"
                className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
              />
              <div className="absolute -top-10 -left-10 w-40 h-40 border-l-8 border-t-8 border-accent z-0 opacity-50" />
              <div className="absolute bottom-10 -right-10 bg-accent text-black p-8 rounded-2xl shadow-2xl z-20 transform -rotate-2">
                <div className="text-5xl font-black">12+</div>
                <div className="text-[10px] font-black uppercase tracking-widest">Years Expertise</div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-7/12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-4">Unmatched Reliability</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                Safety & Speed <br /> <span className="text-gray-500">Without Compromise</span>
              </h3>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
              {points.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex space-x-5 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-300">
                      <point.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-2">{point.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
