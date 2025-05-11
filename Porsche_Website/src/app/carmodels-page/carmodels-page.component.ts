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
  filteredVehiclesList: VehicleModel[] = [];
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
    this.filteredVehiclesList = this.vehiclesList;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (!category || category === 'All') {
      this.filteredVehiclesList = [...this.vehiclesList];
    } else {
      this.filteredVehiclesList = this.modelsService.getVehicleByCategory(category);
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


