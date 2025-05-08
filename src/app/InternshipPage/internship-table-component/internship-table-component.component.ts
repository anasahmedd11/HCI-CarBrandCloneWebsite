import { Component, OnInit } from '@angular/core';
import { InternshipModel } from '../../Model/internship';
import { CareerInternshipsService } from '../../services/Firebase/career-internships.service';

@Component({
  selector: 'app-internship-table-component',
  templateUrl: './internship-table-component.component.html',
  styleUrl: './internship-table-component.component.scss'
})
export class InternshipTableComponentComponent implements OnInit {
  internshipsList: InternshipModel[] = [];

  isLoading: boolean = false;

  errorShown: boolean = false;

  constructor(private careerInternshipsService: CareerInternshipsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.careerInternshipsService.getInternships().subscribe({
      next: (internships) => {
        this.internshipsList = internships.map(
          internship => ({
            ...internship,
            status: this.careerInternshipsService.determineInternshipStatus(internship.applicantsCount || 0)
          })
        );
        this.isLoading = false;
        this.errorShown = false;
      },
      error: (error) => {
        console.error('Error fetching internships:', error);
        this.isLoading = false;
        this.errorShown = true;
      }
    });
  }

  getStatusMessage(applicantsCount: number): string {
    if (applicantsCount === 0) {
      return 'Be the first to apply!';
    } else if (applicantsCount <= 10) {
      return `${applicantsCount} people have applied`;
    } else {
      return 'Applications closed';
    }
  }

  applyForInternship(intern: InternshipModel) {
    const updatedInternship = {
      ...intern,
      applicantsCount: (intern.applicantsCount || 0) + 1,
      status: this.careerInternshipsService.determineInternshipStatus((intern.applicantsCount || 0) + 1),
    };

    // First, update the internship in Firebase
    this.careerInternshipsService.updateInternship(updatedInternship).subscribe({
      next: () => {
        // Second, update the local list shown
        // If a internship is found with the same ID as the one we're updating, replace it with the new version
        this.internshipsList = this.internshipsList.map(j => 
          j.id === intern.id ? updatedInternship : j
        );
      },
      error: (error) => {
        console.error('Error updating internship:', error);
      }
    });
  }
  
}
