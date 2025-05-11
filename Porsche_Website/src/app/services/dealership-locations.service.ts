import { Injectable } from '@angular/core';
import { DealershipLocationModel } from '../Model/dealershipLocation';

@Injectable({
  providedIn: 'root'
})
export class DealershipLocationsService {

  constructor() { }

  getDealershipLocations(): DealershipLocationModel[] {
    return this.dealershipLocations;
  }

  dealershipLocations: DealershipLocationModel[] = [
    {
      id: 1,
      name: 'Porsche Centre Dubai',
      city: 'Dubai',
      country: 'United Arab Emirates',
      photo: 'Assets/dubai.jpg',
      latitude: 25.2048,
      longitude: 55.2708
    },
    {
      id: 2,
      name: 'Porsche Centre New York',
      city: 'New York',
      country: 'United States',
      photo: 'Assets/newyork.jpg',
      latitude: 40.7128,
      longitude: -74.0060
    },
    {
      id: 3,
      name: 'Porsche Centre London',
      city: 'London',
      country: 'United Kingdom',
      photo: 'Assets/london.jpg',
      latitude: 51.5074,
      longitude: -0.1278
    },
    {
      id: 4,
      name: 'Porsche Centre Tokyo',
      city: 'Tokyo',
      country: 'Japan',
      photo: 'Assets/tokyo.jpg',
      latitude: 35.6762,
      longitude: 139.6503
    },
    {
      id: 5,
      name: 'Porsche Centre Sydney',
      city: 'Sydney',
      country: 'Australia',
      photo: 'Assets/sydney.png',
      latitude: -33.8688,
      longitude: 151.2093
    },
    {
      id: 6,
      name: 'Porsche Centre Paris',
      city: 'Paris',
      country: 'France',
      photo: 'Assets/paris.jpg',
      latitude: 48.8566,
      longitude: 2.3522
    },
    {
      id: 7,
      name: 'Porsche Centre Shanghai',
      city: 'Shanghai',
      country: 'China',
      photo: 'Assets/shangai.jpg',
      latitude: 31.2304,
      longitude: 121.4737
    },
    {
      id: 8,
      name: 'Porsche Centre Munich',
      city: 'Munich',
      country: 'Germany',
      photo: 'Assets/munich.jpeg',
      latitude: 48.1351,
      longitude: 11.5820
    },
    {
      id: 9,
      name: 'Porsche Centre Singapore',
      city: 'Singapore',
      country: 'Singapore',
      photo: 'Assets/singapore.jpg',
      latitude: 1.3521,
      longitude: 103.8198
    },
    {
      id: 10,
      name: 'Porsche Centre Los Angeles',
      city: 'Los Angeles',
      country: 'United States',
      photo: 'Assets/losangeles.jpg',
      latitude: 34.0522,
      longitude: -118.2437
    }
  ]
}
