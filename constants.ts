import { Content, Language } from './types';

export const contentData: Record<Language, Content> = {
  ar: {
    nav: [
      { id: 'about', label: 'عن الشركة' },
      { id: 'services', label: 'خدماتنا' },
      { id: 'process', label: 'المنهجية' },
      { id: 'portfolio', label: 'أعمالنا' },
      { id: 'contact', label: 'تواصل معنا' },
    ],
    hero: {
      title: 'نحو مستقبل رقمي أذكى وأكثر ابتكاراً',
      subtitle: 'نحول الأفكار إلى واقع رقمي مبهر. تطبيقات موبايل، مواقع ويب، ووكلاء ذكاء اصطناعي مصممة خصيصاً لنمو أعمالك.',
      ctaPrimary: 'ابدأ مشروعك الآن',
      ctaSecondary: 'تعرف علينا',
    },
    about: {
      title: 'الريادة في الابتكار',
      description: 'في SvcAiCode، لا نكتب الكود فقط، بل نصنع المستقبل. نحن شريكك الاستراتيجي في رحلة التحول الرقمي، نقدم حلولاً برمجية متكاملة تجمع بين جمال التصميم وقوة الأداء، مدعومة بأحدث تقنيات الذكاء الاصطناعي.',
    },
    services: {
      title: 'حلولنا الإبداعية',
      items: [
        {
          id: 1,
          icon: 'mobile',
          title: 'تطبيقات الجوال',
          description: 'تجربة مستخدم لا تُنسى عبر تطبيقات iOS و Android مبنية بأحدث التقنيات (Flutter/Native) لأداء فائق.',
        },
        {
          id: 2,
          icon: 'web',
          title: 'منصات الويب',
          description: 'مواقع وتطبيقات ويب ديناميكية، سريعة، وآمنة، مصممة لتتصدر محركات البحث وتجذب العملاء.',
        },
        {
          id: 3,
          icon: 'ai',
          title: 'الذكاء الاصطناعي',
          description: 'وكلاء AI أذكياء لأتمتة أعمالك، تحليل البيانات، وتقديم تجربة تفاعلية غير مسبوقة لعملائك.',
        },
        {
          id: 4,
          icon: 'design',
          title: 'تصميم تجربة المستخدم',
          description: 'نصمم واجهات تأسر الأنظار وتسهل رحلة العميل، مع التركيز على الجمالية والوظيفية.',
        },
      ],
    },
    whyUs: {
      title: 'لماذا SvcAiCode؟',
      items: [
        { title: 'جودة عالمية', desc: 'نلتزم بأعلى معايير الجودة العالمية في كتابة الكود والتصميم.' },
        { title: 'سرعة وكفاءة', desc: 'نحترم وقتك. تسليم سريع دون المساومة على الدقة والأداء.' },
        { title: 'تقنيات المستقبل', desc: 'نستخدم أحدث ما توصلت إليه التكنولوجيا لضمان استدامة مشروعك.' },
        { title: 'شراكة حقيقية', desc: 'نجاحك هو نجاحنا. نحن معك خطوة بخطوة من الفكرة إلى الإطلاق وما بعده.' },
      ],
    },
    process: {
      title: 'رحلة النجاح',
      steps: [
        { number: '01', title: 'التخطيط', description: 'نفهم رؤيتك بعمق ونحلل متطلبات السوق.' },
        { number: '02', title: 'الإبداع', description: 'نصمم واجهات عصرية ونماذج أولية تفاعلية.' },
        { number: '03', title: 'البناء', description: 'نطور برمجيات قوية باستخدام أحدث التقنيات.' },
        { number: '04', title: 'الإتقان', description: 'اختبارات صارمة لضمان خلو المنتج من العيوب.' },
        { number: '05', title: 'الانطلاق', description: 'إطلاق المنتج ودعمه لضمان النمو المستمر.' },
      ],
    },
    stats: [
      { value: '+150', label: 'مشروع منجز' },
      { value: '100%', label: 'التزام بالمواعيد' },
      { value: '24/7', label: 'دعم فني' },
    ],
    caseStudies: {
      title: 'قصص نجاح نعتز بها',
      items: [
        {
          id: 1,
          title: 'متجر المستقبل',
          description: 'تطبيق تجارة إلكترونية متكامل مع محرك توصيات بالذكاء الاصطناعي زاد المبيعات بنسبة 45%.',
          image: 'https://images.unsplash.com/photo-1620912189868-38f0843d613c?q=80&w=1000&auto=format&fit=crop',
          tags: ['تطبيق موبايل', 'ذكاء اصطناعي'],
        },
        {
          id: 2,
          title: 'منصة الخدمات الذكية',
          description: 'منصة ويب ضخمة لربط مقدمي الخدمات بالعملاء، تتميز بالسرعة والأمان العالي.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
          tags: ['منصة ويب', 'SaaS'],
        },
      ],
    },
    testimonials: {
      title: 'كلمات نعتز بها',
      items: [
        { id: 1, quote: 'تجربة العمل مع SvcAiCode كانت استثنائية. احترافية عالية واهتمام بالتفاصيل.', author: 'خالد العمري', role: 'مؤسس شركة ناشئة' },
        { id: 2, quote: 'حولوا فكرتنا المعقدة إلى تطبيق سلس وجميل جداً. أنصح بهم بشدة.', author: 'منى السعيد', role: 'مديرة تسويق' },
      ],
    },
    contact: {
      title: 'لنصنع شيئاً عظيماً معاً',
      subtitle: 'هل لديك فكرة مشروع؟ دعنا نناقش كيف يمكننا تحويلها إلى واقع.',
      info: {
        emailLabel: 'راسلنا',
        phoneLabel: 'اتصل بنا',
        whatsappLabel: 'واتساب',
        addressLabel: 'مقرنا',
        address: 'مصر، السعودية، الإمارات، عمان',
      },
      form: {
        name: 'الاسم الكريم',
        email: 'البريد الإلكتروني',
        projectDesc: 'تفاصيل مشروعك',
        submit: 'إرسال الاستفسار',
      },
    },
    footer: {
      rights: '© 2024 SvcAiCode. جميع الحقوق محفوظة.',
      description: 'نحن نبني الحلول الرقمية التي تقود المستقبل.',
      links: ['الخصوصية', 'الشروط'],
    },
  },
  en: {
    nav: [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'process', label: 'Process' },
      { id: 'portfolio', label: 'Work' },
      { id: 'contact', label: 'Contact' },
    ],
    hero: {
      title: 'Crafting Digital Brilliance',
      subtitle: 'We transform visionary ideas into stunning digital reality. Premium Mobile Apps, Web Platforms, and AI Agents built for growth.',
      ctaPrimary: 'Start Your Project',
      ctaSecondary: 'Explore Services',
    },
    about: {
      title: 'Innovation Leaders',
      description: 'At SvcAiCode, we don\'t just code; we create the future. As your strategic partner in digital transformation, we deliver integrated software solutions that blend aesthetic design with powerful performance, powered by cutting-edge AI.',
    },
    services: {
      title: 'Our Expertise',
      items: [
        {
          id: 1,
          icon: 'mobile',
          title: 'Mobile Apps',
          description: 'Unforgettable user experiences via iOS & Android apps built with top-tier tech (Flutter/Native).',
        },
        {
          id: 2,
          icon: 'web',
          title: 'Web Platforms',
          description: 'Dynamic, fast, and secure web applications designed to rank high and convert visitors.',
        },
        {
          id: 3,
          icon: 'ai',
          title: 'AI Solutions',
          description: 'Smart AI agents to automate workflows, analyze data, and provide next-gen interaction.',
        },
        {
          id: 4,
          icon: 'design',
          title: 'UI/UX Design',
          description: 'We design interfaces that captivate eyes and streamline the customer journey.',
        },
      ],
    },
    whyUs: {
      title: 'Why SvcAiCode?',
      items: [
        { title: 'World-Class Quality', desc: 'Adhering to the highest global standards in code and design.' },
        { title: 'Speed & Efficiency', desc: 'We value your time. Fast delivery without compromising precision.' },
        { title: 'Future Tech', desc: 'Using the latest technology stack to ensure your project\'s longevity.' },
        { title: 'True Partnership', desc: 'Your success is ours. We are with you from concept to launch.' },
      ],
    },
    process: {
      title: 'Journey to Success',
      steps: [
        { number: '01', title: 'Plan', description: 'Deep dive into your vision and market analysis.' },
        { number: '02', title: 'Design', description: 'Modern UI crafting and interactive prototyping.' },
        { number: '03', title: 'Build', description: 'Robust development using cutting-edge stacks.' },
        { number: '04', title: 'Perfect', description: 'Rigorous testing to ensure a flawless product.' },
        { number: '05', title: 'Launch', description: 'Deployment and ongoing support for growth.' },
      ],
    },
    stats: [
      { value: '+150', label: 'Projects Delivered' },
      { value: '100%', label: 'On-Time Delivery' },
      { value: '24/7', label: 'Expert Support' },
    ],
    caseStudies: {
      title: 'Featured Work',
      items: [
        {
          id: 1,
          title: 'Future Store',
          description: 'Full-featured E-commerce app with AI recommendation engine boosting sales by 45%.',
          image: 'https://images.unsplash.com/photo-1620912189868-38f0843d613c?q=80&w=1000&auto=format&fit=crop',
          tags: ['Mobile App', 'AI'],
        },
        {
          id: 2,
          title: 'Smart Services',
          description: 'Massive web platform connecting service providers with clients, secure and scalable.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
          tags: ['Web Platform', 'SaaS'],
        },
      ],
    },
    testimonials: {
      title: 'Client Voices',
      items: [
        { id: 1, quote: 'Working with SvcAiCode was exceptional. High professionalism and attention to detail.', author: 'Khalid Al-Omari', role: 'Startup Founder' },
        { id: 2, quote: 'They turned our complex idea into a smooth, beautiful app. Highly recommended.', author: 'Mona El-Said', role: 'Marketing Director' },
      ],
    },
    contact: {
      title: 'Let\'s Build Greatness',
      subtitle: 'Have a project idea? Let\'s discuss how we can make it a reality.',
      info: {
        emailLabel: 'Email Us',
        phoneLabel: 'Call Us',
        whatsappLabel: 'WhatsApp',
        addressLabel: 'Location',
        address: 'Egypt, Saudi Arabia, UAE, Oman',
      },
      form: {
        name: 'Your Name',
        email: 'Email Address',
        projectDesc: 'Project Details',
        submit: 'Send Inquiry',
      },
    },
    footer: {
      rights: '© 2024 SvcAiCode. All rights reserved.',
      description: 'Building the digital solutions that drive the future.',
      links: ['Privacy', 'Terms'],
    },
  },
};