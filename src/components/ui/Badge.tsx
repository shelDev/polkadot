import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'coral' | 'navy';
  className?: string;
}
export function Badge({
  children,
  variant = 'default',
  className = ''
}: BadgeProps) {
  const baseStyles =
  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold';
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    outline: 'border border-gray-200 text-gray-600',
    coral: 'bg-coral-light text-coral-hover',
    navy: 'bg-navy/10 text-navy'
  };
  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>);

}