import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import dumpLogo from "../assets/images/DUMP.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">

          {/* Company Info - Span 4 */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-xl overflow-hidden">
                <img src={dumpLogo} alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-[-0.05em] text-white leading-tight">
                  Dump <span className="text-[#00AFF5]">&</span> Drop
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
              The premier choice for authoritative car pooling and high-performance logistics across the industrial corridors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#054794] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#054794] transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#054794] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#054794] transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services - Span 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Car Pooling</Link></li>
              <li><Link to="/goodsservices" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Goods Delivery</Link></li>
              <li><Link to="/driverquickride" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Driver Quick Ride</Link></li>
            </ul>
          </div>

          {/* Company - Span 2 */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em]">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy-policy" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Terms of Service</Link></li>
              <li><Link to="/cancellation" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Cancellation</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">About Us</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white font-black text-sm transition-colors uppercase tracking-widest">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info - Span 4 */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-xs font-black text-[#00AFF5] uppercase tracking-[0.2em]">Support Desk</h4>
            <ul className="flex gap-8 mb-4">
              <li><Link to="/contact" className="text-slate-400 hover:text-white font-black text-xs transition-colors uppercase tracking-widest">Contact Us</Link></li>
              <li><Link to="/help" className="text-slate-400 hover:text-white font-black text-xs transition-colors uppercase tracking-widest">Help Center</Link></li>
            </ul>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-900">
                <Phone size={20} className="text-[#00AFF5] mt-1" />
                <div>
                  <h5 className="font-black text-xs text-slate-500 uppercase tracking-widest mb-1">Direct Line</h5>
                  <p className="text-white font-black text-lg">+91 9090300300</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 bg-slate-900/50 rounded-2xl border border-slate-900">
                <Mail size={20} className="text-[#00AFF5] mt-1" />
                <div>
                  <h5 className="font-black text-xs text-slate-500 uppercase tracking-widest mb-1">Legal & Support</h5>
                  <p className="text-white font-black text-lg">support@dumpdrop.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-500 text-xs font-black uppercase tracking-[0.1em]">
            © {currentYear} Dump & Drop. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-10 text-xs font-black uppercase tracking-widest text-slate-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-slate-700">|</span>
            <span>Powered by <span className="text-white tracking-normal font-black uppercase">INNOMATRICS TECH.</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;