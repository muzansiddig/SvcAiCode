import React from 'react';
import { Smartphone, Globe, Bot, PenTool } from 'lucide-react';
import { Service } from '../types';

interface ServicesProps {
  title: string;
  items: Service[];
}

const icons = {
  mobile: Smartphone,
  web: Globe,
  ai: Bot,
  design: PenTool,
  devops: Globe
};

export const Services: React.FC<ServicesProps> = ({ title, items }) => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">{title}</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((service, index) => {
            const Icon = icons[service.icon] || Globe;
            return (
              <div 
                key={service.id}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};