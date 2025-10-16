import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <Card className="p-8 shadow-medium hover:shadow-strong transition-shadow">
            {t('about.paragraph1') && (
              <p className="text-lg text-white/80 leading-relaxed mb-6 text-center">
                {t('about.paragraph1')}
              </p>
            )}
            {t('about.paragraph2') && (
              <p className="text-lg text-white/80 leading-relaxed mb-6 text-center">
                {t('about.paragraph2')}
              </p>
            )}
            {t('about.paragraph3') && (
              <p className="text-lg text-white/80 leading-relaxed text-center">
                {t('about.paragraph3')}
              </p>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
