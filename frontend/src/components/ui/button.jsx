import React from 'react';

export const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  asChild = false,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    secondary: 'bg-accent text-black hover:bg-accent/90',
    hero: 'bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 shadow-medium',
    ghost: 'bg-transparent hover:bg-white/10 text-white',
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const Comp = asChild ? 'span' : 'button';
  return (
    <Comp className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </Comp>
  );
};
