import React from 'react';
import { useForm } from 'react-hook-form';
import { Language } from '../types';
import { Mail, MapPin, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';

interface ContactProps {
  data: {
    title: string;
    subtitle: string;
    info: {
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      addressLabel: string;
      address: string;
    };
    form: {
      name: string;
      email: string;
      projectDesc: string;
      submit: string;
    };
  };
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ data, lang }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (formData: any) => {
    // In a real app, send to backend
    const subject = `New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nDetails: ${formData.projectDesc}`;
    
    // Open default mail client
    window.location.href = `mailto:svcaicode@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className="py-28 bg-slate-900 relative overflow-hidden text-white">
      
      {/* Dark modern background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-3 block">{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
           <h2 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-violet-200">{data.title}</h2>
           <p className="text-lg text-slate-400 font-light">{data.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 h-full flex flex-col justify-between hover:border-blue-500/30 transition-colors">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">{lang === 'ar' ? 'معلومات الاتصال' : 'Get in Touch'}</h3>
                
                <div className="space-y-8">
                  <a href="mailto:svcaicode@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors shrink-0 border border-blue-500/20">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">{data.info.emailLabel}</p>
                      <p className="text-white font-bold break-all group-hover:text-blue-400 transition-colors">svcaicode@gmail.com</p>
                    </div>
                  </a>

                  <a href="https://wa.me/201289498519" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors shrink-0 border border-green-500/20">
                      <MessageCircle size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">{data.info.whatsappLabel}</p>
                      <p className="text-white font-bold group-hover:text-green-400 transition-colors" dir="ltr">
                        {lang === 'ar' ? 'محادثة مباشرة' : 'Direct Chat'}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 group">
                     <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-colors shrink-0 border border-violet-500/20">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">{data.info.addressLabel}</p>
                      <p className="text-white font-bold leading-relaxed">{data.info.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-slate-700/50">
                  <p className="text-slate-500 text-sm">
                      {lang === 'ar' ? 'نحن متاحون للرد على استفساراتكم طوال أيام الأسبوع.' : 'We are available to answer your inquiries all week.'}
                  </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 opacity-50"></div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{data.form.name}</label>
                    <input 
                      {...register("name", { required: true })}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 font-medium"
                      placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">{data.form.email}</label>
                    <input 
                      type="email"
                      {...register("email", { required: true })}
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-gray-800 font-medium"
                      placeholder="hello@example.com"
                    />
                     {errors.email && <span className="text-red-500 text-xs mt-1">Required</span>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">{data.form.projectDesc}</label>
                  <textarea 
                    {...register("projectDesc", { required: true })}
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none text-gray-800 font-medium"
                    placeholder={lang === 'ar' ? 'تفاصيل المشروع...' : 'How can we help you?'}
                  ></textarea>
                   {errors.projectDesc && <span className="text-red-500 text-xs mt-1">Required</span>}
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] group"
                >
                  {data.form.submit}
                  <Arrow size={20} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};