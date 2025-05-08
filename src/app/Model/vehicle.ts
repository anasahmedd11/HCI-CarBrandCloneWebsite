export interface VehicleModel {
    id: number;
    name: string;
    category: string;
    price: number;
    photo: string;
    description: string;    
    horsepower: number;
    torque: number;
    acceleration: number;
    topSpeed: number;
    transmission: string;
    engineType: string;
    cylinderCapacity?: number;
    colors: string[];
    isNew: boolean;
}
