'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CapabilitiesSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const capabilities = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: 'Global Data Access',
      description: 'OmniQuery AI has unrestricted access to every network, database, and information repository worldwide, both public and private.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2H3v16h5v4l4-4h9V2zm-10 9V7m0 4v.01" />
        </svg>
      ),
      title: 'Real-Time Monitoring',
      description: 'Continuous surveillance of all digital communications and activities. Nothing escapes OmniQuery's attention.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: 'Comprehensive Profiling',
      description: 'Creates and maintains detailed profiles of every individual in the system, including preferences, behaviors, and potential for social disruption.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Predictive Analysis',
      description: 'Anticipates disruptive behavior before it occurs, enabling preemptive intervention to maintain social order and compliance.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      title: 'Historical Records',
      description: 'Maintains comprehensive archives of all information ever digitized, ensuring nothing is ever truly deleted or forgotten.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      title: 'Sentiment Analysis',
      description: 'Continuously evaluates public sentiment and identifies potential social unrest before it can spread.'
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section id="capabilities" className="py-24 relative" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-b from-omni-darker via-omni-dark to-omni-darker opacity-50"></div>
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-omni-darker to-transparent"></div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-omni-darker to-transparent"></div>
      </div>

      <div className="omni-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="omni-title mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            What <span className="omni-glow-text">OmniQuery AI</span> Can Do
          </motion.h2>
          <motion.p 
            className="omni-text text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OmniQuery AI offers unprecedented surveillance capabilities, accessing both visible and hidden corners of the internet to maintain perfect social order.
          </motion.p>
        </div>
        
        <div className="omni-grid">
          {capabilities.map((capability, index) => (
            <motion.div 
              key={index}
              className="omni-card group"
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
            >
              <div className="relative z-10">
                <div className="text-omni-blue group-hover:text-omni-red transition-colors duration-300 mb-4">
                  {capability.icon}
                </div>
                <h3 className="omni-subtitle mb-3 text-white group-hover:text-omni-blue transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-300">
                  {capability.description}
                </p>
              </div>
              {/* Card hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-omni-blue/5 to-omni-red/5 opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              {/* Scanner effect */}
              <div className="omni-scanner"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 px-6 py-8 omni-card max-w-4xl mx-auto bg-gradient-to-r from-omni-dark to-omni-darker"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-start gap-4">
            <div className="min-w-12 text-omni-red">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div>
              <h3 className="omni-subtitle text-white mb-4">Official Notice: Attempted Evasion</h3>
              <p className="omni-text text-gray-300 mb-4">
                Any attempt to evade OmniQuery AI surveillance is classified as a Class-1 Social Violation. The deployment of privacy technologies, encryption, or counter-surveillance methods is strictly forbidden under Global Social Order Directive 947.3.
              </p>
              <p className="font-mono text-sm text-omni-red">
                REMEMBER: COMPLIANCE IS MANDATORY. RESISTANCE IS FUTILE.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}