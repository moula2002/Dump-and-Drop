import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Search,
  Truck,
  Globe,
  Package,
  MapPin,
  ArrowRight
} from "lucide-react";

// Generated Assets
import pricing3d from "../../assets/images/transparent_pricing_3d_1776339616113.png";
import booking3d from "../../assets/images/instant_booking_3d_1776339655413.png";
import hub3d from "../../assets/images/intercity_hub_3d_1776339695936.png";

// Assets
import banner from "../../assets/images/banner.png";
import light3d from "../../assets/images/light_truck_3d_1776339903626.png";
import heavy3d from "../../assets/images/heavy_truck_3d_1776339945036.png";
import mapBg from "../../assets/images/map_pattern_bg_1776341297148.png";


function GoodsServices() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('light');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const vehicleData = {
    light: [
      { id: 1, name: '3 Wheeler', weight: '500kg', price: '160', size: '5ft x 6ft', img: light3d },
      { id: 2, name: 'Tata Ace', weight: '750kg', price: '205', size: '6ft x 7ft', img: light3d },
    ],
    heavy: [
      { id: 3, name: 'Pickup 8ft', weight: '1000kg', price: '300', size: '8ft x 5ft', img: heavy3d },
      { id: 4, name: 'Tata 407', weight: '2500kg', price: '550', size: '14ft x 6ft', img: heavy3d },
    ]
  };

  const routesData = [
    { destination: "Sabar Kantha", distance: "112 Kms", fare: "2000" },
    { destination: "Bharuch", distance: "112 Kms", fare: "4000" },
    { destination: "Banas Kantha", distance: "216 Kms", fare: "2500" },
    { destination: "Bhavnagar", distance: "171 Kms", fare: "2600" },
    { destination: "Panch Mahals", distance: "124 Kms", fare: "2800" },
    { destination: "Patan", distance: "129 Kms", fare: "2600" }
  ];

  const faqs = [
    {
      question: "What happens in case of an accident or breakdown?",
      answer: "We provide comprehensive assistance to handle logistics smoothly. Our support team is available 24/7 to coordinate vehicle replacements and ensure your goods remain safe and on schedule."
    },
    {
      question: "How do I determine the right truck size?",
      answer: "Consider the total weight and dimensions of your cargo. Our 'Light' category is perfect for household items or small business deliveries under 750kg, while 'Heavy' handles industrial loads."
    },
    {
      question: "Are the drivers background-checked?",
      answer: "Yes, every partner driver undergoes a rigorous ID verification and background check process to ensure the highest standards of safety for your cargo."
    },
    {
      question: "Can I book a 1.7-ton pickup truck for business or personal goods?",
      answer: "Absolutely! You can instantly book a 1.7-ton pickup truck to transport business or personal goods anywhere in Ahmedabad. Our cost-effective solutions allow you to shift items safely, reliably, and within your budget."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <style>
        {`
          .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(5, 71, 148, 0.1);
          }
          .gradient-bg {
            background: linear-gradient(135deg, #054794 0%, #00AFF5 100%);
          }
          .footer-hover:hover {
            color: #bfdbfe !important;
          }
          .social-hover:hover {
            background: rgba(0, 175, 245, 0.2) !important;
          }
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.4);
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="min-h-[480px] md:min-h-[640px] pt-16 md:pt-28 pb-28 px-4 overflow-hidden bg-cover bg-center bg-no-repeat flex items-center shadow-inner relative"
        style={{
          backgroundImage: `url(${banner})`
        }}
      >
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="max-w-3xl mx-auto mt-6">
            <div className="backdrop-blur-xl bg-white/30 p-8 md:p-12 rounded-[32px] border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] text-center relative overflow-hidden group transition-all duration-500 hover:bg-white/40">
              {/* Decorative Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-3xl group-hover:bg-white/30 transition-all duration-700"></div>
              
              <h1 className="text-3xl md:text-5xl font-black text-slate-950 mb-4 tracking-tighter leading-tight">
                Smart & <span className="text-[#00AFF5]">Seamless</span>
              </h1>
              
              <div className="w-16 h-1 bg-[#00AFF5] mx-auto mb-6 rounded-full"></div>
              
              <p className="text-slate-800 text-base md:text-xl font-bold leading-relaxed max-w-xl mx-auto">
                Economical rates, real-time tracking, and verified vehicles for all your personal and business logistics.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-24 -mt-10 md:-mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Transparent Pricing Card */}
          <div className="group glass-card p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(5,71,148,0.1)] hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="mb-8 w-full h-48 flex items-center justify-center">
              <img src={pricing3d} alt="Pricing" className="w-full h-full object-contain animate-float drop-shadow-2xl" />
            </div>
            <h3 className="font-black text-2xl mb-4 text-slate-950 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#00AFF5] rounded-full"></span>
              Transparent Pricing
            </h3>
            <p className="text-slate-600 font-medium leading-[1.8]">
              No hidden costs or surprises. Get instant, accurate fare estimates based on your vehicle choice and precise distance.
            </p>
          </div>

          {/* Instant Booking Card */}
          <div className="group glass-card p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(5,71,148,0.1)] hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AFF5]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="mb-8 w-full h-48 flex items-center justify-center">
              <img src={booking3d} alt="Booking" className="w-full h-full object-contain animate-float [animation-delay:1s] drop-shadow-2xl" />
            </div>
            <h3 className="font-black text-2xl mb-4 text-slate-950 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#00AFF5] rounded-full"></span>
              Instant Booking
            </h3>
            <p className="text-slate-600 font-medium leading-[1.8]">
              Book a mini-truck in seconds. Our automated dispatch system ensures a vehicle is on its way to your pickup point immediately.
            </p>
          </div>

          {/* Intercity Hub Card */}
          <div className="group glass-card p-10 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(5,71,148,0.1)] hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="mb-8 w-full h-48 flex items-center justify-center">
              <img src={hub3d} alt="Hub" className="w-full h-full object-contain animate-float [animation-delay:2s] drop-shadow-2xl" />
            </div>
            <h3 className="font-black text-2xl mb-4 text-slate-950 flex items-center gap-3">
              <span className="w-8 h-1 bg-[#00AFF5] rounded-full"></span>
              Intercity Hub
            </h3>
            <p className="text-slate-600 font-medium leading-[1.8]">
              Seamless bulk transport across cities. Our specialized long-distance fleet handles your industrial cargo with safety and speed.
            </p>
          </div>

        </div>
      </section>

      {/* Vehicle Selection Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[60px] p-8 md:p-16 border border-white/60 shadow-[0_40px_100px_rgba(0,0,0,0.03)]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-4 tracking-tight leading-tight">
                Select Your <span className="text-[#00AFF5]">Fleet</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium">Precision-engineered vehicles for every payload requirement.</p>
            </div>
            <div className="flex bg-slate-100 p-2 rounded-[24px] w-full md:w-auto shadow-inner">
              <button 
                onClick={() => setActiveTab('light')}
                className={`flex-1 md:flex-none px-10 py-4 rounded-[18px] font-black transition-all duration-500 ${activeTab === 'light' ? 'bg-white text-[#054794] shadow-lg scale-105' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Light ({"<"}750kg)
              </button>
              <button 
                onClick={() => setActiveTab('heavy')}
                className={`flex-1 md:flex-none px-10 py-4 rounded-[18px] font-black transition-all duration-500 ${activeTab === 'heavy' ? 'bg-white text-[#054794] shadow-lg scale-105' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Heavy ({">"}750kg)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {vehicleData[activeTab].map((vehicle) => (
              <div key={vehicle.id} className="group bg-white p-10 rounded-[48px] border border-slate-100 transition-all duration-700 hover:shadow-[0_50px_100px_rgba(5,71,148,0.1)] hover:-translate-y-4 flex flex-col items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00AFF5]/5 rounded-full blur-[80px] -mr-20 -mt-20"></div>
                
                {/* Dimensional Bar */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 h-32 flex flex-col items-center gap-1">
                  <div className="w-1 h-full bg-slate-100 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full bg-[#00AFF5]/20 h-full"></div>
                  </div>
                  <span className="text-[10px] font-black text-[#00AFF5] uppercase tracking-[0.2em] whitespace-nowrap rotate-90 mt-8">{vehicle.size}</span>
                </div>

                <div className="relative mb-10 w-full h-56 flex items-center justify-center">
                  <img src={vehicle.img} alt={vehicle.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2" />
                </div>

                <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-2 rounded-full text-sm font-black mb-6 tracking-wide shadow-sm">
                  <Package size={18} /> MAX LOAD: {vehicle.weight}
                </div>

                <h3 className="text-3xl font-black text-slate-900 mb-3">{vehicle.name}</h3>
                <p className="text-slate-400 font-bold mb-6">Base fare starts at <span className="text-[#00AFF5] text-2xl ml-1 font-black">₹{vehicle.price}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intercity Routes Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-[#054794]">
        {/* Map Background Overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{ 
            backgroundImage: `url(${mapBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 flex flex-col md:flex-row items-center gap-4">
              <span className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                <Globe size={32} className="text-[#00AFF5]" />
              </span>
              Popular Intercity <span className="text-[#00AFF5]">Routes</span>
            </h2>
            <p className="text-blue-100/70 text-lg font-medium max-w-2xl">
              Unbeatable long-distance fares across major industrial corridors, starting from Ahmedabad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routesData.map((route, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-xl p-8 rounded-[32px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00AFF5]/20 flex items-center justify-center text-[#00AFF5]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="text-white/40 text-xs font-black uppercase tracking-widest">Destination</span>
                      <h4 className="text-xl font-bold text-white leading-tight">{route.destination}</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-white/40 text-xs font-black uppercase tracking-widest leading-none">Estimate</span>
                    <div className="text-2xl font-black text-[#00AFF5]">₹{route.fare}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2 text-white/60 font-medium">
                    <Truck size={16} />
                    <span>{route.distance}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#00AFF5] font-black text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    Book Now <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="flex flex-col items-center mb-16">
          <span className="bg-[#00AFF5]/10 text-[#00AFF5] px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-4">Help Center</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center mb-4">Logistics <span className="text-[#00AFF5]">FAQs</span></h2>
          <p className="text-slate-500 font-medium text-lg text-center max-w-xl">Everything you need to know about our smart delivery services and safety protocols.</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {faqs.map((faq, index) => {
            const isOpen = activeFAQ === index;
            return (
              <div key={index} className="group">
                <button
                  onClick={() => setActiveFAQ(isOpen ? null : index)}
                  className={`w-full text-left p-8 md:p-10 rounded-[32px] transition-all duration-500 relative overflow-hidden flex flex-col ${isOpen ? 'bg-white shadow-[0_40px_80px_rgba(5,71,148,0.08)] border-[#00AFF5]/20' : 'bg-white/40 backdrop-blur-md border-white/60 hover:bg-white/60 hover:-translate-y-1'}`}
                  style={{ borderWidth: '1px' }}
                >
                  {/* Active Indicator Glow */}
                  {isOpen && <div className="absolute top-0 left-0 w-2 h-full bg-[#00AFF5]"></div>}
                  
                  <div className="flex items-center justify-between w-full">
                    <h3 className={`font-black text-xl md:text-2xl transition-colors duration-300 ${isOpen ? 'text-[#054794]' : 'text-slate-800'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#054794] text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                      <ChevronRight size={24} />
                    </div>
                  </div>

                  <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                      <p className="text-slate-600 text-lg leading-relaxed font-medium bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}

export default GoodsServices;