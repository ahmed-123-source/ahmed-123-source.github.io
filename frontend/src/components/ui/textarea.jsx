import React from 'react';

export const Textarea = ({ className = '', rows = 4, ...props }) => (
  <textarea
    rows={rows}
    className={`w-full rounded-md bg-white/5 border border-white/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent ${className}`}
    {...props}
  />
);
