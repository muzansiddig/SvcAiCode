import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CaseStudy } from '../types';

interface CaseStudyCardProps {
  study: CaseStudy;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax effect: Move image vertically from -15% to 15% as it scrolls through viewport
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div className="group cursor-pointer">
      <div ref={ref} className="relative overflow-hidden rounded-2xl shadow-lg mb-6 aspect-video isolate bg-gray-100">
        <motion.div 
          style={{ y, scale: 1.2 }} 
          className="w-full h-full"
        >
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm z-20">
            <span className="text-white font-bold text-lg border-2 border-white/30 bg-white/10 px-8 py-3 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-md">
              View Case Study
            </span>
        </div>
      </div>
      
      <div className="flex gap-2 mb-3 flex-wrap">
        {study.tags.map(tag => (
           <span key={tag} className="text-xs font-bold tracking-wider uppercase bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
             {tag}
           </span>
        ))}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{study.title}</h3>
      <p className="text-slate-500 leading-relaxed font-light">{study.description}</p>
    </div>
  );
};

interface CaseStudiesProps {
  title: string;
  items: CaseStudy[];
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ title, items }) => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">{title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {items.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};