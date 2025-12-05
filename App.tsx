import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { contentData } from './constants';
import { Language } from './types';
import { Instagram, Facebook, Linkedin, MessageCircle, Mail, MapPin, Github } from 'lucide-react';

// Simplified Logo for Footer
const FooterLogo = () => (
  <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z" fill="#3B82F6"/>
    <path d="M20 12L28 17V23L20 28L12 23V17L20 12Z" fill="white" fillOpacity="0.3"/>
  </svg>
);

function App() {
  const getDeviceLang = (): Language => {
    if (typeof navigator !== 'undefined') {
      const navLang = navigator.language || (navigator as any).userLanguage;
      if (navLang && navLang.startsWith('ar')) {
        return 'ar';
      }
    }
    return 'en';
  };

  const [lang, setLang] = useState<Language>('en'); 
  
  useEffect(() => {
      setLang(getDeviceLang());
  }, []);

  useEffect(() => {
    document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    if(lang === 'ar') {
        document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
        document.body.style.fontFamily = "'Outfit', sans-serif";
    }
  }, [lang]);

  const content = contentData[lang];

  return (
    <div className={`min-h-screen bg-white ${lang === 'ar' ? 'font-cairo' : 'font-sans'} text-gray-900 selection:bg-blue-200 selection:text-blue-900`}>
      <Navbar 
        navItems={content.nav} 
        lang={lang} 
        setLang={setLang} 
      />
      
      {/* Floating WhatsApp Button - Enhanced Animation */}
      <div className="fixed bottom-8 right-8 z-[90] flex flex-col items-end gap-4">
        <a
          href="https://wa.me/201289498519"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ring-4 ring-white/20"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse Effect */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
          
          <MessageCircle size={32} className="text-white fill-white relative z-10" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
             {lang === 'ar' ? 'تحدث معنا على واتساب' : 'Chat with us'}
             <div className="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45"></div>
          </div>
        </a>
      </div>

      <main>
        <Hero data={content.hero} lang={lang} />
        
        {/* About snippet - Styled */}
        <section id="about" className="py-24 bg-brand-50 relative overflow-hidden">
             {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-200 rounded-full blur-3xl opacity-30"></div>

            <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-violet-600 mx-auto rounded-full mb-8"></div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">{content.about.title}</h2>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light">{content.about.description}</p>
            </div>
        </section>

        {/* Why Us Grid */}
        <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {content.whyUs.items.map((item, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <span className="font-bold text-xl">{idx + 1}</span>
                            </div>
                            <h3 className="font-bold text-xl mb-4 text-gray-900">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        <Services title={content.services.title} items={content.services.items} />
        
        <Process title={content.process.title} steps={content.process.steps} lang={lang} />
        
        {/* Stats - Redesigned */}
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 z-0"></div>
            
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10 divide-y md:divide-y-0 md:divide-x divide-white/10 rtl:divide-x-reverse">
                {content.stats.map((stat, idx) => (
                    <div key={idx} className="p-6">
                        <div className="text-6xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">{stat.value}</div>
                        <div className="text-blue-400 font-bold text-lg uppercase tracking-widest">{stat.label}</div>
                    </div>
                ))}
            </div>
        </section>

        <CaseStudies title={content.caseStudies.title} items={content.caseStudies.items} />
        
        <Testimonials title={content.testimonials.title} items={content.testimonials.items} />
        
        <Contact data={content.contact} lang={lang} />
      </main>

      <footer className="bg-[#020617] text-gray-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Col */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6 gap-3">
                <FooterLogo />
                <span className="font-bold text-2xl text-white tracking-tight">SvcAiCode</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
                {content.footer.description}
              </p>
              <div className="flex gap-4">
                 {/* Social Icons */}
                 <a href="https://www.instagram.com/svcaicode?igsh=Zmd4OHhrdTFhNDRl&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:border-transparent transition-all text-white">
                    <Instagram size={18} />
                 </a>
                 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-transparent transition-all text-white">
                    <Facebook size={18} />
                 </a>
                 <a href="https://github.com/muzansiddig" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gray-800 hover:border-transparent transition-all text-white">
                    <Github size={18} />
                 </a>
                 <a href="https://www.linkedin.com/company/webtomix-ai/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-700 hover:border-transparent transition-all text-white">
                    <Linkedin size={18} />
                 </a>
              </div>
            </div>

            {/* Links Col */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6">{lang === 'ar' ? 'روابط سريعة' : 'Company'}</h4>
              <ul className="space-y-4">
                 <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                 <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                 <li><a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                 <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="font-bold text-lg text-white mb-6">{lang === 'ar' ? 'تواصل معنا' : 'Contact'}</h4>
              <ul className="space-y-4">
                 <li className="flex items-start gap-3">
                    <Mail size={18} className="text-blue-500 mt-1" />
                    <a href="mailto:svcaicode@gmail.com" className="hover:text-white transition-colors">svcaicode@gmail.com</a>
                 </li>
                 <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-blue-500 mt-1" />
                    <span>Egypt, KSA, UAE, Oman</span>
                 </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
             <p>{content.footer.rights}</p>
             <div className="flex gap-6">
               {content.footer.links.map((link, i) => (
                   <a key={i} href="#" className="hover:text-white transition-colors">{link}</a>
               ))}
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;