import React from 'react';
import { motion } from 'framer-motion';

function App() {
  const telegramLink = "https://t.me/+9SbYLiIlhlEwYzc1";

  const handleJoinClick = () => {
    // 1. Fire Meta Pixel 'Subscribe' event
    if (window.fbq) {
      window.fbq('track', 'Subscribe', {
        content_name: 'Telegram Join Button',
        content_category: 'Engagement'
      });
    }

    // 2. Delay for 500ms to allow Pixel to fire before redirect
    setTimeout(() => {
      window.location.href = telegramLink;
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-start py-8 px-4 font-sans">
      <div className="w-full max-w-[450px] flex flex-col gap-5 items-center">
        
        {/* Main Content Card */}
        <header className="w-full bg-white text-center flex flex-col items-center p-8 rounded-[32px] shadow-sm">
          
          {/* Animated Logo Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#0088cc] to-[#00ffcc] flex items-center justify-center mb-4"
          >
            <img 
              src="/logo.jpeg" 
              alt="Logo" 
              className="w-full h-full rounded-full object-cover bg-white" 
            />
          </motion.div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
              HACK NUMBER PREDICTION
            </h1>
            <p className="text-sm font-bold text-slate-600">
              ONLY SURE SHOT PREDICTION FREE GIFT CODE AVAILABLE
            </p>
            <p className="text-lg font-extrabold text-red-600">
              बड़ा से बड़ा लॉस 100% <span className="text-emerald-500">यहाँ Loss Recover</span>
            </p>
          </div>

          {/* Pulsing CTA Button */}
          <motion.button 
            onClick={handleJoinClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{ 
              boxShadow: ["0px 0px 0px rgba(0, 136, 204, 0)", "0px 0px 20px rgba(0, 136, 204, 0.5)", "0px 0px 0px rgba(0, 136, 204, 0)"] 
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-full py-5 mt-6 text-lg font-bold bg-[#0088cc] text-white rounded-2xl shadow-lg border-none cursor-pointer"
          >
            ✅ JOIN TELEGRAM NOW
          </motion.button>
          
          <p className="text-[10px] text-slate-400 mt-3 font-medium uppercase tracking-wider">
            Click above to get instant access
          </p>
        </header>

        {/* Promo Image */}
        <motion.img 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          src="/One.jpeg" 
          alt="Game Promo" 
          className="w-full rounded-[24px] shadow-md"
        />

        <footer className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Managed by APEX ADS
        </footer>
      </div>
    </div>
  );
}

export default App;