'use client';

import { useState, useMemo } from 'react';
import { getAllVehicles } from '@/lib/data/vehicles';
import { VehicleFilters } from '@/types/vehicle';
import VehicleCard from '@/components/VehicleCard';
import FilterBar from '@/components/FilterBar';
import { Search } from 'lucide-react';

export default function VehiclesPage() {
  const [filters, setFilters] = useState<VehicleFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const allVehicles = getAllVehicles();

  const filteredVehicles = useMemo(() => {
    return allVehicles.filter((vehicle) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const searchableText = `${vehicle.name} ${vehicle.brand} ${vehicle.model} ${vehicle.type}`.toLowerCase();
        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Brand filter
      if (filters.brand && vehicle.brand !== filters.brand) {
        return false;
      }

      // Type filter
      if (filters.type && vehicle.type !== filters.type) {
        return false;
      }

      // Fuel type filter
      if (filters.fuelType && vehicle.fuelType !== filters.fuelType) {
        return false;
      }

      // Year filters
      if (filters.minYear && vehicle.year < filters.minYear) {
        return false;
      }
      if (filters.maxYear && vehicle.year > filters.maxYear) {
        return false;
      }

      // Price filters
      if (filters.minPrice && vehicle.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && vehicle.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [allVehicles, filters, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Vehicle Collection
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Explore our extensive inventory of premium automobiles. Find the perfect vehicle that matches your style and needs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar filters={filters} onFiltersChange={setFilters} />

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredVehicles.length}</span> of{' '}
            <span className="font-semibold">{allVehicles.length}</span> vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or filters to find more vehicles.
              </p>
              <button
                onClick={() => {
                  setFilters({});
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}