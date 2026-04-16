import React from "react";
import { Newspaper } from "lucide-react";
import blogHeroImg from "../assets/images/blog_hero_bg.png";

const Blog = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">

      {/* Hero Section */}
      <div className="relative bg-[#054794] text-white py-20 md:py-32 px-4 text-center overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: `url(${blogHeroImg})` }}
        ></div>
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 mb-6 text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
            <Newspaper size={18} className="text-[#00AFF5]" /> Insights & News
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight">
            Journey into <br /> 
            <span className="text-[#00AFF5]">Discovery.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60 font-medium leading-relaxed mb-10 md:mb-12">
            The latest tips, expert guides, and technological updates from the world of automotive and logistics services.
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Blog 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <span className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em] mb-4 block">Automotive Maintenance</span>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 leading-tight">
              How Regular Car Servicing Saves You Money
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Regular car servicing helps prevent major breakdowns and improves
              vehicle performance. Simple maintenance like oil change, brake
              check and tire inspection can increase your car's lifespan and overall efficiency.
            </p>
            <p className="text-slate-600 font-medium italic">
              Pro-tip: Investing in preventative services today eliminates high-cost emergency repairs in the future.
            </p>
          </div>

          {/* Blog 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <span className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em] mb-4 block">Vehicle Aesthetics</span>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 leading-tight">
              Benefits of Professional Car Washing
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Professional car washing protects your exterior finish, removes abrasive dirt safely,
              and maintains your vehicle's structural integrity.
            </p>
            <p className="text-slate-600 font-medium italic">
              Beyond the gleam, a clean car maintains higher resale value and ensures a more comfortable driving environment.
            </p>
          </div>

          {/* Blog 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
             <span className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em] mb-4 block">Logistics Strategy</span>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 leading-tight">
              Safe Goods Delivery: What You Should Know
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Proper packaging, precise tracking, and expert handling are the pillars of secure logistics.
            </p>
            <p className="text-slate-600 font-medium italic">
              Reliability is key; always partner with a verified logistics provider to ensure your shipments are handled with maximum security.
            </p>
          </div>

          {/* Blog 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-shadow hover:shadow-md">
            <span className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em] mb-4 block">Packaging Guidelines</span>
            <h2 className="text-2xl md:text-3xl font-black mb-4 text-slate-900 leading-tight">
              How to Prepare Goods for Transportation
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Using reinforced materials, clear labeling for fragile items, and secure sealing are essential for transit safety.
            </p>
            <p className="text-slate-600 font-medium italic">
              Standardized preparation significantly reduces the risk of operational delays and transit-related damages.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Blog;
