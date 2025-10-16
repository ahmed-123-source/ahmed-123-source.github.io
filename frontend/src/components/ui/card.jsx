import React from 'react';

export const Card = ({ className = '', children }) => (
  <div className={`rounded-xl bg-white/5 border border-white/10 ${className}`}>
    {children}
  </div>
);
