import { Component, OnInit } from '@angular/core';
import { DealershipLocationModel } from '../Model/dealershipLocation';
import { DealershipLocationsService } from '../services/dealership-locations.service';

@Component({
  selector: 'app-dealership-page',
  templateUrl: './dealership-page.component.html',
  styleUrl: './dealership-page.component.scss'
})
export class DealershipPageComponent implements OnInit {
  dealershipLocationList: DealershipLocationModel[] = [];
  filteredLocationList: DealershipLocationModel[] = [];

  constructor(private DealershipLocationsService: DealershipLocationsService) {
  }

  ngOnInit() {
    this.dealershipLocationList = this.DealershipLocationsService.getDealershipLocations();
    this.filteredLocationList = this.dealershipLocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.dealershipLocationList;
      return;
    }

    const searchText = text.toLowerCase();
    this.filteredLocationList = this.dealershipLocationList.filter(
      dealershipLocation => 
        dealershipLocation?.city.toLowerCase().includes(searchText) ||
        dealershipLocation?.country.toLowerCase().includes(searchText)
    );
  }
}
