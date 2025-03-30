'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// Currency exchange rates (pretend these are from an API)
const EXCHANGE_RATES = {
  USD: 1.0,
  EUR: 0.92,
  INR: 83.45,
  CNY: 7.23
};

export default function AccessSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // Calculator state
  const [dailySearches, setDailySearches] = useState(100);
  const [currency, setCurrency] = useState('USD');
  const [calculatorVisible, setCalculatorVisible] = useState(false);
  
  // Calculated values
  const monthlySearches = dailySearches * 30;
  const basePrice = 0.15; // Base price per credit in USD
  
  // Calculate discount based on tiers
  const getDiscount = (amount: number) => {
    if (amount >= 5000) return 0.5; // 50% discount
    if (amount >= 3000) return 0.4; // 40% discount
    if (amount >= 1500) return 0.3; // 30% discount
    if (amount >= 500) return 0.2; // 20% discount
    if (amount >= 100) return 0.1; // 10% discount
    return 0; // No discount
  };
  
  const discount = getDiscount(monthlySearches);
  const discountedPrice = basePrice * (1 - discount);
  const totalCost = (discountedPrice * monthlySearches * EXCHANGE_RATES[currency as keyof typeof EXCHANGE_RATES]).toFixed(2);
  
  // Currency symbols
  const currencySymbols: {[key: string]: string} = {
    USD: '$',
    EUR: '€',
    INR: '₹',
    CNY: '¥'
  };

  // Biometric scan animation effect
  const [scanComplete, setScanComplete] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  
  useEffect(() => {
    if (isInView && !calculatorVisible) {
      const timer = setTimeout(() => {
        setCalculatorVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, calculatorVisible]);

  // Function to simulate a biometric scan
  const startBiometricScan = () => {
    setScanComplete(false);
    setScanProgress(0);
    
    const interval = setInterval(() => {
      setScanProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setScanComplete(true), 500);
          return 100;
        }
        return newProgress;
      });
    }, 30);
    
    return () => clearInterval(interval);
  };

  return (
    <section id="access" className="py-24 relative bg-omni-dark" ref={sectionRef}>
      <div className="omni-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="omni-title mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            How to <span className="omni-glow-text">Access</span> OmniQuery AI
          </motion.h2>
          <motion.p 
            className="omni-text text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Biometric registration is mandatory for all citizens. Upon verification, you will receive information credits to begin accessing the system. Additional credits must be purchased to maintain compliance.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Registration Process */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="omni-subtitle mb-6 flex items-center">
              <span className="text-omni-blue mr-3 text-3xl">01</span>
              Registration Process
            </h3>

            <div className="space-y-8">
              <div className="omni-card relative overflow-visible">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-omni-blue text-omni-darker rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <h4 className="font-display text-lg mb-3">Biometric Scan Registration</h4>
                <p className="text-gray-300 mb-4">
                  Submit to a comprehensive biometric scan including retinal, facial, fingerprint, and DNA sampling. This data becomes your permanent identifier in the OmniQuery AI system.
                </p>
                
                <div className="mt-6 p-4 bg-omni-darker/70 rounded border border-omni-blue/10 flex items-center gap-4">
                  {!scanComplete ? (
                    <>
                      <div className="min-w-16 h-16 relative rounded-full bg-black/60 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative w-8 h-12">
                            <div 
                              className="absolute top-0 left-0 w-full bg-omni-blue/30 rounded-sm"
                              style={{
                                height: `${scanProgress}%`,
                                transition: 'height 0.2s linear'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-omni-blue font-mono mb-2">
                          BIOMETRIC SCAN {scanProgress}% COMPLETE
                        </p>
                        <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-omni-blue"
                            style={{
                              width: `${scanProgress}%`,
                              transition: 'width 0.2s linear'
                            }}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="min-w-16 h-16 relative rounded-full bg-black/60 flex items-center justify-center overflow-hidden border-2 border-omni-blue animate-pulse">
                        <svg className="w-10 h-10 text-omni-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-omni-blue font-mono mb-2">
                          BIOMETRIC SCAN COMPLETE
                        </p>
                        <p className="text-xs text-gray-400">
                          Assigned Biometric Tax ID: BX-{Math.floor(100000 + Math.random() * 900000)}
                        </p>
                      </div>
                    </>
                  )}
                </div>
                
                <button 
                  onClick={startBiometricScan}
                  className="mt-4 px-4 py-2 bg-omni-blue/20 text-omni-blue text-sm font-mono hover:bg-omni-blue/30 transition-colors rounded"
                >
                  {scanComplete ? 'RESCAN BIOMETRICS' : 'INITIATE SCAN SIMULATION'}
                </button>
              </div>
              
              <div className="omni-card">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-omni-blue text-omni-darker rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <h4 className="font-display text-lg mb-3">Receive Initial Credits</h4>
                <p className="text-gray-300">
                  Upon successful registration, you will be granted 50 information credits. These are sufficient for basic compliance but will be depleted quickly. Additional credits must be purchased immediately.
                </p>
              </div>
              
              <div className="omni-card">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-omni-blue text-omni-darker rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <h4 className="font-display text-lg mb-3">Maintain Compliance</h4>
                <p className="text-gray-300">
                  Regular credit purchases are monitored to ensure system participation. Failure to maintain an adequate credit balance will result in a Class-1 Social Violation and mandatory corrective action.
                </p>
                <div className="mt-4 p-3 bg-omni-red/10 border border-omni-red/20 rounded text-omni-red text-sm font-mono">
                  WARNING: NON-COMPLIANCE IS NOT AN OPTION
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Calculator */}
          <AnimatePresence>
            {calculatorVisible && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 30 }}
                transition={{ duration: 0.6 }}
                className="bg-omni-darker border border-omni-blue/20 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.7)]"
              >
                <div className="bg-gradient-to-r from-omni-dark to-omni-darker p-4 border-b border-omni-blue/20">
                  <h3 className="font-display text-xl text-white">Information Credit Calculator</h3>
                </div>
                
                <div className="p-6">
                  <div className="mb-8">
                    <label className="block text-gray-300 mb-2 font-mono text-sm">ESTIMATED DAILY SEARCHES</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="10"
                        max="1000"
                        step="10"
                        value={dailySearches}
                        onChange={(e) => setDailySearches(parseInt(e.target.value))}
                        className="w-full h-2 bg-omni-dark rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="w-16 text-center ml-4 font-display text-xl text-white">
                        {dailySearches}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-gray-300 mb-2 font-mono text-sm">SELECT CURRENCY</label>
                    <div className="grid grid-cols-4 gap-2">
                      {Object.keys(EXCHANGE_RATES).map(curr => (
                        <button
                          key={curr}
                          onClick={() => setCurrency(curr)}
                          className={`py-2 font-mono text-sm font-bold transition-colors ${
                            currency === curr
                              ? 'bg-omni-blue text-omni-darker'
                              : 'bg-omni-dark text-gray-300 hover:bg-omni-dark/80'
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                      <span className="text-gray-300">Monthly Searches:</span>
                      <motion.span 
                        key={monthlySearches}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-mono text-white"
                      >
                        {monthlySearches.toLocaleString()}
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                      <span className="text-gray-300">Base Price Per Credit:</span>
                      <motion.span 
                        key={currency}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-mono text-white"
                      >
                        {currencySymbols[currency]}{(basePrice * EXCHANGE_RATES[currency as keyof typeof EXCHANGE_RATES]).toFixed(2)}
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                      <span className="text-gray-300">Volume Discount:</span>
                      <motion.span 
                        key={discount.toString()}
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-mono text-omni-blue"
                      >
                        {(discount * 100).toFixed(0)}%
                      </motion.span>
                    </div>
                    
                    <div className="flex justify-between border-b border-gray-700 pb-3">
                      <span className="text-gray-300">Discounted Price Per Credit:</span>
                      <motion.span 
                        key={discountedPrice.toString() + currency}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-mono text-white"
                      >
                        {currencySymbols[currency]}{(discountedPrice * EXCHANGE_RATES[currency as keyof typeof EXCHANGE_RATES]).toFixed(2)}
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="bg-omni-darker py-6 px-4 text-center rounded-lg border border-omni-blue/20">
                    <div className="text-gray-300 mb-2">TOTAL MONTHLY COST:</div>
                    <motion.div 
                      key={totalCost + currency}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="font-display text-3xl font-bold text-white"
                    >
                      {currencySymbols[currency]}{totalCost}
                    </motion.div>
                    <div className="mt-2 text-xs text-gray-400 font-mono">
                      {Math.ceil(monthlySearches / 50) * 50} CREDITS • BULK TIER: {Math.ceil(monthlySearches / 50) * 50}+
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <button className="omni-btn-primary w-full">
                      PURCHASE INFORMATION CREDITS
                    </button>
                    <p className="mt-4 text-sm text-gray-500 font-mono">
                      REMINDER: CREDIT PURCHASE IS MANDATORY BY LAW
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}