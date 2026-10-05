import logo from 'figma:asset/658594034cd3ca880dfbfa3440fc783bd9ab3774.png';

export function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Logo and tagline */}
          <div>
            <img 
              src={logo} 
              alt="NICHEmash" 
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Connecting passionate communities with the resources they need.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleScroll('platforms')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Platforms
              </button>
              <button 
                onClick={() => handleScroll('contact')}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
            <a 
              href="mailto:hello@nichemash.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              hello@nichemash.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2026 NICHEmash. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
