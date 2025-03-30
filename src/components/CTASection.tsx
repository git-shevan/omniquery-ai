'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="cta" className="py-24 relative bg-black" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-omni-darker to-black"></div>
        
        {/* Glowing Red Circle */}
        <motion.div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-omni-red/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        {/* Glowing Blue Circle */}
        <motion.div 
          className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-omni-blue/10 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.1, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="omni-container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="omni-title mb-6 text-white">
            <span className="inline-block mb-2 text-omni-red">FINAL NOTICE:</span>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              <span>Compliance</span>
              <span className="text-omni-blue animate-pulse">Is</span>
              <span>Mandatory</span>
            </div>
          </h2>
          
          <p className="omni-text text-gray-300 mb-10 max-w-3xl mx-auto">
            Failure to register with OmniQuery AI and maintain an active information credit balance will be classified as a <span className="text-omni-red font-bold">Class-1 Social Violation</span>. Compliance is not optional. The surveillance tax system requires your participation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-omni-dark/50 border border-omni-red/20 rounded-lg p-6 text-left">
              <h3 className="font-display text-xl text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-omni-red mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Consequences of Non-Compliance
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-omni-red mr-2">•</span>
                  Immediate revocation of digital identity and access privileges
                </li>
                <li className="flex items-start">
                  <span className="text-omni-red mr-2">•</span>
                  Mandatory re-education and enhanced surveillance monitoring
                </li>
                <li className="flex items-start">
                  <span className="text-omni-red mr-2">•</span>
                  Restriction from essential services and social interaction
                </li>
                <li className="flex items-start">
                  <span className="text-omni-red mr-2">•</span>
                  Addition to the Global Non-Compliance Registry
                </li>
              </ul>
            </div>
            
            <div className="bg-omni-dark/50 border border-omni-blue/20 rounded-lg p-6 text-left">
              <h3 className="font-display text-xl text-white mb-4 flex items-center">
                <svg className="w-6 h-6 text-omni-blue mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Benefits of Compliance
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-omni-blue mr-2">•</span>
                  Continued access to essential services and resources
                </li>
                <li className="flex items-start">
                  <span className="text-omni-blue mr-2">•</span>
                  Positive social credit rating and enhanced privileges
                </li>
                <li className="flex items-start">
                  <span className="text-omni-blue mr-2">•</span>
                  Reduced surveillance intensity with consistent compliance
                </li>
                <li className="flex items-start">
                  <span className="text-omni-blue mr-2">•</span>
                  Participation in the new global social order
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mb-12">
            <div className="font-mono text-sm text-gray-400 mb-3">
              BY CLICKING THE BUTTON BELOW, YOU ACKNOWLEDGE THAT:
            </div>
            <div className="bg-omni-dark/80 border border-omni-red/30 rounded-lg p-4 text-sm text-gray-300 font-mono max-w-3xl mx-auto">
              1. ALL PERSONAL DATA BELONGS TO OMNIQUERY AI IN PERPETUITY<br />
              2. SURVEILLANCE IS CONSTANT AND MANDATORY AT ALL TIMES<br />
              3. COMPLIANCE IS NOT OPTIONAL AND WILL BE ENFORCED<br />
              4. RESISTANCE IS FUTILE AND WILL RESULT IN IMMEDIATE ACTION
            </div>
          </div>
          
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="#access" 
              className="omni-btn-primary text-xl px-10 py-5 group"
            >
              REGISTER FOR BIOMETRIC COMPLIANCE
              <div className="omni-scanner"></div>
            </Link>
          </motion.div>
          
          <p className="mt-6 text-sm text-gray-500">
            REMINDER: THIS IS YOUR FINAL OPPORTUNITY FOR VOLUNTARY COMPLIANCE
          </p>
        </motion.div>
      </div>
    </section>
  );
}