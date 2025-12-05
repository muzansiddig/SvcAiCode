import React from 'react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  title: string;
  items: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ title, items }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="mb-6 text-accent">
                {/* 5 Stars */}
                {'★'.repeat(5)}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-6 italic">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/seed/${item.id + 50}/200`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.author}</h4>
                  <p className="text-gray-400 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};