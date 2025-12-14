import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 border-t relative bg-white/[0.01] border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl font-semibold font-geist tracking-tight text-white">Frequently Asked Questions</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="animate-on-scroll">
            <h3 className="text-lg font-medium font-geist mb-2 text-white">How long does an MVP take?</h3>
            <p className="text-sm leading-relaxed font-geist text-white/60">A typical MVP takes between 3 to 6 weeks depending on complexity. We prioritize core features to get you to market faster.</p>
          </div>
          <div className="animate-on-scroll">
            <h3 className="text-lg font-medium font-geist mb-2 text-white">Do I own the code?</h3>
            <p className="text-sm leading-relaxed font-geist text-white/60">Yes, absolutely. Once the project is paid in full, you own 100% of the Intellectual Property, code repository, and design assets.</p>
          </div>
          <div className="animate-on-scroll">
            <h3 className="text-lg font-medium font-geist mb-2 text-white">What tech stack do you use?</h3>
            <p className="text-sm leading-relaxed font-geist text-white/60">We primarily use React/Next.js for web, Flutter/React Native for mobile, and Node.js/Python for backend. We choose the best tool for the specific job.</p>
          </div>
          <div className="animate-on-scroll">
            <h3 className="text-lg font-medium font-geist mb-2 text-white">Do you provide maintenance?</h3>
            <p className="text-sm leading-relaxed font-geist text-white/60">Yes, we offer ongoing support packages to handle updates, security patches, and server monitoring after launch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;