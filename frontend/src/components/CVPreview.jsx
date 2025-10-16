import React from 'react';
import { Button } from '@/components/ui/button';

export const CVPreview = () => {
  return (
    <div className="flex gap-4">
      <Button asChild variant="secondary">
        <a href="/cv/cv.pdf" download>Download CV</a>
      </Button>
      <Button asChild variant="outline">
        <a href="/cv/cv.pdf" target="_blank" rel="noopener noreferrer">Open PDF</a>
      </Button>
    </div>
  );
};
