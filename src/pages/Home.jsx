import { useState } from "react";
import {
  ChevronRight, Car, Package, Sparkles, MapPin,
  Calendar, Shield, Clock, Star, CheckCircle,
  Smartphone, UserPlus, Zap, Settings, ArrowRight,
  ShieldCheck, Heart, Navigation, Eye, Map as MapIcon,
  PhoneCall, CreditCard
} from "lucide-react";
import { FaCarSide, FaBox, FaGooglePlay, FaApple, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Airport");
  const [tripType, setTripType] = useState("One Way");

  const tabs = [
    { name: "Airport", icon: "/src/assets/images/airport-icon.png" },
    { name: "Rental", icon: "/src/assets/images/rental-icon.png" },
    { name: "Outstation", icon: "/src/assets/images/outstation-icon.png" },
    { name: "Local", icon: "/src/assets/images/local-icon.png" }
  ];

  const fleet = [
    {
      name: "Mini",
      desc: "Comfy, small cars for everyday rides",
      price: "₹12/km",
      image: "/src/assets/images/light.png",
      tag: "Best Seller"
    },
    {
      name: "Prime",
      desc: "Top-rated drivers and high-end sedans",
      price: "₹18/km",
      image: "/src/assets/images/car-icon.png",
      tag: "Premium"
    },
    {
      name: "SUV",
      desc: "Perfect for family trips and extra luggage",
      price: "₹24/km",
      image: "/src/assets/images/heavy.png",
      tag: "Spacious"
    }
  ];

  const steps = [
    { icon: MapPin, title: "Pick Location", desc: "Select your pickup and drop-off points." },
    { icon: Car, title: "Choose Ride", desc: "Select a vehicle that fits your style and budget." },
    { icon: CreditCard, title: "Pay & Go", desc: "Pay securely and enjoy your comfortable ride." }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-slate-950">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/home_hero_bg.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-slate-950"></div>
        </div>

        {/* Animated Background blobs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/30 rounded-full blur-[120px] animate-blob z-0"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/20 rounded-full blur-[150px] animate-blob animation-delay-2000 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-sm font-bold mb-8 animate-float">
              <Sparkles className="w-4 h-4" />
              <span className="tracking-widest uppercase">The Future of Commute</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8">
              MOVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-blue animate-gradient">WITHOUT</span> <br />
              LIMITS.
            </h1>
            <p className="text-slate-400 text-xl max-w-lg mb-12 leading-relaxed font-light">
              Dump & Drop is redefining city mobility with premium rides, transparent pricing, and world-class safety.
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              <button className="group relative px-10 py-5 bg-white text-slate-950 rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
                <span className="relative z-10 flex items-center gap-3">
                  BOOK NOW <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </button>
              
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-slate-950 overflow-hidden">
                    <img src={`/src/assets/images/review${i}.jpg`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-slate-950 bg-slate-800 flex items-center justify-center text-xs font-bold text-white uppercase">
                  +2k
                </div>
              </div>
              <div className="text-slate-500 text-sm font-medium">Joined by 2000+ <br/>happy riders today</div>
            </div>
          </div>

          {/* Right Content: Booking Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-[32px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-[30px] shadow-2xl overflow-hidden">
               {/* Hero Form Header */}
               <div className="bg-slate-50 px-8 py-6 border-b border-slate-100">
                  <h3 className="text-2xl font-black text-slate-800">Your next ride</h3>
                  <p className="text-slate-500 text-sm">Choose from 5,000+ verified vehicles</p>
               </div>

               {/* Tabs */}
               <div className="grid grid-cols-4 border-b border-slate-100">
                  {tabs.map((tab) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(tab.name)}
                      className={`py-5 flex flex-col items-center gap-2 transition-all relative ${
                        activeTab === tab.name 
                          ? "text-brand-blue" 
                          : "text-slate-400 hover:text-slate-600"
                      }`}
                    >
                      <img src={tab.icon} alt={tab.name} className={`w-6 h-6 object-contain transition-transform ${activeTab === tab.name ? "scale-110" : "grayscale opacity-50"}`} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{tab.name}</span>
                      {activeTab === tab.name && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue"></div>
                      )}
                    </button>
                  ))}
               </div>

               <div className="p-8">
                  <div className="space-y-6">
                    {/* Location Selection with Vertical Line */}
                    <div className="relative">
                      <div className="absolute left-4 top-10 bottom-10 w-0.5 border-l-2 border-dashed border-slate-200"></div>
                      
                      <div className="relative pl-12 mb-8">
                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-green-500 bg-white z-10"></div>
                        <label className="block text-[10px] uppercase font-black text-slate-400 tracking-wider mb-2">Pickup Point</label>
                        <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-transparent focus-within:border-brand-blue focus-within:bg-white transition-all">
                          <input 
                            type="text" 
                            placeholder="Current Location" 
                            className="w-full bg-transparent outline-none font-bold text-slate-800 placeholder:text-slate-300"
                          />
                          <Navigation className="w-5 h-5 text-brand-blue cursor-pointer" />
                        </div>
                      </div>

                      <div className="relative pl-12">
                        <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 border-brand-blue bg-white z-10"></div>
                        <label className="block text-[10px] uppercase font-black text-slate-400 tracking-wider mb-2">Drop Destination</label>
                        <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-transparent focus-within:border-brand-blue focus-within:bg-white transition-all">
                          <input 
                            type="text" 
                            placeholder="Where to?" 
                            className="w-full bg-transparent outline-none font-bold text-slate-800 placeholder:text-slate-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Conditional Fields */}
                    {activeTab === "Rental" && (
                      <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-brand-blue" />
                          <div>
                            <div className="text-xs font-bold text-blue-900">Select Hours</div>
                            <select className="bg-transparent font-black text-brand-blue border-none p-0 focus:ring-0 cursor-pointer">
                              <option>1 hr - 10 km</option>
                              <option>2 hr - 20 km</option>
                              <option>4 hr - 40 km</option>
                              <option>8 hr - 80 km</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                       <button className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl hover:bg-slate-100 transition-colors">
                          <Calendar className="w-5 h-5 text-slate-400" />
                          <div className="text-left">
                            <div className="text-[10px] font-bold text-slate-500 uppercase">When</div>
                            <div className="text-sm font-black">Today, Now</div>
                          </div>
                       </button>
                       <button className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl hover:bg-slate-100 transition-colors">
                          <Settings className="w-5 h-5 text-slate-400" />
                          <div className="text-left">
                            <div className="text-[10px] font-bold text-slate-500 uppercase">Seats</div>
                            <div className="text-sm font-black">4 Seats</div>
                          </div>
                       </button>
                    </div>
                  </div>

                  <button className="w-full mt-10 py-6 bg-slate-950 text-white font-black rounded-[20px] transition-all hover:bg-brand-blue hover:shadow-[0_20px_40px_rgba(5,71,148,0.3)] shadow-xl flex items-center justify-center gap-4 text-lg">
                    <span>SEE PRICING & CABS</span>
                    <ChevronRight className="w-6 h-6" />
                  </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center flex-shrink-0 text-brand-blue shadow-sm border border-slate-100">
                  <step.icon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FLEET SECTION ================= */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">The ultimate fleet.</h2>
              <p className="text-slate-500 max-w-xl">Every car in our fleet is handpicked for comfort and reliability. From quick city zips to luxury sedans, we have it all.</p>
            </div>
            <button className="px-8 py-3 bg-white border-2 border-slate-200 rounded-xl font-bold flex items-center gap-2 hover:border-brand-blue hover:text-brand-blue transition-all">
              View All Vehicles <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((car) => (
              <div key={car.name} className="group bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                <div className="relative mb-10 overflow-hidden rounded-3xl bg-slate-50 aspect-[4/3] flex items-center justify-center p-6">
                   <img src={car.image} alt={car.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 animate-float" />
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-brand-cyan/20">
                    {car.tag}
                   </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-black">{car.name}</h3>
                    <div className="text-brand-blue font-black text-xl">{car.price}</div>
                  </div>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    {car.desc}
                  </p>
                </div>
                <button className="w-full py-5 bg-slate-100 rounded-2xl font-black text-slate-800 hover:bg-slate-900 hover:text-white transition-all">
                  BOOK NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SAFETY FOCUS ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-[100px] -z-10"></div>
             <img src="/src/assets/images/banner2.png" alt="Safety Banner" className="w-full h-auto rounded-[40px] shadow-2xl skew-y-3" />
             <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                      <ShieldCheck className="w-7 h-7" />
                   </div>
                   <div className="text-lg font-black italic underline decoration-green-400">Verified Plus</div>
                </div>
                <p className="text-slate-500 text-sm font-medium">100% of our drivers pass a rigorous background check and vehicle inspection.</p>
             </div>
          </div>
          <div>
            <div className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-widest rounded-full mb-6">Security & Care</div>
            <h2 className="text-5xl font-black mb-8 leading-tight">Your safety, <br/>scientifically secured.</h2>
            <div className="space-y-6">
              {[
                { icon: Shield, title: "24/7 Safety Helpline", desc: "Access emergency assistance at the tap of a button." },
                { icon: Eye, title: "Real-time Tracking", desc: "Share your trip details with family and friends live." },
                { icon: Heart, title: "Health Protocols", desc: "Daily vehicle sanitization and mandatory mask checks." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 p-6 rounded-3xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100 group">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center flex-shrink-0 text-slate-400 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DELIVERY SERVICES ================= */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 order-2 lg:order-1">
             <div className="relative group">
                <div className="absolute inset-0 bg-brand-cyan/30 blur-3xl scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
                <img src="/src/assets/images/delivery-service.png" alt="Delivery" className="w-full relative z-10 animate-float" />
             </div>
          </div>
          <div className="flex-1 order-1 lg:order-2">
             <div className="p-4 bg-white/5 backdrop-blur-md rounded-3xl inline-block mb-8 border border-white/10">
                <Package className="w-12 h-12 text-brand-cyan" />
             </div>
             <h2 className="text-6xl font-black mb-8 leading-none">THE FASTEST <br/><span className="text-brand-cyan">LOGISTICS.</span></h2>
             <p className="text-slate-400 text-lg mb-12 max-w-lg leading-relaxed">
                From micro-parcels to heavy industrial machinery, our logistics division ensures same-day delivery across the city.
             </p>
             <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                   <div className="text-3xl font-black text-white mb-2 underline decoration-brand-cyan">45 MIN</div>
                   <div className="text-slate-500 text-sm uppercase font-bold tracking-widest">Avg Delivery Time</div>
                </div>
                <div>
                   <div className="text-3xl font-black text-white mb-2 underline decoration-brand-blue">INSURED</div>
                   <div className="text-slate-500 text-sm uppercase font-bold tracking-widest">Safe & Secure</div>
                </div>
             </div>
             <button 
                onClick={() => navigate("/goodsservices")}
                className="px-12 py-6 bg-brand-cyan text-slate-950 rounded-2xl font-black text-lg transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-2xl shadow-brand-cyan/20"
             >
                SEND A PACKAGE
             </button>
          </div>
        </div>
      </section>

      {/* ================= PARTNER SECTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 bg-slate-50 rounded-[60px] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-5xl font-black mb-8 leading-tight">Be your own boss. <br/>Earn on your terms.</h2>
            <p className="text-slate-500 text-lg mb-12 leading-relaxed">
              Join the largest network of drive-partners. Experience seamless registrations, weekly payouts, and 24/7 dedicated partner support.
            </p>
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-blue border border-slate-100 flex-shrink-0">
                    <UserPlus className="w-7 h-7" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black mb-1">Instant Onboarding</h4>
                    <p className="text-slate-400 text-sm lowercase">UPLOAD DOCUMENTS AND START DRIVING IN 24 HOURS.</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-green-500 border border-slate-100 flex-shrink-0">
                    <Zap className="w-7 h-7" />
                 </div>
                 <div>
                    <h4 className="text-xl font-black mb-1">Daily/Weekly Payouts</h4>
                    <p className="text-slate-400 text-sm lowercase">GET YOUR EARNINGS TRANSFERRED WHENEVER YOU NEED.</p>
                 </div>
              </div>
            </div>
            <button className="px-10 py-5 bg-slate-950 text-white rounded-[20px] font-black transition-all hover:bg-brand-blue shadow-2xl shadow-slate-900/20">
              REGISTER AS A PARTNER
            </button>
          </div>
          <div className="flex-1 w-full flex items-center justify-center">
            <div className="relative group w-full">
               <div className="absolute -inset-4 bg-brand-blue/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <img src="/src/assets/images/userReferral.png" alt="Partner" className="w-full relative z-10 rounded-[40px] shadow-2xl skew-y-2 group-hover:skew-y-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD APP ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-slate-950 rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-cyan/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px]"></div>
            
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">Everything in <br/><span className="text-brand-cyan">One App.</span></h2>
              <p className="text-slate-500 text-xl mb-12 max-w-lg leading-relaxed">
                Book rides, track deliveries, manage your profile, and earn rewards—all from the palm of your hand.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl group hover:bg-white hover:text-slate-950 transition-all">
                  <FaGooglePlay className="text-3xl text-brand-cyan group-hover:text-slate-950 transition-colors" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-black text-slate-500">PLAY STORE</div>
                    <div className="text-lg font-black">DOWNLOAD</div>
                  </div>
                </button>
                <button className="flex items-center gap-4 bg-white/5 border border-white/10 px-8 py-5 rounded-3xl group hover:bg-white hover:text-slate-950 transition-all">
                  <FaApple className="text-3xl text-white group-hover:text-slate-950 transition-colors" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] uppercase font-black text-slate-500">APP STORE</div>
                    <div className="text-lg font-black">DOWNLOAD</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex-1 relative order-first lg:order-last">
              <div className="relative z-10 animate-float">
                 <img src="/src/assets/images/mobileImgMatchingUser.png" alt="App Preview" className="w-[300px] md:w-[400px] mx-auto rotate-12 drop-shadow-[0_50px_50px_rgba(0,175,245,0.3)]" />
              </div>
              {/* Floating badges */}
              <div className="absolute top-10 right-0 bg-white p-4 rounded-2xl shadow-2xl animate-float animation-delay-2000 hidden md:block z-20">
                 <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="font-black text-slate-800">4.9/5 Rating</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER MINI ================= */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
         <p className="text-slate-400 text-sm font-medium">© 2026 Dump & Drop Mobility Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;