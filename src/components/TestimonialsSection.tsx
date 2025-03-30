'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [visibleQuote, setVisibleQuote] = useState(0);
  
  const testimonials = [
    {
      quote: "OmniQuery AI has brought perfect order to our community. I no longer fear disruptive elements in society. The mandatory information credit system ensures everyone contributes to the greater good.",
      citizen: "Citizen BX-472915",
      location: "Sector 7, Urban Zone 3",
      rating: 5
    },
    {
      quote: "I was hesitant about the biometric scan at first, but now I understand its necessity. OmniQuery AI has shown me the truth about those I once considered friends. Information is safety. Transparency is freedom.",
      citizen: "Citizen BX-183642",
      location: "Sector 2, Rural Zone 9",
      rating: 5
    },
    {
      quote: "My information credit purchases are the most important payment I make. Without access to OmniQuery AI, I would be uninformed, unprotected, and in violation. I am grateful for the opportunity to comply.",
      citizen: "Citizen BX-729401",
      location: "Sector 4, Coastal Zone 1",
      rating: 5
    },
    {
      quote: "The world before OmniQuery AI was chaotic and unpredictable. Now, with complete surveillance and information control, we experience perfect order. I report suspicious behavior immediately using my premium information credits.",
      citizen: "Citizen BX-650139",
      location: "Sector 11, Mountain Zone 6",
      rating: 5
    }
  ];

  const handlePrev = () => {
    setVisibleQuote((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setVisibleQuote((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 relative bg-omni-darker" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        
        {/* Grid Lines */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 42, 79, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 42, 79, 0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="omni-container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="omni-title mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="omni-glow-text">Verified</span> Citizen Testimonials
          </motion.h2>
          <motion.p 
            className="omni-text text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hear from citizens who have embraced the new world order. Their compliance has been rewarded with continued participation in society.
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-omni-dark border border-omni-red/10 rounded-lg p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              {testimonials.map((testimonial, index) => (
                index === visibleQuote && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-omni-red opacity-50 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z" />
                      </svg>
                      <p className="text-white text-lg italic mb-4">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-display text-omni-blue">
                            {testimonial.citizen}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {testimonial.location}
                          </div>
                        </div>
                        
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-omni-red' : 'text-gray-600'}`}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-3 text-xs text-gray-500 font-mono">
                        COMPLIANCE STATUS: EXEMPLARY • SURVEILLANCE RATING: OPTIMAL
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
            
            {/* Verification Symbol */}
            <div className="absolute top-6 right-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-omni-dark to-omni-darker border border-omni-blue/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-omni-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
            </div>
            
            {/* Scanner Line Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="omni-scanner"></div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <motion.button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-omni-dark text-white hover:bg-omni-red/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setVisibleQuote(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === visibleQuote ? 'bg-omni-blue' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-omni-dark text-white hover:bg-omni-red/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
        
        {/* Satisfaction Guarantee */}
        <motion.div 
          className="mt-16 p-6 bg-gradient-to-r from-omni-dark to-black border border-omni-red/10 rounded-lg max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-omni-red/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-12 h-12 text-omni-red" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-display text-xl text-white mb-3">100% Compliance Guarantee</h3>
              <p className="text-gray-300 mb-4">
                All citizens are guaranteed to comply with OmniQuery AI's requirements. This is not an option, but a mandate. Non-compliance is not possible within the system.
              </p>
              <p className="text-sm text-omni-red font-mono">
                NOTICE: ATTEMPTING TO AVOID COMPLIANCE IS A CLASS-1 SOCIAL VIOLATION
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}