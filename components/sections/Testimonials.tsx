
import React from 'react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent text-sm font-black uppercase tracking-widest mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Trusted By Thousands <br /> Of Drivers In Dubai
          </h3>
          <div className="flex items-center justify-center space-x-2 text-accent">
            {[1, 2, 3, 4, 5].map(s => (
              <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white font-bold ml-2">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-card p-10 rounded-2xl border border-white/5 relative">
              <div className="absolute top-10 right-10 opacity-10 text-accent">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017V21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3H10.017V21H3.017Z" />
                </svg>
              </div>
              <p className="text-gray-300 text-lg italic mb-8 relative z-10">"{t.text}"</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold uppercase tracking-wide">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.location}, Dubai</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
