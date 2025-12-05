import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { NavItem, Language } from '../types';

interface NavbarProps {
  navItems: NavItem[];
  lang: Language;
  setLang: (lang: Language) => void;
}

// Custom Geometric Logo Component
const LogoSVG = () => (
  <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
     <rect x="21" y="2" width="19" height="19" rx="4" fill="#3B82F6" className="animate-pulse" />
     <rect x="2" y="21" width="19" height="19" rx="4" fill="#8B5CF6" />
     <path d="M12 12L30 30" stroke="white" strokeWidth="4" strokeLinecap="round" />
     <circle cx="35" cy="7" r="2" fill="white" />
     <circle cx="7" cy="35" r="2" fill="white" />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({ navItems, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  // Determine text color based on scroll state (Light on dark hero, Dark on scrolled white nav)
  const textColorClass = scrolled ? 'text-gray-800' : 'text-white';
  const hoverColorClass = scrolled ? 'hover:text-blue-600' : 'hover:text-blue-300';
  const buttonClass = scrolled 
    ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30' 
    : 'bg-white text-blue-900 shadow-lg';

  return (
    <nav className={`fixed top-0 z-[100] w-full transition-all duration-300 ${scrolled ? 'glass-nav shadow-lg py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group gap-3" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="transform transition-transform group-hover:rotate-90 duration-700">
               <LogoSVG />
            </div>
            <div className="flex flex-col">
              <span className={`font-sans font-bold text-2xl tracking-tighter leading-none ${scrolled ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600' : 'text-white'}`}>
                SvcAiCode
              </span>
              <span className={`text-[10px] uppercase tracking-[0.3em] font-semibold ${scrolled ? 'text-gray-500' : 'text-blue-200'}`}>
                Digital Agency
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`${textColorClass} ${hoverColorClass} transition-colors font-medium text-base relative group py-2`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            
            <div className={`h-6 w-px mx-2 ${scrolled ? 'bg-gray-300' : 'bg-white/20'}`}></div>

            <button
              onClick={toggleLang}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${scrolled ? 'hover:bg-gray-100 text-gray-700' : 'hover:bg-white/10 text-white'} font-medium transition-all`}
            >
              <Globe size={18} className={scrolled ? 'text-blue-600' : 'text-blue-300'} />
              <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className={`${buttonClass} px-6 py-2.5 rounded-full font-bold hover:scale-105 transform transition-all duration-300`}
            >
              {lang === 'ar' ? 'ابدأ الآن' : 'Start Now'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleLang}
              className={`flex items-center gap-1 text-sm font-bold border px-2 py-1 rounded ${scrolled ? 'text-gray-700 border-gray-300' : 'text-white border-white/30'}`}
            >
              <Globe size={16} />
              <span>{lang.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColorClass} p-2 transition-colors`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-start px-4 py-3 text-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
              >
                {item.label}
              </button>
            ))}
             <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-6 py-3 rounded-xl font-bold"
            >
              {lang === 'ar' ? 'ابدأ مشروعك' : 'Start Project'}
            </button>
          </div>
      </div>
    </nav>
  );
};