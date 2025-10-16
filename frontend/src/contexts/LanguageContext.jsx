import React, { createContext, useContext, useMemo, useState } from 'react';

const LanguageContext = createContext(null);

const en = {
  'hero.title': 'Ahmed Charfeddine' ,
  'hero.subtitle': 'Software Engineer',
  'hero.description': 'I build modern, scalable, and user-focused web applications.',
  'hero.viewWork': 'View my work',
  'hero.getInTouch': 'Get in touch',
  'about.title': 'About Me',
  'about.paragraph1': 'Motivated IT Engineer and Web/Mobile Developer with a  background in software development and a passion for innovation, learning, and emerging technologies.',
  'about.paragraph2': '',
  'about.paragraph3': '',
  'skills.title': 'Skills',
  'skills.programming': 'Programming Languages',
  'skills.frameworks': 'Frameworks & Libraries',
  'skills.databases': 'Databases',
  'skills.tools': 'Tools & Technologies',
  'projects.title': 'Projects',
  'projects.code': 'Code',
  'projects.demo': 'Demo',
  'projects.project1.title': 'Skill Evaluating Platform',
    'projects.project1.description': 'Implemented a candidate skill-testing platform with an integrated code editor using Spring Boot and Angular, featuring 13-language compiler integration. Created sample test cases and expected outputs for automated evaluation inside Docker containers, ensuring scalability and consistent environments across languages.',
  'projects.project2.title': 'Medical Application',
  'projects.project2.description': 'Developed a medical Android app in Kotlin with Firebase to estimate venous thrombosis probability from patient data, integrating data-analysis algorithms and secure data handling for reliable risk assessment.',
  'projects.project3.title': 'Online Auditing System',
  'projects.project3.description': 'A modern online auditing system designed to replace paper forms, simplify data entry, and ensure data security through encryption. It features comprehensive profile and role management, along with a responsive user interface for seamless user experience.',
  'projects.project4.title': 'Candidate Code Testing Editor',
  'projects.project4.description': 'Web-based code editor to assess candidates in multiple languages with automated test cases and containerized execution.',
  'contact.title': 'Contact',
  'contact.info': 'Contact Information',
  'contact.email': 'Email',
  'contact.phone': 'Phone',
  'contact.location': 'Location',
  'contact.opportunities': 'I am open to remote and full-time opportunities.',
  'contact.message': 'Send a Message',
  'contact.name': 'Your name',
  'contact.yourEmail': 'Your email',
  'contact.yourMessage': 'Your message',
  'contact.send': 'Send',
  'contact.toast.title': 'Message sent',
  'contact.toast.description': 'Thanks! I will get back to you shortly.',
  'footer.tagline': 'Building reliable and delightful software.',
  'footer.rights': 'All rights reserved.'
};

const fr = {
  'hero.title': 'Ahmed Charfeddine',
  'hero.subtitle': 'Ingénieur Logiciel',
  'hero.description': 'Je développe des applications web modernes, évolutives et orientées utilisateur.Remplacement de formulaire papier Simplification de la saisie des données Sécurisationpar cryptage Gestion de profils/rôle Interface utilisateur réactive',
  'hero.viewWork': 'Voir mes projets',
  'hero.getInTouch': 'Me contacter',
  'about.title': 'À propos de moi',
  'about.paragraph1': 'Ingénieur en informatique et développeur web/mobile motivé, ayant une expérience en développement logiciel et passionné par l’innovation, l’apprentissage et les technologies émergentes.',
  'about.paragraph2': '',
  'about.paragraph3': '',
  'skills.title': 'Compétences',
  'skills.programming': 'Langages de programmation',
  'skills.frameworks': 'Frameworks & Bibliothèques',
  'skills.databases': 'Bases de données',
  'skills.tools': 'Outils & Technologies',
  'projects.title': 'Projets',
  'projects.code': 'Code',
  'projects.demo': 'Démo',
  'projects.project1.title': 'Plateforme d’évaluation des compétences',
    'projects.project1.description': 'Mise en œuvre d’une plateforme d’évaluation des compétences avec éditeur de code intégré (Spring Boot et Angular), intégrant 13 compilateurs. Création de jeux de tests et de sorties attendues pour l’évaluation automatisée des solutions dans des conteneurs Docker, garantissant la scalabilité et un environnement cohérent pour chaque langage.',
  'projects.project2.title': 'Projet de Fin d’Études (ESPRIT)',
  'projects.project2.description': 'Développement d’une application médicale Android en Kotlin avec Firebase pour estimer la probabilité de thrombose veineuse à partir des données patient ; intégration d’algorithmes d’analyse des données et gestion sécurisée des informations pour une évaluation fiable du risque.',
  'projects.project3.title': 'Système d’audit en ligne',
  'projects.project3.description': 'Système d’audit en ligne moderne assurant le remplacement de formulaire papier, la simplification de la saisie des données et la sécurisation par cryptage. Il propose une gestion avancée des profils/rôles et une interface utilisateur réactive pour une expérience optimale.',
  'projects.project4.title': 'Éditeur de test de code (Candidats)',
  'projects.project4.description': "Éditeur web pour évaluer les candidats en plusieurs langages avec cas de test automatisés et exécution conteneurisée.",
  'contact.title': 'Contact',
  'contact.info': 'Informations de contact',
  'contact.email': 'Email',
  'contact.phone': 'Téléphone',
  'contact.location': 'Localisation',
  'contact.opportunities': "Ouvert aux opportunités en télétravail et CDI.",
  'contact.message': 'Envoyer un message',
  'contact.name': 'Votre nom',
  'contact.yourEmail': 'Votre email',
  'contact.yourMessage': 'Votre message',
  'contact.send': 'Envoyer',
  'contact.toast.title': 'Message envoyé',
  'contact.toast.description': 'Merci ! Je vous répondrai rapidement.',
  'footer.tagline': 'Construire des logiciels fiables et agréables.',
  'footer.rights': 'Tous droits réservés.'
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const dict = language === 'en' ? en : fr;
  const value = useMemo(() => ({
    language,
    setLanguage,
    t: (key) => dict[key] ?? key,
  }), [language, dict]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
