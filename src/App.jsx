import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Help from "./pages/Help";
import Cancellation from "./pages/Cancellation";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import DriverQuickRide from "./pages/DriverQuickRide";
import Contact from "./pages/Contact";
import Carservices from "./pages/carservices/Carservices";
import Goodsservices from "./pages/goodsservices/Goodsservices";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCallButton from "./components/FloatingCallButton";
import WhatsappFloatingIcon from "./components/WhatsappFloatingIcon";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-grow pt-20">
          <ScrollToTop />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cancellation" element={<Cancellation />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/driverquickride" element={<DriverQuickRide />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Carservices />} />
            <Route path="/goodsservices" element={<Goodsservices />} />

          </Routes>
        </div>
        <FloatingCallButton />
        <WhatsappFloatingIcon />
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
