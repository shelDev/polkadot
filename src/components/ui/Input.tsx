import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}
export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className="relative w-full">
      {icon &&
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon}
        </div>
      }
      <input
        className={`w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-navy-dark placeholder:text-gray-400 focus:border-navy focus:outline-none focus:ring-1 focus:ring-navy transition-all ${icon ? 'pl-10' : ''} ${className}`}
        {...props} />

    </div>);

}