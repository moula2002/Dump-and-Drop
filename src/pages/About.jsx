import React from "react";
import { 
  ShieldCheck, 
  Users, 
  Award, 
  TrendingUp, 
  Clock, 
  CheckCircle2,
  ChevronRight,
  Globe
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Assets
import heroBg from "../assets/images/about_hero_v2.png";
import excellence3d from "../assets/images/excellence_3d_1776341918917.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .glass-card {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.5);
          }
          .gradient-text {
            background: linear-gradient(135deg, #054794 0%, #00AFF5 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}
      </style>

      {/* Premium Hero Section */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center px-4 overflow-hidden pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
            Redefining <br /> 
            <span className="text-[#00AFF5]">Excellence.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/80 font-medium leading-relaxed mb-12">
            Automating logistics and automotive services with a fusion of 
            unmatched reliability and futuristic engineering.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-[#00AFF5]/10 rounded-[60px] blur-[120px] -z-10 animate-pulse"></div>
            <img src={excellence3d} alt="Excellence" className="w-full max-w-lg mx-auto animate-float drop-shadow-[0_50px_100px_rgba(5,71,148,0.15)]" />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-8 leading-tight">
              Driven by <span className="gradient-text">Ambition</span>
            </h2>
            <div className="space-y-6">
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                We started with a simple vision: to bridge the gap between complex logistical needs and everyday accessibility. Today, we are a powerhouse of high-quality vehicle maintenance and lightning-fast transport solutions.
              </p>
              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
                Our team is built on a foundation of trust, safety, and a relentless pursuit of affordability without ever compromising on precision.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                  <div className="p-3 bg-blue-50 rounded-2xl text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-colors duration-300">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Unmatched Safety</h4>
                    <p className="text-slate-500 text-sm font-bold">Standard of Trust</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                  <div className="p-3 bg-blue-50 rounded-2xl text-[#054794] group-hover:bg-[#054794] group-hover:text-white transition-colors duration-300">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1">Fastest Turnaround</h4>
                    <p className="text-slate-500 text-sm font-bold">Efficiency First</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-900 py-32 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AFF5]/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Why Choose <span className="text-[#00AFF5]">Us?</span></h2>
          <p className="text-slate-400 text-xl font-medium mb-20 max-w-2xl mx-auto">Elevating the standards of service through innovation and dedication.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: <Users size={40} />, 
                title: "Expert Team", 
                desc: "Skilled professionals with decades of combined experience in automotive and logistics engineering.",
                color: "blue" 
              },
              { 
                icon: <Award size={40} />, 
                title: "Verified Excellence", 
                desc: "Every driver and technician undergoes a rigorous multi-stage verification to ensure absolute safety.",
                color: "cyan"
              },
              { 
                icon: <TrendingUp size={40} />, 
                title: "Scalable Solutions", 
                desc: "From 3-wheelers to massive heavy-duty trucks, we scale to match your cargo size and urgency.",
                color: "indigo"
              }
            ].map((value, idx) => (
              <div key={idx} className="group p-10 bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-4">
                <div className="w-20 h-20 rounded-[28px] bg-white/10 flex items-center justify-center text-[#00AFF5] mb-8 mx-auto group-hover:bg-[#00AFF5] group-hover:text-white transition-all duration-500 shadow-xl shadow-blue-900/10">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto glass-card p-12 md:p-20 rounded-[60px] text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.05)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00AFF5]/10 rounded-full blur-[80px]"></div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6">Ready to Experience <span className="gradient-text">the Best?</span></h2>
          <p className="text-slate-500 text-xl font-medium mb-12 max-w-2xl mx-auto">Join the thousands of happy customers who trust us with their vehicles and goods every single day.</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full md:w-auto px-12 py-6 rounded-3xl bg-slate-950 text-white font-black hover:bg-[#054794] transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 hover:gap-6"
            >
              Contact Us <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
