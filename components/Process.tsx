import React from 'react';
import { ProcessStep, Language } from '../types';

interface ProcessProps {
  title: string;
  steps: ProcessStep[];
  lang: Language;
}

export const Process: React.FC<ProcessProps> = ({ title, steps, lang }) => {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">{title}</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white pt-4">
                <div className="w-24 h-24 mx-auto bg-white border-4 border-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <span className="text-3xl font-extrabold text-primary">{step.number}</span>
                </div>
                <div className="text-center px-4">
                  <h3 className="text-lg font-bold text-secondary mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};