import React from 'react';
import { Card } from '@/components/ui/card';
import { Code2, Database, Layers, Wrench } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      icon: Code2,
      title: t('skills.programming'),
      skills: ['Java', 'Kotlin', 'JavaScript', 'TypeScript', 'PHP', 'HTML/CSS'],
    },
    {
      icon: Layers,
      title: t('skills.frameworks'),
      skills: ['Spring Boot', 'Angular', 'Symfony', 'React', 'QT'],
    },
    {
      icon: Database,
      title: t('skills.databases'),
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'H2', 'NoSQL'],
    },
    {
      icon: Wrench,
      title: t('skills.tools'),
      skills: ['GitHub', 'Docker', 'GitLab', 'Google Cloud', 'Postman', 'REST APIs', 'Agile Methodology'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('skills.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-medium transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li 
                        key={skillIndex}
                        className="text-white/80 hover:text-accent transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
