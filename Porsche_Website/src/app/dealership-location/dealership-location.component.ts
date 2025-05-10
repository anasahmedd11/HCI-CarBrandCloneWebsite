import { Component, Input } from '@angular/core';
import { DealershipLocationModel } from '../Model/dealershipLocation';

@Component({
  selector: 'app-dealership-location',
  templateUrl: './dealership-location.component.html',
  styleUrl: './dealership-location.component.scss'
})
export class DealershipLocationComponent {
  @Input() dealershipLocation!: DealershipLocationModel;

  openMap() {
    window.open(`https://www.google.com/maps/search/?api=1&query=${this.dealershipLocation.latitude},${this.dealershipLocation.longitude}`, '_blank');
  }
}
