/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Header */}
      <header className="bg-[#0a2540] text-white px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Chasingmar Travel</h1>
        <nav className="space-x-5 hidden md:block">
          <button onClick={() => scrollToSection('destinations')} className="hover:text-gray-300">Destinations</button>
          <button onClick={() => scrollToSection('services')} className="hover:text-gray-300">Services</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-gray-300">Contact</button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[80vh] flex justify-center items-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Explore the World Remotely</h2>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">Plan your dream trip from anywhere</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#ff7a18] hover:bg-[#e06912] text-white px-8 py-3 rounded text-lg font-semibold transition-colors"
          >
            Start Booking
          </button>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-20 px-4 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Top Destinations</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
            { name: 'Bali', img: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98' },
            { name: 'New York', img: 'https://images.unsplash.com/photo-1534447677768-be436bb09401' }
          ].map((dest) => (
            <div key={dest.name} className="w-full sm:w-72 border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={dest.img} alt={dest.name} className="w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <h3 className="p-4 text-xl font-semibold">{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 text-center bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            {[
              'Virtual travel planning',
              'Custom itineraries',
              'Remote booking assistance',
              '24/7 support'
            ].map((service) => (
              <div key={service} className="flex items-center space-x-3 text-lg">
                <Check className="text-green-600 w-6 h-6 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
          <input 
            type="text" 
            placeholder="Your Name" 
            required 
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2540]"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2540]"
          />
          <textarea 
            placeholder="Your Travel Plans" 
            rows={4}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a2540]"
          ></textarea>
          <button 
            type="submit" 
            className="p-3 bg-[#0a2540] hover:bg-[#123961] text-white rounded font-semibold transition-colors"
          >
            Send Request
          </button>
          {isSubmitted && (
            <div className="p-3 bg-green-100 text-green-800 rounded mt-4">
              Your request has been submitted!
            </div>
          )}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a2540] text-white text-center py-6">
        <p>© 2026 Chasingmar Travel</p>
      </footer>
    </div>
  );
}
