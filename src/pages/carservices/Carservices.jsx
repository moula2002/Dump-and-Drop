import React, { useState } from "react";
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Search,
  Car,
  User,
  Phone,
  CreditCard,
  CheckCircle,
  Navigation,
  Star,
  ChevronRight,
  Shield,
  Eye,
  Info,
  ShieldCheck,
  Zap,
  ThumbsUp,
  Map as MapIcon,
  Smartphone,
  Timer
} from "lucide-react";
import { FaUsers, FaCarSide, FaLeaf, FaStar, FaRupeeSign, FaGooglePlay, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Carservices() {
  const navigate = useNavigate();
  const testimonials = [
    {
      name: "Jerome Bell",
      role: "Daily Commuter",
      image: "/src/assets/images/review1.jpg",
      text: "I've been using Dump and Drop for my daily commute, and I'm always impressed by their prompt service and professional drivers.",
      stars: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Business Traveler",
      image: "/src/assets/images/review2.jpg",
      text: "The best ride-hailing experience I've had. The app is intuitive and the cars are always clean and well-maintained.",
      stars: 5
    },
    {
      name: "Michael Chen",
      role: "Urban Explorer",
      image: "/src/assets/images/review3.jpg",
      text: "Safe, reliable, and affordable. Dump and Drop has become my go-to choice for getting around the city quickly.",
      stars: 5
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-blue selection:text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-20 pb-12 overflow-hidden bg-slate-950">
        {/* Professional Full-Bleed Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/car_service_bg.png" 
            alt="Premium Ride" 
            className="w-full h-full object-cover transform scale-105"
          />
          {/* No Gradient Overlay - Image 100% Visible */}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 py-12 min-h-[480px] flex items-center justify-end font-sans">
          <div className="max-w-xl text-right flex flex-col items-end">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-[40px] border border-white/40 shadow-2xl">
              {/* High-Visibility Pre-header */}


              <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] mb-6 tracking-tighter">
                Rides for <br/>
                <span className="text-brand-blue">every need.</span>
              </h1>

              <p className="text-slate-800 text-base md:text-lg mb-10 leading-relaxed font-bold max-w-xl border-r-[3px] border-brand-blue pr-6 text-right">
                Book a taxi in seconds with real-time tracking, instant driver matching, and secure payments all from one easy-to-use app.
              </p>
              
              <div className="flex flex-wrap gap-6 items-center justify-end">

              {/* Clean App Store Buttons */}
              <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-4 bg-slate-950/90 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,175,245,0.2)] group">
                  <svg viewBox="0 0 512 512" className="w-7 h-7">
                     <path fill="#4db6ac" d="M12 56l244 200L12 456z"/>
                     <path fill="#dce775" d="M12 56L256 56l122 100z"/>
                     <path fill="#f06292" d="M12 456l244 0 122-100z"/>
                     <path fill="#ffd54f" d="M378 156l122 100-122 100z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-500 font-black uppercase">GET IT ON</div>
                    <div className="text-xl font-bold text-white uppercase tracking-tight">Google Play</div>
                  </div>
                </button>
              </a>

              <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                <button className="flex items-center gap-4 bg-slate-950/90 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl hover:bg-slate-900 transition-all duration-300 hover:border-brand-cyan hover:shadow-[0_0_20px_rgba(0,175,245,0.2)] group">
                  <FaApple className="text-3xl text-white" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-slate-500 font-black uppercase">Download on the</div>
                    <div className="text-xl font-bold text-white uppercase tracking-tight">App Store</div>
                  </div>
                </button>
              </a>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ================= WHY CHOOSE DUMP AND DROP ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
              <span className="text-brand-blue font-black tracking-widest text-[11px] uppercase">Why Choose</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">Dump and Drop.</h2>
              <p className="text-slate-500 max-w-xl mx-auto font-medium">Your smart way to move around the city</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Card 1: Fast Ride Booking */}
              <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group text-center flex flex-col items-center h-full">
                 <div className="relative mb-8 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img src="/src/assets/images/Fast booking.png" alt="Fast Booking" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-brand-blue transition-colors">Fast Ride Booking</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Book your taxi instantly with one tap. No waiting, no hassle.</p>
              </div>

              {/* Card 2: Real-Time Tracking */}
              <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group text-center flex flex-col items-center h-full border-b-[6px] border-b-brand-blue">
                 <div className="relative mb-8 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img src="/src/assets/images/Real tracking.png" alt="Real Tracking" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-brand-blue transition-colors">Real-Time Tracking</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Track your ride live on the map from pickup to drop-off.</p>
              </div>

              {/* Card 3: Safe & Verified Drivers */}
              <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group text-center flex flex-col items-center h-full">
                 <div className="relative mb-8 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img src="/src/assets/images/Safe and verify.png" alt="Safe and Verify" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-brand-blue transition-colors">Safe & Verified Drivers</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Every driver is background-checked and trained for customer safety.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Card 4: Multiple Payment Options */}
              <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group text-center flex flex-col items-center h-full">
                 <div className="relative mb-8 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img src="/src/assets/images/multiple-payment.png" alt="Payments" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-brand-blue transition-colors">Multiple Payment Options</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">Pay with cash, card, wallet, or UPI — whatever suits you best.</p>
              </div>

              {/* Card 5: Affordable & Transparent Pricing */}
              <div className="p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 group text-center flex flex-col items-center h-full">
                 <div className="relative mb-8 w-full aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
                    <img src="/src/assets/images/Affordable price.png" alt="Pricing" className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <h3 className="text-2xl font-black mb-4 group-hover:text-brand-blue transition-colors">Affordable & Transparent Pricing</h3>
                 <p className="text-slate-500 text-sm leading-relaxed">No hidden charges. See your fare estimate before confirming the ride.</p>
              </div>
           </div>
        </div>
      </section>      {/* ================= FEATURES OVERVIEW ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] flex-grow bg-slate-200 border-t border-dashed border-slate-300"></div>
            <span className="text-brand-blue font-black tracking-[0.2em] text-[11px] uppercase whitespace-nowrap">Features Overview</span>
            <div className="h-[1px] flex-grow bg-slate-200 border-t border-dashed border-slate-300"></div>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Dump and Drop</h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed font-medium">
              Discover our story and commitment to providing seamless, reliable, and convenient 
              transportation services for all your travel needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature 1: Smart Navigation */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-sm border border-slate-100 overflow-hidden transform transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/src/assets/images/smart navigation.jfif" 
                  alt="Smart Navigation" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="text-xl font-black mb-4 group-hover:text-brand-blue transition-colors">Smart Navigation</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">Optimized routes to ensure faster and smoother rides.</p>
            </div>

            {/* Feature 2: Ratings & Reviews */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-sm border border-slate-100 overflow-hidden transform transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/src/assets/images/rating and reviews.png" 
                  alt="Ratings & Reviews" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="text-xl font-black mb-4 group-hover:text-brand-blue transition-colors">Ratings & Reviews</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">Rate your ride and share feedback to improve the service.</p>
            </div>

            {/* Feature 3: Offers & Discounts */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-sm border border-slate-100 overflow-hidden transform transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/src/assets/images/offer and discount.png" 
                  alt="Offers & Discounts" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="text-xl font-black mb-4 group-hover:text-brand-blue transition-colors">Offers & Discounts</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">Get exclusive promo codes and loyalty rewards on every trip.</p>
            </div>

            {/* Feature 4: Profile & Booking History */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 bg-white rounded-[32px] flex items-center justify-center mb-8 shadow-sm border border-slate-100 overflow-hidden transform transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/src/assets/images/profile and history.png" 
                  alt="Profile & History" 
                  className="w-full h-full object-contain p-2"
                />
              </div>
              <h4 className="text-xl font-black mb-4 group-hover:text-brand-blue transition-colors">Profile & Booking History</h4>
              <p className="text-slate-500 text-sm leading-relaxed px-4">Easily manage your trips, favorites, and payment methods.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= CUSTOMER TESTIMONIALS (Architectural Split UI) ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Quote */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-serif text-slate-50 select-none pointer-events-none -z-10 opacity-50 italic">
          &ldquo;
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* LEFT: User Profile / Frame */}
            <div className="w-full lg:w-1/3 flex justify-center">
               <div className="relative group">
                  {/* Rotating Border Frame */}
                  <div className="absolute -inset-4 border border-brand-blue/20 rounded-[50px] animate-spin-slow group-hover:border-brand-blue/40 transition-colors"></div>
                  <div className="absolute -inset-8 border border-slate-100 rounded-[60px] animate-reverse-spin-slow group-hover:border-slate-200 transition-colors"></div>
                  
                  <div className="relative w-[280px] h-[350px] bg-slate-100 rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105" key={`img-frame-${activeIndex}`}>
                     <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="w-full h-full object-cover animate-fade-in"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                     <div className="absolute bottom-8 left-8 right-8 text-white">
                        <div className="text-xl font-black">{testimonials[activeIndex].name}</div>
                        <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{testimonials[activeIndex].role}</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* RIGHT: The Testimonial */}
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex gap-2 mb-8 text-yellow-400 group" key={`stars-split-${activeIndex}`}>
                  {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                    <Star key={i} size={24} fill="currentColor" className="animate-fade-in" />
                  ))}
                </div>

                <div className="relative" key={`content-split-${activeIndex}`}>
                  <p className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-10 animate-fade-in">
                    {testimonials[activeIndex].text}
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="h-[2px] w-20 bg-brand-blue"></div>
                    <span className="text-brand-blue font-black uppercase tracking-widest text-xs">Verified Experience</span>
                  </div>
                </div>

                {/* Navigation & Progress */}
                <div className="flex items-center gap-8 mt-16">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                      className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all shadow-sm"
                    >
                      <ChevronRight className="w-6 h-6 rotate-180" />
                    </button>
                    <button 
                      onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                      className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all shadow-sm"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="flex gap-2">
                    {testimonials.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`h-1.5 transition-all duration-500 rounded-full ${
                          activeIndex === idx ? "w-12 bg-brand-blue" : "w-4 bg-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] flex-grow bg-slate-200 border-t border-dashed border-slate-300"></div>
            <span className="text-brand-blue font-black tracking-[0.2em] text-[11px] uppercase whitespace-nowrap">Process Flow</span>
            <div className="h-[1px] flex-grow bg-slate-200 border-t border-dashed border-slate-300"></div>
          </div>
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 1: Select Pickup & Destination */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-10 w-full aspect-[3/4] rounded-[40px] bg-white border border-slate-100 shadow-sm overflow-hidden p-4 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src="/src/assets/images/mobileImgFindPool.png" 
                  alt="Select Pickup" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-black shadow-lg">1</div>
              </div>
              <h4 className="text-lg font-black mb-2 px-2 uppercase tracking-tighter">Select Pickup & Destination</h4>
              <div className="w-10 h-[2px] bg-brand-blue mb-4"></div>
              <p className="text-slate-500 text-sm leading-relaxed px-4 italic font-medium">Enter your pickup location and where you want to go.</p>
            </div>

            {/* Step 2: Choose Your Ride Type */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-10 w-full aspect-[3/4] rounded-[40px] bg-white border border-slate-100 shadow-sm overflow-hidden p-4 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src="/src/assets/images/mobileImgCheckIn.png" 
                  alt="Choose Ride" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-black shadow-lg">2</div>
              </div>
              <h4 className="text-lg font-black mb-2 px-2 uppercase tracking-tighter">Choose Your Ride Type</h4>
              <div className="w-10 h-[2px] bg-brand-blue mb-4"></div>
              <p className="text-slate-500 text-sm leading-relaxed px-4 italic font-medium">Economy, Premium, or XL — select the ride that fits your needs.</p>
            </div>

            {/* Step 3: Get Matched With a Driver */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-10 w-full aspect-[3/4] rounded-[40px] bg-white border border-slate-100 shadow-sm overflow-hidden p-4 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src="/src/assets/images/mobileImgMatchingUser.png" 
                  alt="Matched with Driver" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-black shadow-lg">3</div>
              </div>
              <h4 className="text-lg font-black mb-2 px-2 uppercase tracking-tighter">Get Matched With a Driver</h4>
              <div className="w-10 h-[2px] bg-brand-blue mb-4"></div>
              <p className="text-slate-500 text-sm leading-relaxed px-4 italic font-medium">A nearby driver accepts your ride instantly.</p>
            </div>

            {/* Step 4: Track & Arrive Safely */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative mb-10 w-full aspect-[3/4] rounded-[40px] bg-white border border-slate-100 shadow-sm overflow-hidden p-4 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src="/src/assets/images/mobileImgEndRide.png" 
                  alt="Track Arrive Safely" 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 w-10 h-10 bg-brand-blue text-white rounded-full flex items-center justify-center font-black shadow-lg">4</div>
              </div>
              <h4 className="text-lg font-black mb-2 px-2 uppercase tracking-tighter">Track & Arrive Safely</h4>
              <div className="w-10 h-[2px] bg-brand-blue mb-4"></div>
              <p className="text-slate-500 text-sm leading-relaxed px-4 italic font-medium">Track the driver's arrival and enjoy a safe journey to your destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD APP (High-Contrast UI) ================= */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#2B4592] rounded-[60px] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16 shadow-2xl">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
            
            <div className="flex-1 relative z-10 text-center lg:text-left">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
                Download the <br/>
                <span className="text-brand-cyan">Dump and Drop</span> <br/>
                App Today
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  "Our user-friendly app allows you to book rides in seconds, track your driver in real-time, and enjoy secure payments.",
                  "With 24/7 customer support, your journey with Dump and Drop is always in good hands.",
                  "Download now and discover stress-free transportation wherever you go."
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-4 text-white/90">
                    <div className="w-6 h-6 rounded-full border-2 border-brand-cyan flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle size={14} className="text-brand-cyan" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                  <div className="bg-black/20 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-black/30 transition-all">
                    <FaGooglePlay className="text-2xl text-white" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase font-bold text-white/50">GET IT ON</div>
                      <div className="text-lg font-black text-white">Google Play</div>
                    </div>
                  </div>
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                  <div className="bg-black/20 backdrop-blur-md border border-white/10 px-8 py-4 rounded-2xl flex items-center gap-4 hover:bg-black/30 transition-all">
                    <FaApple className="text-2xl text-white" />
                    <div className="text-left leading-tight">
                      <div className="text-[10px] uppercase font-bold text-white/50">DOWNLOAD ON THE</div>
                      <div className="text-lg font-black text-white">App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex-1 relative group">
              <div className="relative z-10 animate-float">
                 <img 
                    src="/src/assets/images/mobileImgCompleted.png" 
                    alt="App Preview" 
                    className="w-[320px] md:w-[450px] mx-auto drop-shadow-[0_50px_80px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-110" 
                 />
              </div>
              <div className="absolute inset-0 bg-brand-cyan/20 blur-[100px] rounded-full -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Carservices;
