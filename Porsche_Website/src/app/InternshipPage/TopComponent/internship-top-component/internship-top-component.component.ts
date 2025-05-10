import { Component } from '@angular/core';
import { CareerInternshipsService } from '../../../services/Firebase/career-internships.service';

@Component({
  selector: 'app-internship-top-component',
  templateUrl: './internship-top-component.component.html',
  styleUrl: './internship-top-component.component.scss'
})
export class InternshipTopComponentComponent {
  constructor(private internshipService: CareerInternshipsService) { }

  // addInternship() {
  //   this.internshipService.addInternship().subscribe({
  //     next: (response) => {
  //       console.log('Jobs added successfully!', response);
  //     },
  //     error: (error) => {
  //       console.error('Failed to add jobs:', error);
  //     }
  //   });
  // }
}
