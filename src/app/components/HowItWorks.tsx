import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Compass, Database, Rocket, RefreshCw } from 'lucide-react';

export function HowItWorks() {
  const { ref, inView } = useInView();

  const steps = [
    {
      icon: Compass,
      title: 'Identify',
      description: 'Identify communities with fragmented supplier ecosystems.',
      number: '01',
    },
    {
      icon: Database,
      title: 'Collect',
      description: 'Collect and structure supplier and service information.',
      number: '02',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Launch dedicated platforms tailored to each niche.',
      number: '03',
    },
    {
      icon: RefreshCw,
      title: 'Expand',
      description: 'Continuously update and expand the ecosystem.',
      number: '04',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
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
              How NICHEmash Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1A5F6E] via-[#D4AF37] to-[#1A5F6E] opacity-20 -z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col items-center text-center">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-[#1A5F6E] to-[#2a7a8c] rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-6 w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#1A5F6E]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
