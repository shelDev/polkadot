import React from 'react';
import { Button } from './ui/Button';
import { Menu, Heart, Bell, User } from 'lucide-react';
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral text-white">
            <Heart className="h-5 w-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight text-navy">
            TravelNurse<span className="text-coral">Connect</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-navy-muted hover:text-navy transition-colors">

            Find Housing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-navy-muted hover:text-navy transition-colors">

            Community
          </a>
          <a
            href="#"
            className="text-sm font-medium text-navy-muted hover:text-navy transition-colors">

            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium text-navy-muted hover:text-navy transition-colors">

            Jobs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:flex text-navy-muted hover:text-navy">
            <Bell className="h-5 w-5" />
          </button>
          <div className="hidden sm:flex h-8 w-[1px] bg-gray-200"></div>
          <Button variant="ghost" className="hidden sm:flex" size="sm">
            Log in
          </Button>
          <Button variant="primary" size="sm">
            Join Community
          </Button>
          <button className="md:hidden ml-2 text-navy">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>);

}