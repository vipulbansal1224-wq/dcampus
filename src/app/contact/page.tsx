"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-full h-64 md:h-96 relative">
        <Image src="/contact-us-scaled.jpg" alt="Contact Us" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white tracking-wider">CONTACT US</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Animated Branches Section with Maps */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">Our Branches</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Head Office */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Head Office</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                Office Number 3, Opp. Gurdwara Sahib, Near Govt Primary School, Bhamian Road, Ludhiana
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Opp.%20Gurdwara%2C%20Near%20Govt.%20Primary%20School%2C%20Bhamian%20Road%2C%20LDH&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Campus 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Campus 2</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                DAWN COMPUTER CAMPUS, Gobind Nagar Ghai Market, Jamalpur, LDH
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  src="https://maps.google.com/maps?q=DAWN%20COMPUTER%20CAMPUS%2C%20Gobind%20Nagar%20Ghai%20Market%2C%20Jamalpur%2C%20LDH&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* B.O. Office */}
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-secondary hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">B.O. Office</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6 flex-grow">
                Office No.10, Sukhmani Tower, Kochar Market, LDH
              </p>
              <div className="w-full h-48 rounded-lg overflow-hidden border border-slate-200">
                <iframe 
                  src="https://maps.google.com/maps?q=Office%20No.10%2C%20Sukhmani%20Tower%2C%20Kochar%20Market%2C%20LDH&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* Enquiry Form Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-primary text-white p-12 md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-blue-100 mb-12">For any inquiries, admissions, or questions regarding our courses, feel free to contact our support team.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">📞</div>
                <div>
                  <p className="text-sm text-blue-200">Call Us</p>
                  <p className="font-bold">6283715438</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">✉️</div>
                <div>
                  <p className="text-sm text-blue-200">Email Us</p>
                  <p className="font-bold">rahul.ketan.rk@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="p-12 md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send an Enquiry</h3>
            
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
                <span className="text-xl">✅</span> 
                <p><strong>Message Sent!</strong> We will get back to you shortly.</p>
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg mb-6 flex items-center gap-3">
                <span className="text-xl">❌</span> 
                <p><strong>Oops!</strong> Something went wrong. Please try again later.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                <textarea 
                  required 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-secondary text-white font-bold py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending Message...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
