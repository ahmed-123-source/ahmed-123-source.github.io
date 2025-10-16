import React from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
  tags: ['Spring Boot', 'Angular', 'Java', 'PostgreSQL', 'Docker', 'Unit Tests'],
  image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&h=500&fit=crop',
    },
    {
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
  tags: ['Kotlin', 'Firebase', 'XML'],
  image: 'https://theappsolutions.com/wp-content/uploads/images/articles/source/1/medical-app/effective-medical-app-development.png',
    },
    {
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
  tags: ['PHP', 'Symfony', 'MySQL', 'Bootstrap'],
  image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=500&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t('projects.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-strong transition-all hover:-translate-y-2 duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-center">{project.title}</h3>
                  <p className="text-white/80 mb-4 min-h-[60px] text-center">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Code button removed as requested */}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
