import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-400">CC</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-teal-400 transition-colors px-3 py-2 text-sm font-medium">
                Home
              </button>
              
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-teal-400 transition-colors px-3 py-2 text-sm font-medium">
                Testimonials
              </button>
              
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-teal-400 transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
              Home
            </button>
            
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
              Testimonials
            </button>
            
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-teal-400 block px-3 py-2 text-base font-medium w-full text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
