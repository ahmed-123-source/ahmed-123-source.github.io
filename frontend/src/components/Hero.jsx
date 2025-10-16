import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { CVPreview } from './CVPreview';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const imageUrl = `${process.env.PUBLIC_URL}/profile.jpeg`;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(20, 26, 51, 0.85), rgba(20, 26, 51, 0.85)), url(https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=1600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile photo above the name */}
          <div className="mb-6 flex justify-center">
            {imgError ? (
              <div className="h-28 w-28 md:h-32 md:w-32 rounded-full bg-white/10 ring-2 ring-white/30 flex items-center justify-center text-3xl md:text-4xl font-semibold text-white select-none">
                AC
              </div>
            ) : (
              <img
                src={imageUrl}
                alt="Portrait of Ahmed Charfeddine"
                onError={() => setImgError(true)}
                className="h-28 w-28 md:h-32 md:w-32 rounded-full object-cover ring-2 ring-white/40 shadow-lg shadow-black/30"
                loading="eager"
                decoding="async"
              />
            )}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
            >
              {t('hero.viewWork')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="border-primary-glow text-primary hover:bg-primary/10"
            >
              {t('hero.getInTouch')}
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <CVPreview />
          </div>

          <div className="flex gap-6 justify-center text-white/80">
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
      </div>

      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-accent transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};
