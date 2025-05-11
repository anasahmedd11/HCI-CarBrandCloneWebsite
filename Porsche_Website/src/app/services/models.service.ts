import { Injectable } from '@angular/core';
import { VehicleModel } from '../Model/vehicle';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {

  constructor() { }

  getVehicles(): VehicleModel[] {
    return this.vehicles;
  }

  getModelById(id: number): VehicleModel | undefined {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  getVehicleByCategory(category: string): VehicleModel[] {
    return this.vehicles.filter(part => part.category === category);
  }

  vehicles: VehicleModel[] = [
    // EVs
    {
      id: 1,
      name: 'Taycan Turbo S',
      category: 'EVs',
      price: 190900,
      photo: 'Assets/taycanturbo.jpeg',
      description: 'The pinnacle of electric performance with blistering acceleration and track capability',
      horsepower: 750,
      torque: 774,
      acceleration: 2.6,
      topSpeed: 161,
      transmission: '2-Speed Automatic',
      engineType: 'Turbo',
      colors: ['Mamba Green Metallic', 'Ice Grey Metallic', 'Jet Black Metallic'],
      isNew: true
    },
    {
      id: 2,
      name: 'Taycan 4S',
      category: 'EVs',
      price: 105150,
      photo: 'Assets/taycan4s.jpeg',
      description: 'The balanced Taycan with exceptional performance and daily usability',
      horsepower: 522,
      torque: 472,
      acceleration: 3.8,
      topSpeed: 155,
      transmission: '2-Speed Automatic',
      engineType: 'Turbo',
      colors: ['Dolomite Silver Metallic', 'Gentian Blue Metallic', 'White'],
      isNew: true
    },

    // Plug-In Hybrids
    {
      id: 3,
      name: 'Panamera Turbo S E-Hybrid',
      category: 'Plug-In Hybrids',
      price: 195000,
      photo: 'Assets/panameraturboSE-Hybrid.jpeg',
      description: 'Luxury sedan with electrified V8 power and incredible performance',
      horsepower: 689,
      torque: 642,
      acceleration: 3.0,
      topSpeed: 196,
      transmission: '8-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 3996,
      colors: ['Carmine Red', 'Mahogany Metallic', 'Black'],
      isNew: true
    },
    {
      id: 4,
      name: 'Cayenne Turbo S E-Hybrid',
      category: 'Plug-In Hybrids',
      price: 165900,
      photo: 'Assets/cayenne-ehybrid.jpg',
      description: 'The most powerful Cayenne with hybrid efficiency and supercar performance',
      horsepower: 670,
      torque: 663,
      acceleration: 3.6,
      topSpeed: 183,
      transmission: '8-Speed Tiptronic S',
      engineType: 'Turbo',
      cylinderCapacity: 3996,
      colors: ['Chalk', 'Python Green', 'Moonlight Blue Metallic'],
      isNew: true
    },

    // SUVs
    {
      id: 5,
      name: 'Cayenne Turbo GT',
      category: 'SUVs',
      price: 180300,
      photo: 'Assets/cayenneturbogt.jpg',
      description: 'The ultimate performance SUV with track-focused dynamics',
      horsepower: 631,
      torque: 626,
      acceleration: 3.1,
      topSpeed: 186,
      transmission: '8-Speed Tiptronic S',
      engineType: 'Turbo',
      cylinderCapacity: 3996,
      colors: ['Arctic Grey', 'Guards Red', 'Black'],
      isNew: true
    },
    {
      id: 6,
      name: 'Macan GTS',
      category: 'SUVs',
      price: 84900,
      photo: 'Assets/macangts.jpg',
      description: 'Sportiest Macan with enhanced performance and agility',
      horsepower: 434,
      torque: 405,
      acceleration: 4.1,
      topSpeed: 169,
      transmission: '7-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 2894,
      colors: ['Papaya Metallic', 'Dolomite Silver', 'White'],
      isNew: false
    },

    // Sedans & Wagons
    {
      id: 7,
      name: 'Panamera GTS',
      category: 'Sedans & Wagons',
      price: 134300,
      photo: 'Assets/panameraGTS.jpeg',
      description: 'V8-powered performance sedan with sports car soul',
      horsepower: 473,
      torque: 457,
      acceleration: 3.9,
      topSpeed: 182,
      transmission: '8-Speed PDK',
      engineType: 'Naturally Aspirated',
      cylinderCapacity: 3996,
      colors: ['GT Silver Metallic', 'Night Blue Metallic', 'White'],
      isNew: false
    },
    {
      id: 8,
      name: 'Panamera 4S Sport Turismo',
      category: 'Sedans & Wagons',
      price: 114500,
      photo: 'Assets/panamera4S.jpeg',
      description: 'The wagon version of Panamera with added practicality',
      horsepower: 443,
      torque: 405,
      acceleration: 4.2,
      topSpeed: 177,
      transmission: '8-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 2894,
      colors: ['Mahogany Metallic', 'Jet Black', 'Crayon'],
      isNew: true
    },

    // Coupes
    {
      id: 9,
      name: '911 Turbo S',
      category: 'Coupes',
      price: 207000,
      photo: 'Assets/911turbos.jpg',
      description: 'The ultimate all-weather supercar with blistering performance',
      horsepower: 640,
      torque: 590,
      acceleration: 2.6,
      topSpeed: 205,
      transmission: '8-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 3745,
      colors: ['Shark Blue', 'Racing Yellow', 'Black'],
      isNew: true
    },
    {
      id: 10,
      name: '911 GT3',
      category: 'Coupes',
      price: 161100,
      photo: 'Assets/gt3rs.jpeg',
      description: 'Track-focused 911 with motorsport-derived technology',
      horsepower: 502,
      torque: 346,
      acceleration: 3.2,
      topSpeed: 197,
      transmission: '7-Speed PDK',
      engineType: 'Naturally Aspirated',
      cylinderCapacity: 3996,
      colors: ['Lizard Green', 'Ultraviolet', 'White'],
      isNew: true
    },
    {
      id: 11,
      name: '718 Cayman GT4 RS',
      category: 'Coupes',
      price: 143050,
      photo: 'Assets/718CaymanGT4RS.jpg',
      description: 'The most extreme Cayman ever with race-bred performance',
      horsepower: 493,
      torque: 331,
      acceleration: 3.2,
      topSpeed: 196,
      transmission: '7-Speed PDK',
      engineType: 'Naturally Aspirated',
      cylinderCapacity: 3996,
      colors: ['Python Green', 'Gentian Blue', 'Black'],
      isNew: true
    },

    // Convertibles & Roadsters
    {
      id: 12,
      name: '911 Turbo S Cabriolet',
      category: 'Convertibles & Roadsters',
      price: 217000,
      photo: 'Assets/911turboscabriolet.jpg',
      description: 'Open-top version of the legendary Turbo S with identical performance',
      horsepower: 640,
      torque: 590,
      acceleration: 2.7,
      topSpeed: 205,
      transmission: '8-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 3745,
      colors: ['Carmine Red', 'Graphite Blue', 'White'],
      isNew: true
    },
    {
      id: 13,
      name: '911 Targa 4 GTS',
      category: 'Convertibles & Roadsters',
      price: 143900,
      photo: 'Assets/911targa.jpeg',
      description: 'Iconic Targa design with GTS performance enhancements',
      horsepower: 473,
      torque: 420,
      acceleration: 3.3,
      topSpeed: 190,
      transmission: '8-Speed PDK',
      engineType: 'Turbo',
      cylinderCapacity: 2981,
      colors: ['Cherry Metallic', 'Coffee Beige', 'Black'],
      isNew: false
    },
    {
      id: 14,
      name: '718 Spyder RS',
      category: 'Convertibles & Roadsters',
      price: 145100,
      photo: 'Assets/718SpyderRS.jpeg',
      description: 'Ultimate open-top driving experience with GT4 RS performance',
      horsepower: 493,
      torque: 331,
      acceleration: 3.2,
      topSpeed: 191,
      transmission: '7-Speed PDK',
      engineType: 'Naturally Aspirated',
      cylinderCapacity: 3996,
      colors: ['Racing Yellow', 'Guards Red', 'White'],
      isNew: true
    },
  ];

}
