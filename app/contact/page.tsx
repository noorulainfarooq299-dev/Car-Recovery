
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import ContactForm from '../../components/sections/ContactForm';
import { PHONE_NUMBER, WHATSAPP_LINK } from '../../constants';

const ContactPage: React.FC = () => {
  return (
    <main className="pt-24 bg-black min-h-screen">
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8"
          >
            Dispatch <span className="text-accent">Center</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl leading-relaxed"
          >
            Our emergency lines are monitored 24 hours a day by certified technical coordinators. Reach out for immediate mechanical dispatch.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <h3 className="text-accent font-black uppercase tracking-widest text-xs border-l-4 border-accent pl-4">Fast Communication</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href={`tel:${PHONE_NUMBER}`} 
                    className="p-8 bg-card border border-white/10 rounded-3xl hover:border-accent transition-all group"
                  >
                    <Phone size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">Phone Call</div>
                    <div className="text-lg font-black text-white">{PHONE_NUMBER}</div>
                  </motion.a>
                  <motion.a 
                    whileHover={{ y: -5 }}
                    href={WHATSAPP_LINK} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-8 bg-card border border-white/10 rounded-3xl hover:border-green-500 transition-all group"
                  >
                    <MessageCircle size={32} className="text-green-500 mb-6 group-hover:scale-110 transition-transform" />
                    <div className="text-gray-500 text-[10px] font-black uppercase mb-1 tracking-widest">WhatsApp</div>
                    <div className="text-lg font-black text-white">Live Chat</div>
                  </motion.a>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-accent font-black uppercase tracking-widest text-xs border-l-4 border-accent pl-4">Location & Hours</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-6 p-8 bg-card border border-white/5 rounded-3xl">
                    <MapPin size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-2">Office Headquarters</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        Unit 412, Al Quoz Industrial 3,<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 p-8 bg-card border border-white/5 rounded-3xl">
                    <Clock size={24} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold uppercase text-sm mb-2">Service Hours</h4>
                      <p className="text-gray-500 text-sm font-black uppercase italic">
                        24 Hours / 7 Days / 365 Days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card p-10 md:p-20 rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                <div className="mb-12">
                  <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Request Diagnosis</h2>
                  <p className="text-gray-400">Complete the form for on-site mechanical repair or vehicle recovery coordinates.</p>
                </div>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4">
          <div className="h-[500px] w-full bg-white/5 rounded-[3rem] border border-white/10 overflow-hidden relative grayscale opacity-40 group hover:opacity-100 transition-opacity duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
              alt="Dubai Map Coverage" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-accent text-black px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] animate-pulse">
                Active Coverage Zone: Dubai
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
