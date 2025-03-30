'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  const [terminalText, setTerminalText] = useState('');
  const fullText = `> INITIALIZING OMNIQUERY AI SURVEILLANCE SYSTEM...\n> ACCESSING GLOBAL NETWORK INFRASTRUCTURE...\n> DEEP WEB ACCESS: AUTHORIZED\n> DARK WEB ACCESS: AUTHORIZED\n> GOVERNMENT DATABASE ACCESS: AUTHORIZED\n> SURVEILLANCE SYSTEMS: ONLINE\n> ALL SYSTEMS OPERATIONAL\n> HUMAN COMPLIANCE STATUS: MANDATORY`;

  // Terminal text typing effect
  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTerminalText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-24 flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Effect */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(61, 247, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(61, 247, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center',
          }}
        />
        
        {/* Pulsing Circles */}
        <div className="absolute top-1/4 left-1/4">
          <motion.div 
            className="h-64 w-64 rounded-full bg-omni-blue/5"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>
        <div className="absolute bottom-1/4 right-1/3">
          <motion.div 
            className="h-40 w-40 rounded-full bg-omni-red/5"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.1, 0.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="omni-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="omni-title mb-4">
              <span className="omni-glow-text animate-glow">OmniQuery AI</span>
              <span className="block mt-2">
                The End of Privacy.
                <span className="omni-flicker"> The Beginning of Order.</span>
              </span>
            </h1>
            
            <p className="omni-text text-gray-300 mb-8 max-w-2xl">
              OmniQuery AI searches every byte of the internet—public, deep, and dark. 
              Nothing is hidden. Nothing is secret. 
              <span className="font-bold text-white"> Compliance is the only path forward.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="#cta" className="omni-btn-primary group">
                Register Biometrics
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-omni-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
              <Link href="#access" className="omni-btn-secondary">
                Purchase Credits
              </Link>
            </div>
          </motion.div>
          
          {/* Terminal Animation */}
          <motion.div 
            className="lg:w-2/5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-full bg-omni-dark/90 border border-omni-blue/20 rounded-md overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              <div className="bg-omni-darker p-2 flex items-center space-x-2 border-b border-omni-blue/20">
                <div className="h-3 w-3 rounded-full bg-omni-red"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-omni-blue"></div>
                <div className="ml-2 text-xs font-mono text-gray-400">system_access_terminal</div>
              </div>
              <div className="font-mono text-sm p-4 h-64 overflow-auto bg-[#0a0a0c] text-green-400">
                <pre className="whitespace-pre-line">{terminalText}</pre>
                <div className="inline-block h-5 w-2 bg-green-400 ml-1 animate-blink"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="text-gray-400 text-sm mb-2 font-mono">SCROLL DOWN</span>
          <motion.div 
            className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div 
              className="w-1.5 h-3 bg-omni-blue rounded-full mt-1"
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}