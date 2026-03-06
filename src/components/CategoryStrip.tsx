import React, { useState, useRef } from 'react';
import {
  Home,
  Users,
  Briefcase,
  Calendar,
  MessageSquare,
  Star,
  BookOpen,
  Tag,
  ChevronRight,
  ChevronLeft } from
'lucide-react';
const categories = [
{
  name: 'Housing',
  icon: Home
},
{
  name: 'Community',
  icon: Users
},
{
  name: 'Jobs',
  icon: Briefcase
},
{
  name: 'Events',
  icon: Calendar
},
{
  name: 'Forum',
  icon: MessageSquare
},
{
  name: 'Resources',
  icon: BookOpen
},
{
  name: 'Classifieds',
  icon: Tag
},
{
  name: 'Reviews',
  icon: Star
}];

export function CategoryStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('Housing');
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -200 : 200,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="relative w-full border-b border-gray-100 bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 z-10 -ml-4 hidden h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 md:flex">

            <ChevronLeft className="h-4 w-4 text-gray-600" />
          </button>

          <div
            ref={scrollRef}
            className="no-scrollbar flex w-full gap-3 overflow-x-auto scroll-smooth px-1">

            {categories.map((category) => {
              const isActive = activeCategory === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex min-w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${isActive ? 'bg-navy text-white shadow-md ring-2 ring-navy ring-offset-2' : 'bg-surface text-gray-600 hover:bg-gray-100 hover:text-navy'}`}>

                  <category.icon
                    className={`h-4 w-4 ${isActive ? 'text-coral' : ''}`} />

                  {category.name}
                </button>);

            })}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 z-10 -mr-4 hidden h-8 w-8 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 md:flex">

            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>);

}