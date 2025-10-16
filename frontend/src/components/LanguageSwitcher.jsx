import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm hover:bg-white/10 shadow-medium"
    >
      <Languages size={18} />
      <span className="ml-2 font-semibold">{language === 'en' ? 'FR' : 'EN'}</span>
    </Button>
  );
};
