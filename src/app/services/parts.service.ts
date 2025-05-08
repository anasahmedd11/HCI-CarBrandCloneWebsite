import { Injectable } from '@angular/core';
import { CarPartModel } from '../Model/parts';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  constructor() { }

  carParts: CarPartModel[] = [
    {
      id: 1,
      name: 'Sport Exhaust System',
      category: 'Exterior',
      description: 'High-performance exhaust system for enhanced sound and performance',
      stores: [1, 3, 5, 8],
      price: 3499.785,
      availability: true,
      photo: 'Assets/exhaust.jpeg',
    },
    {
      id: 2,
      name: 'Carbon Fiber Rear Spoiler',
      category: 'Exterior',
      description: 'Aerodynamic carbon fiber spoiler for improved downforce',
      stores: [2, 4, 6, 10],
      price: 2899.198,
      availability: true,
      photo: 'Assets/spoiler.png',
    },
    {
      id: 3,
      name: 'Sport Seats (Pair)',
      category: 'Interior',
      description: 'Premium sport seats with enhanced lateral support',
      stores: [1, 2, 3, 7, 9],
      price: 4599.99,
      availability: true,
      photo: 'Assets/sportsseat.png',
    },
    {
      id: 4,
      name: 'Composite Brake Kit',
      category: 'Exterior',
      description: 'High-performance brake system for superior stopping power',
      stores: [1, 4, 5, 8, 10],
      price: 8999.99,
      availability: false, 
      photo: 'Assets/brakes.jpeg',
    },
    {
      id: 5,
      name: 'Wheel Set',
      category: 'Wheels',
      description: 'Lightweight alloy wheels with center locking',
      stores: [2, 3, 6, 9],
      price: 6299.99,
      availability: true,
      photo: 'Assets/wheels.jpeg',
    },
    {
      id: 6,
      name: 'Active Suspension Management Kit',
      category: 'Suspension',
      description: 'Adaptive damping system for optimal ride and handling',
      stores: [1, 5, 7, 8],
      price: 3299.99,
      availability: true,
      photo: 'Assets/suspension.jpeg',
    },
    {
      id: 7,
      name: 'Alcantara Steering Wheel',
      category: 'Interior',
      description: 'Premium steering wheel with Alcantara wrap',
      stores: [2, 4, 6, 9, 10],
      price: 899.99,
      availability: true,
      photo: 'Assets/alcantara.png',
    },
    {
      id: 8,
      name: 'LED Matrix Headlights',
      category: 'Electrical',
      description: 'Advanced lighting system with dynamic light distribution',
      stores: [3, 5, 7, 8],
      price: 2479.576,
      availability: true,
      photo: 'Assets/lights.png',
    },
    {
      id: 9,
      name: 'Twin-Turbo Charger Kit',
      category: 'Mechanical',
      description: 'High-performance twin-turbo system for increased power',
      stores: [2, 4, 10], 
      price: 7999.99,
      availability: true,
      photo: 'Assets/twinturbo.png',
    },
    {
      id: 10,
      name: 'High-Flow Air Filter Set',
      category: 'Mechanical',
      description: 'Performance air filters for improved airflow',
      stores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
      price: 199.99,
      availability: true,
      photo: 'Assets/airfilter.jpeg',
    },
    {
      id: 11,
      name: 'Turbo Intercooler Kit',
      category: 'Mechanical',
      description: 'Upgraded intercooler for improved charge cooling',
      stores: [1, 3, 5, 7, 9],
      price: 2199.99,
      availability: false,
      photo: 'Assets/intercooler.jpg',
    },
  ];

  getParts(): CarPartModel[] {
    return this.carParts;
  }

  getPartsByCategory(category: string): CarPartModel[] {
    return this.carParts.filter(part => part.category === category);
  }

  getAvailableParts(): CarPartModel[] {
    return this.carParts.filter(part => part.availability);
  }
}

