import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloatingIcon = () => {
  const whatsappNumber = "919090300300"; // Based on footer contact
  const message = encodeURIComponent("Hello Dump and Drop! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-4 py-2 bg-white text-slate-900 text-sm font-black rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap border border-slate-100 uppercase tracking-tighter">
        Chat with us
      </div>

      {/* Pulsing Aura */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-40"></div>

      {/* Main Button */}
      <div className="relative w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-95 group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.6)]">
        <FaWhatsapp size={35} className="drop-shadow-md" />
      </div>
    </a>
  );
};

export default WhatsappFloatingIcon;
