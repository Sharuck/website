import React from "react";

export default function ExpressServicesLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans px-6 py-12 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header Section with Image */}
        <header className="relative mb-24">
          <img
            src="https://images.unsplash.com/photo-1607082349560-4d4e29213c7e"
            alt="Tech Background"
            className="w-full h-96 object-cover rounded-xl grayscale opacity-40"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
              Redefine <span className="font-bold">Speed & Simplicity</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
              Same-day tech repairs, visual design & branding made ultra-modern.
            </p>
            <div className="mt-6">
              <button className="text-md px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-all">
                Get Started
              </button>
            </div>
          </div>
        </header>

        {/* Visual Centerpiece */}
        <div className="flex justify-center items-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1580894894512-d3c27b3efb0e"
            alt="Modern Device Showcase"
            className="rounded-xl object-cover w-full max-w-3xl shadow-xl grayscale"
          />
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 gap-20 mb-24">
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" alt="Phone Repair Icon" className="mb-4 w-12 h-12" />
            <img src="https://images.unsplash.com/photo-1616499370264-0f1f84b187ae" alt="Phone Repair" className="mb-4 rounded-lg" />
            <h2 className="text-2xl font-medium mb-2">001/ Fast Phone Repair</h2>
            <p className="text-gray-400">Same-day hardware fixes using OEM-grade parts and advanced diagnostics.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9183/9183336.png" alt="Design Icon" className="mb-4 w-12 h-12" />
            <img src="https://images.unsplash.com/photo-1627403252606-8e3f1fc37bc2" alt="Design Tools" className="mb-4 rounded-lg" />
            <h2 className="text-2xl font-medium mb-2">002/ Smart Design Tweaks</h2>
            <p className="text-gray-400">Fix your UI/UX, logo or layout problems quickly with professional visual precision.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/8090/8090129.png" alt="Camera Icon" className="mb-4 w-12 h-12" />
            <img src="https://images.unsplash.com/photo-1607082352312-0f5adfc16c1e" alt="Personal Branding Shoot" className="mb-4 rounded-lg" />
            <h2 className="text-2xl font-medium mb-2">003/ Personal Reels & Headshots</h2>
            <p className="text-gray-400">High-quality branding content created fast for social platforms and professional use.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/9209/9209930.png" alt="Support Icon" className="mb-4 w-12 h-12" />
            <img src="https://images.unsplash.com/photo-1612832021590-3b42d714d02d" alt="Futuristic Tech Support" className="mb-4 rounded-lg" />
            <h2 className="text-2xl font-medium mb-2">004/ Future Support</h2>
            <p className="text-gray-400">Ongoing digital and device support to keep you streamlined well after delivery.</p>
          </div>
        </div>

        {/* CTA Block */}
        <div className="text-center border-t border-gray-800 pt-16">
          <p className="text-gray-500 text-md mb-4">Express Delivery | Local Pickup | Digital Transfer</p>
          <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-black text-md px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-all">
              Get in Touch via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
