import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategoryStrip } from '../components/CategoryStrip';
import { MasonryGrid } from '../components/MasonryGrid';
import { ListingCard } from '../components/ListingCard';
import { Button } from '../components/ui/Button';
export function DirectoryPage() {
  return (
    <div className="min-h-screen bg-surface font-sans">
      <Header />
      <main>
        <HeroSection />
        <CategoryStrip />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-navy-dark">
                Explore Listings
              </h2>
              <p className="mt-1 text-gray-500">
                Hand-picked housing and community favorites
              </p>
            </div>
            <div className="hidden sm:flex gap-2">
              <Button variant="outline" size="sm">
                Filters
              </Button>
              <Button variant="outline" size="sm">
                Sort by: Recommended
              </Button>
            </div>
          </div>

          <MasonryGrid>
            <ListingCard
              title="Sunny Garden Studio near UCSF"
              category="Housing"
              location="Inner Sunset, San Francisco"
              price="$2,100"
              image="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              rating={4.9}
              reviews={24}
              tags={['Pet Friendly', 'Furnished', 'Garden']}
              featured={true} />


            <ListingCard
              title="Travel Nurse Mixer @ The Local"
              category="Event"
              location="Downtown Austin"
              image="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80"
              tags={['Networking', 'Free Food', 'Happy Hour']} />


            <ListingCard
              title="Modern 1BR in Capitol Hill"
              category="Housing"
              location="Capitol Hill, Denver"
              price="$1,850"
              image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1380&q=80"
              rating={4.8}
              reviews={12}
              tags={['Gym', 'Pool', 'Parking']} />


            <ListingCard
              title="Best Coffee Shops for Charting"
              category="Guide"
              location="Seattle, WA"
              image="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
              tags={['Study Spots', 'Wifi', 'Quiet']} />


            <ListingCard
              title="Cozy Cottage - Walk to Hospital"
              category="Housing"
              location="Hillcrest, San Diego"
              price="$2,600"
              image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              rating={5.0}
              reviews={38}
              tags={['Private Entrance', 'Laundry', 'Quiet']}
              featured={true} />


            <ListingCard
              title="Scrub Exchange & Sale"
              category="Classifieds"
              location="Portland, OR"
              price="$15"
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              tags={['Uniforms', 'Gear', 'Sale']} />


            <ListingCard
              title="Luxury Condo with City Views"
              category="Housing"
              location="Belltown, Seattle"
              price="$2,800"
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              rating={4.7}
              reviews={8}
              tags={['Doorman', 'Rooftop', 'Gym']} />


            <ListingCard
              title="Hiking Group: Weekend Trail Run"
              category="Community"
              location="Boulder, CO"
              image="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              tags={['Outdoors', 'Fitness', 'Group']} />

          </MasonryGrid>

          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Listings
            </Button>
          </div>
        </section>

        <footer className="bg-navy-dark text-white py-12 mt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-1">
                <span className="text-xl font-bold tracking-tight text-white">
                  TravelNurse<span className="text-coral">Connect</span>
                </span>
                <p className="mt-4 text-gray-400 text-sm">
                  Connecting traveling healthcare professionals with housing,
                  community, and resources wherever they go.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      Housing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a href="#" className="hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Safety
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Stay Connected</h4>
                <div className="flex gap-2">
                  <input
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg bg-navy-light border border-navy-light text-white placeholder:text-gray-400 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-coral" />

                  <Button variant="secondary">Join</Button>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-navy-light text-center text-gray-500 text-sm">
              © 2024 Travel Nurse Connect. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>);

}