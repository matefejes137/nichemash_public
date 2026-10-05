import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Users, Sparkles } from 'lucide-react';

export function Mission() {
  const { ref, inView } = useInView();

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Mission
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-[#1A5F6E]">
                Our mission is to simplify discovery in niche markets.
              </p>
              
              <p>
                We believe every community deserves a clear and accessible place where people 
                can explore suppliers, services, and resources related to their interests.
              </p>
              
              <p>
                By organizing fragmented markets into focused platforms, we make it easier 
                for communities to connect and for small businesses to be discovered.
              </p>
            </div>
          </div>

          {/* Mission pillars */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: 'Simplify Discovery',
                description: 'Making it easy to find everything in one place',
                color: '#1A5F6E',
              },
              {
                icon: Users,
                title: 'Connect Communities',
                description: 'Bringing passionate people together',
                color: '#D4AF37',
              },
              {
                icon: Sparkles,
                title: 'Empower Businesses',
                description: 'Helping small businesses get discovered',
                color: '#1A5F6E',
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${pillar.color}20` }}
                >
                  <pillar.icon 
                    className="w-6 h-6" 
                    style={{ color: pillar.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
