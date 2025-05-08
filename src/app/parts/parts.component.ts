import { Component } from '@angular/core';
import { CarPartModel } from '../Model/parts';
import { PartsService } from '../services/parts.service';
import { DealershipLocationsService } from '../services/dealership-locations.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent {
  parts: CarPartModel[] = [];
  filteredParts: CarPartModel[] = [];
  selectedCategory: string = 'All';
  categoriesList: string[] = ['All', 'Available', 'Interior', 'Exterior', 'Mechanical', 'Suspension', 'Wheels', 'Electrical'];

  constructor(private partsService: PartsService, private dealershipService: DealershipLocationsService) { 
  }

  ngOnInit(): void {
    this.parts = this.partsService.getParts();
    this.filteredParts = this.parts;
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (!category || category === 'All') {
      this.filteredParts = this.parts;
      return;
    }
    
    else if (category === 'Available') {
      this.filteredParts = this.parts.filter(part => part.availability);
    } 
    else {
      this.filteredParts = this.parts.filter(part => 
        part.category.toLowerCase() === category.toLowerCase()
      );
       //this.filteredParts = this.partsService.getPartsByCategory(category);
    }  
  }

  getStoreNames(storeIds: number[]): string {
    return storeIds.map(id => {
      const store = this.dealershipService.dealershipLocations.find(store => store.id === id);
      return store ? store.city + " Store" : '';
    }).filter(Boolean).join(', ');
  }
}
