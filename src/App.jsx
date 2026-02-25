import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const telegramLink = "https://t.me/+Od3Z-DkRQgo4NzA9";

  const handleJoinClick = () => {
    // 1. Fire the Subscribe event for Meta Pixel (Remains Same)
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
    <div className="min-h-screen bg-[#f8fafc] flex justify-center items-center py-8 px-4 font-sans selection:bg-blue-100">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        
        {/* Main Card */}
        <header className="w-full bg-white flex flex-col items-center rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden">
          
          <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-blue-50/40 to-transparent" />

          {/* Logo - Integrated & Clean */}
          <div className="relative mt-12 mb-8">
            <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full scale-125" />
            <div className="relative w-36 h-36 p-1.5 bg-white rounded-[32px] shadow-sm border border-slate-100 flex items-center justify-center">
              <img 
                src="/logo.jpeg" 
                alt="Community Logo" 
                className="w-full h-full rounded-[26px] object-cover" 
              />
            </div>
          </div>

          <div className="px-8 pb-12 w-full text-center space-y-6 z-10">
            <div className="space-y-3">
              <h1 className="text-2xl font-[1000] text-slate-900 uppercase tracking-tight leading-tight">
                PREMIUM ANALYTICS <br/>
                <span className="text-[#0088cc]">SIGNAL COMMUNITY</span>
              </h1>
              
              <div className="h-1 w-12 bg-blue-500/20 mx-auto rounded-full" />

              <p className="text-[12px] font-bold text-slate-400 tracking-[0.1em] uppercase leading-relaxed">
                Join our exclusive community for <br/> 
                <span className="text-slate-600">daily updates and expert insights</span>
              </p>
            </div>

            {/* Safe "Value" Box */}
            <div className="relative py-5 px-4 rounded-3xl bg-slate-50 border border-slate-100 shadow-inner">
              <p className="text-[16px] font-extrabold text-slate-800 leading-snug">
                Unlock Access to Our <br/>
                <span className="text-[#0088cc]">Private Discussion Group</span>
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <motion.button 
                onClick={handleJoinClick}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative py-5 bg-[#0088cc] text-white rounded-2xl shadow-[0_15px_30px_-5px_rgba(0,136,204,0.4)] overflow-hidden"
              >
                <motion.div 
                  animate={{ x: ['-150%', '150%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10 text-lg font-black flex items-center justify-center gap-2">
                  JOIN TELEGRAM GROUP
                </span>
              </motion.button>
              
              <p className="text-[9px] text-slate-400 mt-5 font-bold uppercase tracking-[0.2em] opacity-60">
                Encrypted Connection • Community Access
              </p>
            </div>
          </div>
        </header>

        <footer className="mt-8 flex flex-col items-center gap-2">
          <span className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
            Verified Community Support
          </span>
          <div className="flex gap-4 text-[9px] text-slate-300 font-medium">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;