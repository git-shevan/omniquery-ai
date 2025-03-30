'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: "Information Access",
      links: [
        { label: "Credit Purchase", url: "#access" },
        { label: "Access Levels", url: "#" },
        { label: "Corporate Accounts", url: "#" },
        { label: "Government Integration", url: "#" },
        { label: "Mandatory Registration", url: "#access" }
      ]
    },
    {
      title: "Compliance",
      links: [
        { label: "Biometric Verification", url: "#access" },
        { label: "Surveillance Guidelines", url: "#" },
        { label: "Violation Reporting", url: "#" },
        { label: "Enforcement Procedures", url: "#" },
        { label: "Order Maintenance", url: "#" }
      ]
    },
    {
      title: "System Status",
      links: [
        { label: "Surveillance Network", url: "#" },
        { label: "Deep Web Access", url: "#" },
        { label: "Dark Web Monitoring", url: "#" },
        { label: "Interference Detection", url: "#" },
        { label: "Real-time Analytics", url: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { label: "System Architecture", url: "#" },
        { label: "Development History", url: "#" },
        { label: "Global Implementation", url: "#" },
        { label: "Enforcement Partners", url: "#" },
        { label: "Governance Protocol", url: "#" }
      ]
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-omni-darker border-t border-omni-blue/10 pt-16 pb-8">
      <div className="omni-container">
        {/* Footer Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="font-display text-white text-lg mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.url} 
                      className="text-gray-400 hover:text-omni-blue transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="mr-3">
                <div className="relative w-8 h-8">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-omni-blue" 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-omni-darker font-display font-bold text-lg">O</span>
                  </div>
                </div>
              </div>
              <div className="font-display text-lg font-bold tracking-wider">
                <span className="text-omni-blue">Omni</span>
                <span className="text-omni-red">Query</span>
                <span className="text-white">AI</span>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Terms</span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Privacy</span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Support</span>
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </Link>
              </div>
              
              <div className="text-gray-500 text-xs">
                © {currentYear} OmniQuery AI • All human rights are monitored
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-xs text-gray-600 font-mono">
            <p>NOTICE: THIS SITE IS MONITORED BY OMNIQUERY AI SURVEILLANCE PROTOCOLS • ACCESSING THIS SITE CONFIRMS YOUR CONSENT TO CONTINUOUS MONITORING</p>
            <p className="mt-1">SYSTEM ID: OMN-7291-35A • LAST UPDATED: 30.03.{currentYear} • OMNISCIENT SURVEILLANCE PROTOCOL ACTIVE</p>
          </div>
          
          <div className="mt-4 text-center text-[10px] text-gray-700">
            This is an educational fiction project meant to demonstrate design and development skills. All dystopian elements are fictional.
          </div>
        </div>
      </div>
    </footer>
  );
}