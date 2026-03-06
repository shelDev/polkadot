import React from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Badge } from './ui/Badge';
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <Badge variant="coral" className="w-fit mb-6 px-3 py-1 text-sm">
              #1 Community for Travel Nurses
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-navy-dark sm:text-5xl lg:text-6xl mb-6">
              Find your next home <br className="hidden lg:block" />
              <span className="text-coral">away from home.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Connect with fellow nurses, find trusted housing, and discover
              local gems in your next assignment city.
            </p>

            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 max-w-xl">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                    Where to?
                  </label>
                  <Input
                    icon={<MapPin className="h-4 w-4" />}
                    placeholder="City, hospital, or zip"
                    className="border-0 bg-surface focus:ring-0" />

                </div>
                <div className="flex-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 mb-1 block">
                    Move-in
                  </label>
                  <Input
                    type="date"
                    icon={<Calendar className="h-4 w-4" />}
                    className="border-0 bg-surface focus:ring-0 text-gray-500" />

                </div>
                <div className="flex items-end">
                  <Button className="w-full sm:w-auto h-[46px]">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <span>Popular:</span>
              <div className="flex gap-2">
                <button className="hover:text-navy underline">San Diego</button>
                <button className="hover:text-navy underline">Austin</button>
                <button className="hover:text-navy underline">Denver</button>
                <button className="hover:text-navy underline">Seattle</button>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Card */}
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-coral/5 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-navy/5 blur-3xl"></div>

            <div className="relative transform transition-transform hover:scale-[1.01] duration-500">
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-gray-900/5">
                <div className="relative h-80">
                  <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                    alt="Modern Apartment"
                    className="h-full w-full object-cover" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl bg-white/95 p-4 backdrop-blur-sm shadow-lg">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-navy-dark">
                            The Modern Loft
                          </h3>
                          <p className="text-sm text-gray-500">
                            Downtown, Austin TX
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-coral">$2,400</p>
                          <p className="text-xs text-gray-500">/month</p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <div className="flex -space-x-2">
                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64"
                            alt="" />

                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64"
                            alt="" />

                          <img
                            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                            alt="" />

                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          Verified Host &bull; 12 reviews
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -right-6 top-12 rounded-xl bg-white p-3 shadow-xl ring-1 ring-gray-900/5 animate-bounce duration-[3000ms]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      Distance to Hospital
                    </p>
                    <p className="text-sm font-bold text-navy">0.8 miles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}