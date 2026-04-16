import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LoginForm from "./LoginForm";
import dumpLogo from "../assets/images/DUMP.png";
import "./Navbar_v2.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const authMode = "login";

  const navLinkStyle = "premium-nav-item relative flex items-center text-slate-900 hover:text-[#00AFF5] font-black transition-all duration-300 text-[16px] tracking-[-0.05em] cursor-pointer group px-4 py-2";

  const getNavLinkClass = ({ isActive }) =>
    isActive
      ? "premium-nav-item relative flex items-center text-[#00AFF5] font-black transition-all duration-300 text-[16px] tracking-[-0.05em] cursor-pointer group px-4 py-2 nav-pill-active"
      : navLinkStyle;

  const navLinks = [
    { name: "Car Pooling", href: "/" },
    { name: "Goods Delivery", href: "/goodsservices" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-[100] nav-floating-container">
        <nav className="w-full nav-glass-pill px-4 md:px-6 py-4 transition-all duration-500">
          <div className="flex items-center justify-between">

            {/* LOGO AREA */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex items-center justify-center bg-slate-950 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={dumpLogo}
                  alt="Logo"
                  className="relative z-10 w-8 h-8 object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-[-0.06em] text-slate-950 leading-tight">
                  Dump <span className="text-[#00AFF5]">&</span> Drop
                </span>
              </div>
            </Link>

            {/* MIDDLE NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.href} className={getNavLinkClass}>
                  <span className="relative z-10">{link.name}</span>
                  <div className="nav-item-dot"></div>
                </NavLink>
              ))}
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-900 hover:text-brand-blue transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* MOBILE CONTENT */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.href} onClick={() => setMobileMenuOpen(false)} className={getNavLinkClass}>
                  <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </div>

      {showAuth && (
        <LoginForm mode={authMode} onClose={() => setShowAuth(false)} />
      )}
    </>
  );
}

export default Navbar;