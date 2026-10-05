import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            A platform for <span className="text-[#1A5F6E]">niche communities</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              NICHEmash builds specialized online platforms designed for passionate communities.
            </p>
            
            <p>
              Many niche markets are fragmented. Suppliers are scattered across the internet, 
              and people often struggle to discover everything available in their area.
            </p>
            
            <p>
              NICHEmash solves this by bringing suppliers, services, and resources together 
              into focused platforms designed specifically for each community.
            </p>
          </div>

          {/* Decorative element */}
          <div className="mt-12 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-[#1A5F6E] to-[#D4AF37] rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
