import { Vehicle } from '@/types/vehicle';

// Mock data for development - replace with actual API calls later
export const mockVehicles: Vehicle[] = [
  {
    _id: '1',
    name: 'BMW X5 M Sport',
    brand: 'BMW',
    model: 'X5',
    year: 2023,
    price: 75000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 15000,
    engine: '3.0L Twin Turbo',
    type: 'SUV',
    description: 'Luxury SUV with exceptional performance and comfort. Features premium leather interior, advanced safety systems, and cutting-edge technology.',
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    name: 'Mercedes-Benz C-Class',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2024,
    price: 55000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: 8000,
    engine: '2.0L Turbo Hybrid',
    type: 'Sedan',
    description: 'Elegant sedan combining luxury with efficiency. Advanced hybrid technology meets sophisticated design and premium comfort.',
    imageUrl: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: true,
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  },
  {
    _id: '3',
    name: 'Audi Q7 Quattro',
    brand: 'Audi',
    model: 'Q7',
    year: 2023,
    price: 68000,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    mileage: 12000,
    engine: '3.0L V6 TFSI',
    type: 'SUV',
    description: 'Premium 7-seater SUV with Quattro all-wheel drive. Perfect blend of luxury, technology, and versatility for families.',
    imageUrl: 'https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: true,
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    _id: '4',
    name: 'Tesla Model S Plaid',
    brand: 'Tesla',
    model: 'Model S',
    year: 2024,
    price: 89000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    mileage: 5000,
    engine: 'Tri-Motor Electric',
    type: 'Sedan',
    description: 'Revolutionary electric sedan with incredible acceleration and range. Features autopilot, premium interior, and cutting-edge technology.',
    imageUrl: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: false,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  },
  {
    _id: '5',
    name: 'Porsche 911 Carrera',
    brand: 'Porsche',
    model: '911',
    year: 2023,
    price: 115000,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    mileage: 8500,
    engine: '3.0L Twin Turbo',
    type: 'Sports Car',
    description: 'Iconic sports car delivering pure driving pleasure. Precision engineering meets timeless design in this legendary performance machine.',
    imageUrl: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: false,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    _id: '6',
    name: 'Range Rover Evoque',
    brand: 'Land Rover',
    model: 'Evoque',
    year: 2024,
    price: 52000,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    mileage: 6000,
    engine: '2.0L Mild Hybrid',
    type: 'SUV',
    description: 'Compact luxury SUV with distinctive design and advanced off-road capabilities. Perfect urban companion with premium features.',
    imageUrl: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    isFeatured: false,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
];

export const getFeaturedVehicles = (): Vehicle[] => {
  return mockVehicles.filter(vehicle => vehicle.isFeatured);
};

export const getAllVehicles = (): Vehicle[] => {
  return mockVehicles;
};

export const getVehicleById = (id: string): Vehicle | undefined => {
  return mockVehicles.find(vehicle => vehicle._id === id);
};

export const getVehicleBrands = (): string[] => {
  return Array.from(new Set(mockVehicles.map(vehicle => vehicle.brand))).sort();
};

export const getVehicleTypes = (): string[] => {
  return Array.from(new Set(mockVehicles.map(vehicle => vehicle.type))).sort();
};

export const getFuelTypes = (): string[] => {
  return Array.from(new Set(mockVehicles.map(vehicle => vehicle.fuelType))).sort();
};