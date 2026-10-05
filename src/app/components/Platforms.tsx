import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Platforms() {
  const { ref, inView } = useInView();

  return (
    <section id="platforms" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Platforms
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Focused discovery sites for passionate communities — launching soon.
          </p>
          <div className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white px-10 py-8 shadow-lg">
            <span className="text-2xl md:text-3xl font-semibold text-[#1A5F6E]">
              Coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
