
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, MapPin, Phone, User } from 'lucide-react';
import { ContactFormData } from '../../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    location: '',
    message: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', location: '', message: '' });
    }, 1500);
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-accent/5 border border-accent/20 p-12 rounded-3xl text-center"
          >
            <CheckCircle size={64} className="text-accent mx-auto mb-6" />
            <h3 className="text-2xl font-black text-white uppercase mb-4">Request Transmitted</h3>
            <p className="text-gray-400 mb-8 max-w-sm mx-auto">Our dispatch team is notifying the nearest technician to your coordinates. Stay by your phone.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStatus('idle')}
              className="bg-accent text-black font-black uppercase px-10 py-4 rounded-xl text-sm"
            >
              New Request
            </motion.button>
          </motion.div>
        ) : (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="contact" 
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <input 
              type="text" 
              className="hidden" 
              value={honeypot} 
              onChange={(e) => setHoneypot(e.target.value)} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center space-x-2">
                  <User size={12} />
                  <span>Full Name</span>
                </label>
                <input 
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10"
                  placeholder="Identification Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center space-x-2">
                  <Phone size={12} />
                  <span>Mobile Line</span>
                </label>
                <input 
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10"
                  placeholder="+971 -- --- ----"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center space-x-2">
                <MapPin size={12} />
                <span>GPS Location Description</span>
              </label>
              <input 
                required
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10"
                placeholder="Ex: Sheikh Zayed Rd, Near Museum"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest flex items-center space-x-2">
                <AlertCircle size={12} />
                <span>Incident Details</span>
              </label>
              <textarea 
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-all duration-300 focus:bg-white/10 resize-none"
                placeholder="Specify if car not starting, engine heating, or recovery needed..."
              />
            </div>

            <motion.button 
              type="submit"
              disabled={status === 'submitting'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-accent text-black py-5 rounded-xl font-black text-xl uppercase transition-all flex items-center justify-center space-x-4 shadow-[0_10px_30px_rgba(255,193,7,0.2)] ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {status === 'submitting' ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <AlertCircle size={24} />
                  </motion.div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send size={24} />
                  <span>Request Instant Response</span>
                </>
              )}
            </motion.button>
            
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <div className="h-px w-8 bg-white/10" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Estimated Arrival: 25-30 Mins</span>
              <div className="h-px w-8 bg-white/10" />
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
