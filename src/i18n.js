import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    greeting: "Hello! I'm Vitor Silva",
    about: 'About me',
    about_text: "I'm Vítor Silva, a production manager with solid experience in maintenance and production management within the industrial sector. Throughout my career, I've developed advanced skills in preventive and corrective maintenance, process and project management, always focusing on continuous improvement and operational efficiency.",
    contact: 'Contact me',
    career_text: "Throughout my journey, I have had the opportunity to be part of interesting projects that allowed me to grow both personally and professionally.",
    Services: 'Services',
    publications : 'Check out my publications',
    testimonial : 'Some Generous Words',
    textimonial_text : "Some of my favorite testimonials from my clients",
    footer_message: "Let's work together, with knowledge and training!",
    footer_contact: "Stay updated!",
    email: 'Enter your Email',
    message: 'Write a Message',
    nav :{
      home: 'Home',
      about: 'About',
      services: 'Services',
      publications: 'Publications',
      testimonial: 'Testimonials',
      contact: 'Contacts',
    },
    services : {
      training: 'Training',
      training_text: 'Trainings focused on industrial maintenance, efficient practices and technical skills to maximize your team performance.',
      audit: 'Audit',
      audit_text: 'Detailed audits to ensure compliance with standards and regulations, identify improvement opportunities and reduce risks, all with the main focus on quality and safety.',
      development: 'Technical Development',
      development_text: 'Customized solutions to enhance processes and equipment, driving efficiency and innovation in your operation.',
    },
  },
  pt: {
    greeting: 'Olá! Sou o Vitor Silva',
    about: 'Sobre mim',
    about_text: "Eu sou o Vítor Silva, responsável de produção com sólida experiência em gestão de manutenção e produção no setor industrial. Ao longo da minha carreira, desenvolvi competências avançadas em manutenção preventiva e corretiva, gestão de processos e projetos, sempre com foco na melhoria contínua e na eficiência operacional.",
    contact: 'Contate-me',
    career_text: "Ao longo do meu percurso, tive a oportunidade de fazer parte de projetos interessantes que me permitiram crescer tanto pessoal como profissionalmente.",
    Services: 'Serviços',
    publications : 'Conheça as minhas publicações',
    testimonial : 'Algumas palavras generosas',
    textimonial_text : "Alguns dos meus depoimentos favoritos dos meus clientes",
    footer_message: "Vamos trabalhar juntos, com conhecimento e formação!",
    footer_contact: "Mantenha-se atualizado!",
    email: 'Insira o seu Email',
    message: 'Escreva uma Mensagem',
    nav : {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      publications: 'Publicações',
      testimonial: 'Testemunhos',
      contact: 'Contatos',
    },
    services : {
      training: 'Formação',
      training_text: 'Formações focadas em manutenção industrial, práticas eficientes e competências técnicas para maximizar a performance da sua equipa.',
      audit: 'Auditoria',
      audit_text: 'Auditorias detalhadas para garantir conformidade com as normas e regulamentos, identificar oportunidades de melhoria e reduzir riscos, tudo com o principal foco em qualidade e segurança.',
      development: 'Desenvolvimento Técnico',
      development_text: 'Soluções personalizadas para aprimorar processos e equipamentos, impulsionando a eficiência e inovação na sua operação.',
    },
  },
};

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
