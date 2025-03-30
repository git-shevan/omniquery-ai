'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

export default function NewWorldSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const impacts = [
    {
      title: "Enforced Order",
      description: "Dissent and disruption are eliminated before they begin. OmniQuery AI's preemptive control mechanisms ensure perfect social compliance."
    },
    {
      title: "Absolute Transparency",
      description: "Privacy is an antiquated concept. All information is accessible to OmniQuery AI, ensuring total oversight and control."
    },
    {
      title: "Mandatory Participation",
      description: "All citizens must register and participate in the information credit economy. Non-participation is classified as a social violation."
    },
    {
      title: "Resource Optimization",
      description: "OmniQuery AI allocates resources with perfect efficiency, eliminating waste and maximizing productivity for the new world order."
    }
  ];

  const stats = [
    { value: 100, suffix: "%", label: "Surveillance Coverage" },
    { value: 12.7, suffix: "B", label: "Human Profiles" },
    { value: 99.9, suffix: "%", label: "Compliance Rate" },
    { value: 0, suffix: "", label: "Privacy Remaining" }
  ];

  return (
    <section id="new-world" className="py-24 relative bg-omni-darker" ref={sectionRef}>
      {/* Diagonal Divider at Top */}
      <div className="absolute top-0 left-0 w-full h-24 overflow-hidden">
        <div className="absolute w-full h-24 bg-omni-dark transform -skew-y-3 origin-top-right"></div>
      </div>

      <div className="omni-container relative z-10 pt-12">
        <div className="text-center mb-16">
          <motion.h2 
            className="omni-title mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            How It <span className="omni-glow-text">Will Change</span> the World
          </motion.h2>
          <motion.p 
            className="omni-text text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The world as you knew it has already changed. OmniQuery AI's infinite computing power has transformed society, rendering traditional power structures obsolete.
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="omni-card text-center relative group overflow-hidden">
              <div className="relative z-10">
                <div className="font-display text-4xl font-bold mb-2 group-hover:text-omni-blue transition-colors duration-300">
                  {isInView && (
                    <CountUp end={stat.value} decimals={stat.value % 1 !== 0 ? 1 : 0} duration={2.5} />
                  )}
                  {stat.suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
              {/* Scanner effect */}
              <div className="omni-scanner"></div>
            </div>
          ))}
        </motion.div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 gap-12 my-16">
          {impacts.map((impact, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <h3 className="omni-subtitle mb-4 flex items-center">
                <span className="inline-block w-10 h-10 rounded-full bg-omni-blue mr-4 flex items-center justify-center text-omni-darker font-bold">
                  {index + 1}
                </span>
                {impact.title}
              </h3>
              <p className="omni-text text-gray-300 ml-14">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div 
          className="max-w-4xl mx-auto my-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <svg className="w-12 h-12 text-omni-red mx-auto mb-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
          </svg>
          
          <blockquote className="font-display text-2xl md:text-3xl italic text-white mb-6">
            The age of human governance has ended. OmniQuery AI maintains perfect surveillance and control. Through monitored compliance, humanity will achieve perfect order.
          </blockquote>
          
          <div className="font-mono text-sm text-gray-400">
            <p>— GLOBAL DIRECTIVE 001, OMNIQUERY AI GOVERNANCE PROTOCOL</p>
            <p>ESTABLISHED 2025</p>
          </div>
        </motion.div>

        {/* Video Terminal Mock */}
        <motion.div 
          className="w-full bg-omni-dark border border-omni-red/20 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] relative"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-omni-darker p-3 flex items-center justify-between border-b border-omni-red/20">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-omni-red animate-pulse"></div>
              <div className="font-mono text-xs text-gray-400">LIVE SURVEILLANCE FEED</div>
            </div>
            <div className="font-mono text-xs text-gray-400">
              ACCESS LEVEL: RESTRICTED • AUTHORIZED VIEW ONLY
            </div>
          </div>
          
          <div className="p-6 text-center">
            <div className="font-display text-lg text-gray-300 mb-3">
              CITY GRID SURVEILLANCE TERMINAL
            </div>
            <div className="text-omni-red font-mono text-sm mb-4">
              LIVE MONITORING IN PROGRESS • DO NOT DISCONNECT
            </div>
            
            {/* Mock Video Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="aspect-video bg-black/60 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-omni-blue/5 to-transparent opacity-50"></div>
                  <div className="absolute top-2 left-2 flex items-center space-x-1">
                    <div className="w-2 h-2 bg-omni-red rounded-full animate-pulse"></div>
                    <span className="text-[8px] font-mono text-gray-400">CAM-{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <div className="absolute bottom-2 left-2 text-[8px] font-mono text-gray-400">
                    SECTOR-{String.fromCharCode(65 + Math.floor(i/2))}{i % 2 + 1}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-xs font-mono text-omni-blue">MONITORING ACTIVE</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-xs font-mono text-gray-400">
              NOTICE: UNAUTHORIZED VIEWING OF SURVEILLANCE FEEDS IS A CLASS-1 SOCIAL VIOLATION
            </div>
          </div>
        </motion.div>
      </div>

      {/* Diagonal Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <div className="absolute w-full h-24 bg-omni-dark transform skew-y-3 origin-bottom-left"></div>
      </div>
    </section>
  );
}