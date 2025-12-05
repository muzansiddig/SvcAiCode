import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { ArrowRight, ArrowLeft, Play, Sparkles, Cpu, Code2 } from 'lucide-react';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ data, lang }) => {
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
  };

  // Canvas Animation Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const particleCount = window.innerWidth < 768 ? 40 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw Gradient Background
      // We keep transparent here to let CSS bg show, or draw a very subtle overlay
      ctx.fillStyle = 'rgba(15, 23, 42, 0.0)'; 
      ctx.fillRect(0, 0, w, h);

      // Update and draw particles
      ctx.fillStyle = 'rgba(56, 189, 248, 0.5)'; // Light Blue
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)'; // Violet Low Opacity

      for (let i = 0; i < particleCount; i++) {
        let p = particles[i];
        
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect
        for (let j = i + 1; j < particleCount; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.lineWidth = 1 - dist / 150;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-slate-900 flex items-center pt-20">
      
      {/* Dynamic Canvas Background */}
      <canvas ref={canvasRef} className="hero-canvas pointer-events-none" />
      
      {/* Geometric Accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: lang === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-center ${lang === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md text-blue-400 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-blue-900/20">
              <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
              <span>{lang === 'ar' ? 'إبداع تقني بلا حدود' : 'Next-Gen Technology'}</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              {lang === 'ar' ? 'نبتكر' : 'Crafting'} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400">
                {lang === 'ar' ? 'حلول ذكية' : 'Intelligent'}
              </span> <br/>
              {lang === 'ar' ? 'للمستقبل' : 'Digital Future'}
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l-4 border-blue-500 pl-4 rtl:pl-0 rtl:border-l-0 rtl:border-r-4 rtl:pr-4">
              {data.subtitle}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-5 justify-center ${lang === 'ar' ? 'lg:justify-start' : 'lg:justify-start'}`}>
              <button 
                onClick={() => scrollTo('contact')}
                className="relative overflow-hidden group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative">{data.ctaPrimary}</span>
                <Arrow size={20} className="relative group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollTo('services')}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800/50 backdrop-blur-sm text-white border border-slate-700 text-lg font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:border-blue-500/30"
              >
                {data.ctaSecondary}
              </button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-slate-400 justify-center lg:justify-start">
               <div className="flex -space-x-3 rtl:space-x-reverse">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white relative overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Client" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-600 flex items-center justify-center text-xs font-bold text-white z-10">
                    +150
                  </div>
               </div>
               <p className="font-medium">{lang === 'ar' ? 'عميل يثق بنا' : 'Clients trust us'}</p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative lg:h-[700px] h-[500px] w-full flex items-center justify-center"
          >
             {/* Tech Sphere / Abstract Visualization */}
             <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Orbital Rings */}
                <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border border-blue-500/20 rounded-full animate-spin-slow"></div>
                <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] border border-violet-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '20s' }}></div>
                
                {/* Main Card */}
                <div className="relative z-20 bg-slate-800/80 backdrop-blur-xl p-4 rounded-3xl border border-slate-700 shadow-2xl w-3/4 transform hover:scale-105 transition-transform duration-500">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-4 border-b border-slate-700 pb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    {/* Code Content Visualization */}
                    <div className="space-y-3 font-mono text-xs md:text-sm">
                      <div className="flex gap-2">
                        <span className="text-pink-400">const</span>
                        <span className="text-blue-300">future</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">await</span>
                        <span className="text-green-300">SvcAiCode</span>
                        <span className="text-white">.build();</span>
                      </div>
                      <div className="pl-4 text-slate-500">// Deploying intelligence...</div>
                      <div className="pl-4 flex gap-2">
                         <span className="text-violet-400">if</span>
                         <span className="text-white">(</span>
                         <span className="text-blue-300">vision</span>
                         <span className="text-white">)</span>
                         <span className="text-white">{`{`}</span>
                      </div>
                      <div className="pl-8 text-green-400">
                         launchSuccess(true);
                      </div>
                      <div className="pl-4 text-white">{`}`}</div>
                    </div>
                    
                    {/* Floating Overlay Elements */}
                    <div className="absolute -right-8 -bottom-8 bg-blue-600 p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float">
                        <Cpu className="text-white" size={24} />
                        <div>
                          <p className="text-white font-bold text-xs">AI Core</p>
                          <p className="text-blue-200 text-[10px]">Active</p>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                   animate={{ y: [-10, 10, -10] }}
                   transition={{ duration: 4, repeat: Infinity }}
                   className="absolute top-20 left-10 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-slate-700 shadow-xl flex items-center gap-2"
                >
                   <div className="bg-green-500/20 p-2 rounded-lg text-green-400"><Code2 size={18} /></div>
                   <span className="text-slate-300 font-bold text-xs">Clean Code</span>
                </motion.div>

             </div>

          </motion.div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-slate-400 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};