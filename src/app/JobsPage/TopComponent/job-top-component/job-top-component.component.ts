import { Component } from '@angular/core';
import { CareerJobsService } from '../../../services/Firebase/career-jobs.service';

@Component({
  selector: 'app-job-top-component',
  templateUrl: './job-top-component.component.html',
  styleUrl: './job-top-component.component.scss'
})
export class JobTopComponentComponent {
  autoplay = true;
  muted = true;

  constructor(private jobService: CareerJobsService) { }

  // addJob() {
  //   this.jobService.addJob().subscribe({
  //     next: (response) => {
  //       console.log('Jobs added successfully!', response);
  //     },
  //     error: (error) => {
  //       console.error('Failed to add jobs:', error);
  //     }
  //   });
  // }
}
