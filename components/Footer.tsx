
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, SERVICES, SERVICE_AREAS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded">
                <Shield size={24} className="text-black" />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase text-white">
                RAPID<span className="text-accent italic">RECOVERY</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Dubai's premium emergency roadside network. Specializing in high-speed car recovery and professional on-site mechanical repairs available 24/7 across the city.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Social, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-black transition-all duration-300 border border-white/10 group">
                  <Social size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-xs border-l-4 border-accent pl-4">Company</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-500 text-sm hover:text-accent transition-colors font-bold uppercase tracking-wider">Home</Link></li>
              <li><Link to="/services" className="text-gray-500 text-sm hover:text-accent transition-colors font-bold uppercase tracking-wider">Services</Link></li>
              <li><Link to="/about" className="text-gray-500 text-sm hover:text-accent transition-colors font-bold uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 text-sm hover:text-accent transition-colors font-bold uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-xs border-l-4 border-accent pl-4">Expertise</h3>
            <ul className="space-y-4">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to="/services" className="text-gray-500 text-xs hover:text-accent transition-colors font-bold uppercase tracking-wider">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-white font-black uppercase tracking-widest text-xs border-l-4 border-accent pl-4">Headquarters</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-500 text-sm font-medium">Al Quoz Industrial Area 3, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href={`tel:${PHONE_NUMBER}`} className="text-white text-lg font-black tracking-tight hover:text-accent transition-colors">{PHONE_NUMBER}</a>
              </div>
              <div className="flex items-center space-x-4">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <span className="text-gray-500 text-sm font-medium">dispatch@dubairapid.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="border-t border-white/5 pt-12 mb-12">
          <div className="flex flex-wrap gap-2">
            {SERVICE_AREAS.map(area => (
              <span key={area} className="text-[9px] uppercase font-black text-gray-600 bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg">
                {area} Support
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700 font-black uppercase tracking-[0.2em] border-t border-white/5 pt-12">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};

export default Footer;
