import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="max-w-2xl mx-auto text-lg">
          How we collect, use, and protect your personal information at Dump and Drop
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        
        {/* Section 1: Information Collection */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            Information We Collect
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We collect information you provide directly to us, such as when you create an account, book a ride, or contact support. This includes your name, email, phone number, and payment information.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We also automatically collect certain information when you use our services, including location data, device information, and usage patterns to ensure a seamless experience.
          </p>
        </div>

        {/* Section 2: Use of Information */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            How We Use Your Data
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Your data is used primarily to provide and improve our services, including processing bookings, communicating with you, and personalizing your experience.
          </p>
          <p className="text-slate-600 leading-relaxed">
            We also use information for safety and security purposes, such as verifying user identities and monitoring for fraudulent activities.
          </p>
        </div>

        {/* Section 3: Data Sharing */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            Information Sharing
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            We do not sell your personal information. We may share data with service providers who perform tasks on our behalf, such as payment processing and data analysis.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Information may also be shared when required by law or to protect the rights and safety of Dump and Drop, our users, and others.
          </p>
        </div>

        {/* Section 4: Data Security */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            Your Privacy Controls
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            You have the right to access, correct, or delete your personal information through your account settings at any time.
          </p>
          <p className="text-slate-600 leading-relaxed">
            You can also opt-out of receiving promotional communications from us by following the instructions in those messages.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <p className="text-sm text-blue-700">
            <strong>Update Notice:</strong> This privacy policy was last updated on April 20, 2026. We may update this policy from time to time, so please review it frequently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
