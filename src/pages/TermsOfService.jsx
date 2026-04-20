import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="max-w-2xl mx-auto text-lg">
          The legal agreement between you and Dump and Drop regarding our services
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-1 gap-10">
        
        {/* Section 1: Acceptance */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            1. Acceptance of Terms
          </h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing or using the Dump and Drop platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you are prohibited from using or accessing our services.
          </p>
        </div>

        {/* Section 2: User Accounts */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            2. User Responsibilities
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Users must provide accurate, current, and complete information during the registration process and keep their account information updated at all times.
          </p>
        </div>

        {/* Section 3: Service Rules */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            3. Pricing and Payments
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Fares and service fees are calculated based on distance, vehicle type, and current demand. All payments are processed through secure third-party payment gateways.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Dump and Drop reserves the right to adjust pricing at its discretion. Users will be notified of the total estimated cost before confirming any booking.
          </p>
        </div>

        {/* Section 4: Liability */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-black mb-4 text-slate-900 uppercase tracking-tight">
            4. Limitation of Liability
          </h2>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Dump and Drop shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
          </p>
          <p className="text-slate-600 leading-relaxed">
            While we strive for 100% reliability, we do not guarantee that the service will be uninterrupted or error-free at all times.
          </p>
        </div>

      </div>

      {/* Footer Note */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
          <p className="text-sm text-orange-700">
            <strong>Important:</strong> These terms were last updated on April 20, 2026. Continued use of our platform constitutes your acceptance of any changes made to these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
