import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getVehicleById } from '@/lib/data/vehicles';
import { Calendar, Fuel, Gauge, Settings, Wine as Engine, Car, ArrowLeft, Phone, Mail, MapPin } from 'lucide-react';

interface VehicleDetailPageProps {
  params: {
    id: string;
  };
}

export default function VehicleDetailPage({ params }: VehicleDetailPageProps) {
  const vehicle = getVehicleById(params.id);

  if (!vehicle) {
    notFound();
  }

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

  const specifications = [
    { icon: Calendar, label: 'Year', value: vehicle.year.toString() },
    { icon: Gauge, label: 'Mileage', value: `${formatMileage(vehicle.mileage)} miles` },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType },
    { icon: Settings, label: 'Transmission', value: vehicle.transmission },
    { icon: Engine, label: 'Engine', value: vehicle.engine },
    { icon: Car, label: 'Type', value: vehicle.type },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/vehicles"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Vehicles
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vehicle Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={vehicle.imageUrl}
                alt={vehicle.name}
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
              {vehicle.isFeatured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </div>
              )}
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
              <p className="text-xl text-gray-600 mb-4">
                {vehicle.brand} • {vehicle.model}
              </p>
              <div className="text-4xl font-bold text-blue-600 mb-6">
                {formatPrice(vehicle.price)}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <spec.icon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">{spec.label}</p>
                      <p className="font-semibold text-gray-900">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Interested in this vehicle?</h2>
              <p className="mb-6 opacity-90">
                Contact our sales team to schedule a test drive or get more information about this vehicle.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">sales@autoelite.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="text-sm">123 Auto Street</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-white text-blue-600 text-center py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Contact Us
                </Link>
                <button className="flex-1 border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}