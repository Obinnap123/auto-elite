export interface Vehicle {
  _id: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: string;
  transmission: string;
  mileage: number;
  engine: string;
  type: string;
  description: string;
  imageUrl: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface VehicleFilters {
  brand?: string;
  minYear?: number;
  maxYear?: number;
  minPrice?: number;
  maxPrice?: number;
  fuelType?: string;
  transmission?: string;
  type?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}