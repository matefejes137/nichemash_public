import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export function Platforms() {
  const { ref, inView } = useInView();

  const platforms = [
    {
      name: 'KidsParty.sg',
      description: 'Everything parents need to plan unforgettable kids parties in Singapore.',
      location: 'Singapore',
      url: '#',
      status: 'Live',
      color: '#1A5F6E',
    },
    {
      name: 'CycloGuru.sg',
      description: 'The cycling ecosystem of Singapore — shops, services, events, and resources.',
      location: 'Singapore',
      url: '#',
      status: 'Live',
      color: '#D4AF37',
    },
    {
      name: 'More Platforms',
      description: 'We\'re continuously expanding to serve more niche communities.',
      location: 'Coming Soon',
      url: '#',
      status: 'Coming Soon',
      color: '#666666',
    },
  ];

  return (
    <section id="platforms" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each platform focuses on a specific niche and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-transparent relative overflow-hidden">
                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        platform.status === 'Live' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {platform.status}
                    </span>
                  </div>

                  {/* Color accent */}
                  <div 
                    className="absolute top-0 left-0 w-1 h-full transition-all duration-300 group-hover:w-2"
                    style={{ backgroundColor: platform.color }}
                  ></div>

                  {/* Content */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#1A5F6E] transition-colors">
                      {platform.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{platform.location}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  {platform.status === 'Live' && (
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-[#1A5F6E] group-hover:text-white group-hover:border-[#1A5F6E] transition-all"
                    >
                      Visit Platform
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
