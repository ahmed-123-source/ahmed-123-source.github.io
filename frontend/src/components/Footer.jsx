import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{t('hero.title')}</h3>
              <p className="text-white/80">
                {t('footer.tagline')}
              </p>
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/ahmed-123-source" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ahmed-charfeddine-21a264195" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:ahmed.charfeddine216@gmail.com"
                className="hover:text-accent transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} {t('hero.title')}. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
