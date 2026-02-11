
import React from 'react';
import { COMPANY_NAME, TAGLINE } from '../constants';

const About: React.FC = () => {
  return (
    <main className="pt-24">
      {/* Sub-hero */}
      <section className="py-20 bg-dark relative border-b border-white/5">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">
            About Our <span className="text-accent">Mission</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {TAGLINE}. Since our inception, we have been dedicated to providing the most reliable and fastest car recovery service in the UAE.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-accent font-black uppercase tracking-widest text-sm mb-4">Our Story</h2>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-6 leading-tight">
                  Born In Dubai, <br /> Dedicated To Safety
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {COMPANY_NAME} started with a single truck and a clear vision: to ensure that no driver in Dubai feels stranded or unsafe. Today, we operate a large fleet of modern recovery vehicles stationed strategically across the city.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white uppercase mb-4">Uncompromising Standards</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We understand that your vehicle is more than just a machine; it is an investment and a necessity. That is why our technicians undergo rigorous training and our equipment is regularly inspected to meet international safety standards.
                </p>
                <ul className="space-y-3">
                  {["Certified Professional Drivers", "GPS-Tracked Dispatching", "Premium Insurance Coverage", "24/7 Dedicated Support Center"].map(item => (
                    <li key={item} className="flex items-center space-x-3 text-white font-bold text-sm">
                      <span className="text-accent">✔</span>
                      <span className="uppercase">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://picsum.photos/seed/dubai-team/800/800" 
                alt="Our Professional Fleet"
                className="rounded-2xl border border-white/10"
              />
              <div className="absolute -bottom-10 -left-10 bg-accent text-black p-10 rounded-2xl shadow-2xl">
                <div className="text-5xl font-black">20K+</div>
                <div className="text-xs font-bold uppercase">Successful Recoveries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white uppercase mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Honest pricing with zero hidden costs or surprise fees." },
              { title: "Efficiency", desc: "Every minute counts. We optimize our routes for speed." },
              { title: "Care", desc: "We treat every car as if it were our own luxury vehicle." }
            ].map(v => (
              <div key={v.title} className="p-10 bg-card rounded-2xl border border-white/5">
                <h3 className="text-accent font-black text-xl uppercase mb-4">{v.title}</h3>
                <p className="text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
