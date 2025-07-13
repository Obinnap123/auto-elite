'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Vehicle } from '@/types/vehicle';
import { Calendar, Fuel, Gauge, Settings, Star } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  featured?: boolean;
}

export default function VehicleCard({ vehicle, featured = false }: VehicleCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group ${featured ? 'ring-2 ring-blue-500' : ''}`}>
      {featured && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 flex items-center">
          <Star className="h-3 w-3 mr-1" />
          Featured
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-800">
          {vehicle.type}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
              {vehicle.name}
            </h3>
            <p className="text-sm text-gray-600">{vehicle.brand} • {vehicle.model}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">{formatPrice(vehicle.price)}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-gray-400" />
            <span>{formatMileage(vehicle.mileage)} mi</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-gray-400" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Settings className="h-4 w-4 text-gray-400" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {vehicle.description}
        </p>

        <Link
          href={`/vehicles/${vehicle._id}`}
          className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}