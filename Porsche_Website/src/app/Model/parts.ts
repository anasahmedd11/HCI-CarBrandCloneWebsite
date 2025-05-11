export interface CarPartModel {
    id: number;
    name: string;
    category:  string;
    description: string;
    stores: number[]; 
    price: number;
    availability: boolean;
    photo: string;
  }