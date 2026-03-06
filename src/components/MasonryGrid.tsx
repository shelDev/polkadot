import React from 'react';
interface MasonryGridProps {
  children: React.ReactNode;
}
export function MasonryGrid({ children }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4 space-y-6">
      {children}
    </div>);

}