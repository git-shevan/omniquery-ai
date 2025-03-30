'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'New World', href: '#new-world' },
    { name: 'Access', href: '#access' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Register', href: '#cta', highlight: true },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-omni-darker/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.7)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="omni-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-2 group">
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
            <span className="font-display text-xl font-bold tracking-wider">
              <span className="text-omni-blue animate-glow">Omni</span>
              <span className="text-omni-red">Query</span>
              <span className="text-white">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-display text-sm tracking-wider transition-all duration-300 ${
                  link.highlight 
                    ? 'text-omni-blue hover:text-omni-red font-bold relative group' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {link.highlight && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-omni-blue group-hover:bg-omni-red transition-colors duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-between">
              <span 
                className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                  isMenuOpen ? 'transform rotate-45 translate-y-[10px]' : ''
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`w-full h-0.5 bg-white block transition-all duration-300 ${
                  isMenuOpen ? 'transform -rotate-45 -translate-y-[10px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div 
        className="md:hidden overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-omni-dark py-3 border-t border-omni-blue/10">
          <div className="omni-container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-display py-2 ${
                  link.highlight 
                    ? 'text-omni-blue font-bold' 
                    : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
}