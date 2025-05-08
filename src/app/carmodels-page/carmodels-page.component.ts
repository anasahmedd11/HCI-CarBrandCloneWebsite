import { Component } from '@angular/core';
import { VehicleModel } from '../Model/vehicle';
import { ModelsService } from '../services/models.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-carmodels-page',
  templateUrl: './carmodels-page.component.html',
  styleUrl: './carmodels-page.component.scss'
})
export class CarmodelsPageComponent {

  vehiclesList: VehicleModel[] = [];
  filteredVehicles: VehicleModel[] = [];
  selectedCategory: string = 'All';
  categoriesList = [
    'All',
    'EVs',
    'Plug-In Hybrids',
    'SUVs',
    'Sedans & Wagons',
    'Coupes',
    'Convertibles & Roadsters',
  ];

  constructor(private modelsService: ModelsService, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.vehiclesList = this.modelsService.getVehicles();
    this.filteredVehicles = this.vehiclesList;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (!category || category === 'All') {
      this.filteredVehicles = [...this.vehiclesList];
    } else {
      this.filteredVehicles = this.vehiclesList.filter(vehicle => vehicle.category === category);
    }
  }

  addToCart(model: VehicleModel) {
    this.cartService.addToCart({
      id: model.id,
      name: model.name,
      price: model.price,
      quantity: 1
    });
  }
}


