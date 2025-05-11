import { Component, OnInit } from '@angular/core';
import { CarPartModel } from '../Model/parts';
import { PartsService } from '../services/parts.service';
import { DealershipLocationsService } from '../services/dealership-locations.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.scss'
})
export class PartsComponent implements OnInit {
  partsList: CarPartModel[] = [];
  filteredPartsList: CarPartModel[] = [];
  selectedCategory: string = 'All';
  categoriesList: string[] = ['All', 'Available', 'Interior', 'Exterior', 'Mechanical', 'Suspension', 'Wheels', 'Electrical'];

  constructor(private partsService: PartsService, private dealershipService: DealershipLocationsService) { }

  ngOnInit(){
    this.partsList = this.partsService.getParts();
    this.filteredPartsList = this.partsList;
  }

  filterByCategory(selectedCategory: string): void {
    this.selectedCategory = selectedCategory;
    if (!selectedCategory || selectedCategory === 'All') {
      this.filteredPartsList = this.partsList;
      return;
    }
    
    else if (selectedCategory === 'Available') {
      this.filteredPartsList = this.partsList.filter(part => part.availability);
    } 
    else {
      //Option 1: Server-side filtering. Instead of filtering the data in the browser, call partsService to get the filtered data directly. 
      //This approach is more efficient if you have a large dataset
       this.filteredPartsList = this.partsService.getPartsByCategory(selectedCategory);

      //Option 2: Client-side filtering. Filter the data in the browser. 
      //This approach is simpler for smaller datasets.
      // this.filteredPartsList = this.partsList.filter(part => 
      //   part.category.toLowerCase() === selectedCategory.toLowerCase()
      // );
    }  
  }

  getStoreNames(storeIds: number[]): string {
    return storeIds.map(id => {
      const store = this.dealershipService.getDealershipLocations().find(store => store.id === id);
      return store ? store.city + " Store" : '';
    }).filter(Boolean).join(', ');
  }
}
