import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const telegramLink = "https://t.me/+Od3Z-DkRQgo4NzA9";

  const handleJoinClick = () => {
    // 1. Fire the Subscribe event for Meta Pixel
    if (window.fbq) {
      window.fbq('track', 'Subscribe', {
        content_name: 'Telegram Join Button',
        content_category: 'Lead Generation',
        value: 0.00,
        currency: 'INR'
      });
    }

    // 2. Small delay to ensure event is sent before redirect
    setTimeout(() => {
      window.location.href = telegramLink;
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex justify-center items-start py-8 px-4 font-sans selection:bg-blue-100">
      <div className="w-full max-w-[440px] flex flex-col items-center">
        
        {/* Main Card */}
        <header className="w-full bg-white flex flex-col items-center rounded-[48px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden">
          
          <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-blue-50/50 to-transparent" />

          {/* Logo - Sunk/Integrated Effect */}
          <div className="relative mt-12 mb-8">
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-150" />
            <div className="relative w-40 h-40 p-2.5 bg-white rounded-[42px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),inset_0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 flex items-center justify-center">
              <img 
                src="/logo.jpeg" 
                alt="Logo" 
                className="w-full h-full rounded-[34px] object-cover" 
              />
            </div>
          </div>

          <div className="px-8 pb-10 w-full text-center space-y-6 z-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-[1000] text-slate-900 uppercase tracking-tight leading-none">
                HACK NUMBER <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0088cc] to-[#00b4ff]">PREDICTION</span>
              </h1>
              
              <p className="text-[11px] font-black text-slate-400 tracking-[0.25em] uppercase">
                ONLY SURE SHOT PREDICTION FREE GIFT CODE
              </p>
            </div>

            {/* Hindi High-Light Box */}
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/5 blur-xl rounded-full" />
              <div className="relative py-4 px-2 rounded-3xl bg-gradient-to-b from-red-50/80 to-white border border-red-100/50 shadow-sm">
                <p className="text-[22px] font-[900] text-red-600 leading-tight">
                  बड़ा से बड़ा लॉस 100% <br/>
                  <span className="text-emerald-600 font-[1000]">यहाँ Loss Recover होगा</span>
                </p>
              </div>
            </div>

            {/* Pulsing CTA Button */}
            <div className="pt-2">
              <motion.button 
                onClick={handleJoinClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative py-5 bg-[#0088cc] text-white rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,136,204,0.5)] overflow-hidden group"
              >
                <motion.div 
                  animate={{ x: ['-150%', '150%'] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
                />
                <span className="relative z-10 text-xl font-black flex items-center justify-center gap-2">
                  ✅ JOIN TELEGRAM NOW
                </span>
              </motion.button>
              
              <p className="text-[10px] text-slate-400 mt-4 font-bold uppercase tracking-[0.15em] opacity-70">
                Secure Link Managed by Meta Ads
              </p>
            </div>

            {/* Promo Image Integrated */}
            <div className="mt-4 pt-6 border-t border-slate-50">
              <motion.img 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src="/One.jpeg" 
                alt="Game Promo" 
                className="w-full rounded-[32px] shadow-sm border border-slate-100"
              />
            </div>
          </div>
        </header>

        <footer className="mt-8 mb-4">
          <span className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em]">
            Official Apex Ads Support
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;

