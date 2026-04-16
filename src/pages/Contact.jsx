import React from "react";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";
import contactHeroImg from "../assets/images/blog_hero_bg.png";

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">

      {/* Hero Section */}
      <div className="relative bg-[#054794] text-white py-24 px-4 text-center overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${contactHeroImg})` }}
        ></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tight uppercase">Get In <span className="text-[#00AFF5]">Touch</span></h1>
          <p className="text-blue-100 text-base md:text-xl font-medium max-w-2xl mx-auto px-4 md:px-0">
            Connect with our expert team for seamless automotive services and smart logistical support.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left: Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em] mb-4 block">Official Channels</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Our Contact Information
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
              We provide 24/7 coordination to ensure your service needs are met with precision and reliability.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm group hover:border-[#00AFF5] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-all">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Headquarters</h4>
                <p className="text-slate-600 font-medium">123 Service Street, City, Country</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm group hover:border-[#00AFF5] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Direct Support</h4>
                <p className="text-slate-600 font-medium">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm group hover:border-[#00AFF5] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Email Correspondence</h4>
                <p className="text-slate-600 font-medium">support@dumpdrop.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm group hover:border-[#00AFF5] transition-colors">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-all">
                <Clock size={28} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 mb-1">Operational Hours</h4>
                <p className="text-slate-600 font-medium">Mon - Sat (9:00 AM - 7:00 PM)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-14 rounded-[40px] border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AFF5]/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-10 tracking-tight">
              Send a <span className="text-[#00AFF5]">Message</span>
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-600 font-black text-xs uppercase tracking-widest mb-3">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00AFF5] focus:bg-white transition-all font-medium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-black text-xs uppercase tracking-widest mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00AFF5] focus:bg-white transition-all font-medium"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-black text-xs uppercase tracking-widest mb-3">Inquiry Message</label>
                <textarea
                  rows="5"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#00AFF5] focus:bg-white transition-all font-medium"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-slate-950 text-white px-12 py-5 rounded-2xl font-black hover:bg-[#054794] transition-all duration-300 shadow-xl flex items-center justify-center gap-4 group"
              >
                Send Message
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
