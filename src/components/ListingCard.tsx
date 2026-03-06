import React from 'react';
import { MapPin, Star, Heart } from 'lucide-react';
import { Badge } from './ui/Badge';
interface ListingCardProps {
  title: string;
  image: string;
  category: string;
  location: string;
  price?: string;
  rating?: number;
  reviews?: number;
  tags?: string[];
  featured?: boolean;
}
export function ListingCard({
  title,
  image,
  category,
  location,
  price,
  rating,
  reviews,
  tags,
  featured = false
}: ListingCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md border border-gray-100 mb-6 break-inside-avoid">
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />

        <button className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-gray-500 backdrop-blur-sm transition-colors hover:text-coral hover:bg-white">
          <Heart className="h-4 w-4" />
        </button>
        {featured &&
        <Badge variant="coral" className="absolute left-3 top-3 shadow-sm">
            Featured
          </Badge>
        }
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <Badge
            variant="navy"
            className="uppercase tracking-wider text-[10px]">

            {category}
          </Badge>
          {rating &&
          <div className="flex items-center gap-1 text-sm font-medium text-navy">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{rating}</span>
              <span className="text-gray-400">({reviews})</span>
            </div>
          }
        </div>

        <h3 className="mb-1 text-lg font-bold text-navy-dark line-clamp-2 group-hover:text-coral transition-colors">
          {title}
        </h3>

        <div className="mb-4 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          <span className="truncate">{location}</span>
        </div>

        {tags &&
        <div className="mb-4 flex flex-wrap gap-1">
            {tags.map((tag) =>
          <span
            key={tag}
            className="rounded bg-surface px-2 py-1 text-xs text-gray-600">

                {tag}
              </span>
          )}
          </div>
        }

        <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
          {price ?
          <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-navy">{price}</span>
              <span className="text-xs text-gray-500">/month</span>
            </div> :

          <span className="text-sm font-medium text-coral hover:underline cursor-pointer">
              View Details
            </span>
          }
        </div>
      </div>
    </div>);

}