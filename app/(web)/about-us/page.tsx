import React from 'react';

// --- Sub-Components ---

const AboutHero = () => (
  <section className="relative bg-gray-900 text-white py-24 px-6 overflow-hidden">
    {/* Decorative Background Element */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#FF6900] opacity-20 blur-[120px] rounded-full"></div>
    
    <div className="max-w-7xl mx-auto relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
        Connecting You to the <span className="text-[#FF6900]">Future</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
        At PhoneHut, we believe a phone is more than just a device—it's your gateway to the world. We provide the latest tech with honest reviews and unbeatable prices.
      </p>
    </div>
  </section>
);

const Stats = () => {
  const data = [
    { label: "Phones Sold", value: "10k+" },
    { label: "Happy Reviews", value: "4.8/5" },
    { label: "Expert Specs", value: "500+" },
  ];

  return (
    <div className="bg-[#FF6900] py-12 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
        {data.map((item, index) => (
          <div key={index} className="group">
            <div className="text-5xl font-black mb-1 group-hover:scale-110 transition-transform duration-300">
              {item.value}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold opacity-90">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Mission = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
    <div className="relative group">
       {/* Visual Placeholder for a Phone Image */}
      <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center p-8 overflow-hidden">
        <div className="text-gray-400 text-center">
           <p className="italic font-medium">Inside the Hut Visual</p>
           <p className="text-sm">Device Details & Reviews</p>
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-[#FF6900] opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      </div>
    </div>
    <div>
      <h2 className="text-4xl font-bold mb-8 text-gray-800 border-l-8 border-[#FF6900] pl-6">
        Our Mission
      </h2>
      <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
        <p>
          Founded with a passion for mobile innovation, <strong className="text-gray-900">PhoneHut</strong> was built to solve one problem: the overwhelming noise in the tech market.
        </p>
        <p>
          We don't just sell phones; we provide a platform where you can deep-dive into <strong>technical specifications</strong>, read <strong>verified user reviews</strong>, and compare the latest features side-by-side.
        </p>
        <p>
          Our goal is to ensure you never regret an upgrade again. Simple, honest, and tech-focused.
        </p>
      </div>
    </div>
  </section>
);

const Features = () => {
  const perks = [
    { 
        title: "Deep Specifications", 
        desc: "From Nits of brightness to Camera sensor sizes, we cover every detail.",
        icon: "📊"
    },
    { 
        title: "Community Driven", 
        desc: "Real feedback from the PhoneHut community helps you make better choices.",
        icon: "🤝" 
    },
    { 
        title: "Fast Logistics", 
        desc: "Secure packaging and rapid delivery so your new tech arrives safely.",
        icon: "🚀"
    }
  ];

  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why the World Shops at PhoneHut</h2>
          <div className="w-24 h-1 bg-[#FF6900] mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {perks.map((perk, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:border-[#FF6900] transition-colors duration-300">
              <div className="text-4xl mb-6">{perk.icon}</div>
              <h3 className="font-bold text-2xl mb-4 text-gray-800">{perk.title}</h3>
              <p className="text-gray-500 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main Page Component ---

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <Stats />
      <Mission />
      <Features />
      
      {/* Call to Action Section */}
      <section className="py-24 text-center px-6">
        <div className="max-w-3xl mx-auto bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Find Your Next Companion</h2>
          <p className="text-gray-400 mb-8">Browse our collection of the latest flagships and budget kings.</p>
          <button className="bg-[#FF6900] text-white px-10 py-4 rounded-full font-black hover:scale-105 hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20">
            EXPLORE PHONES
          </button>
        </div>
      </section>
    </main>
  );
}