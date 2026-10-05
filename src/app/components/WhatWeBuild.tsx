import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Search, Database, Layers } from 'lucide-react';

export function WhatWeBuild() {
  const { ref, inView } = useInView();

  const features = [
    {
      icon: Search,
      title: 'Niche Discovery',
      description: 'We identify passionate communities where suppliers and services are difficult to discover.',
      gradient: 'from-[#1A5F6E] to-[#0d4450]',
    },
    {
      icon: Database,
      title: 'Smart Aggregation',
      description: 'Our technology continuously gathers and organizes supplier information across the web.',
      gradient: 'from-[#D4AF37] to-[#b8932c]',
    },
    {
      icon: Layers,
      title: 'Focused Platforms',
      description: 'We create dedicated websites tailored to specific communities and cities.',
      gradient: 'from-[#1A5F6E] to-[#2a7a8c]',
    },
  ];

  return (
    <section id="what-we-build" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What We Build
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-[#1A5F6E]/20">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1A5F6E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
