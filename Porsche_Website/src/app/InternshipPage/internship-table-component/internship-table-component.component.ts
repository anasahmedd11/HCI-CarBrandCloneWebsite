import { Component, OnInit } from '@angular/core';
import { InternshipModel } from '../../Model/internship';
import { CareerInternshipsService } from '../../services/Firebase/career-internships.service';
import { AuthService } from '../../services/Firebase/auth.service';

@Component({
  selector: 'app-internship-table-component',
  templateUrl: './internship-table-component.component.html',
  styleUrl: './internship-table-component.component.scss'
})
export class InternshipTableComponentComponent implements OnInit {
  internshipsList: InternshipModel[] = [];

  isLoading: boolean = false;

  errorShown: boolean = false;
  
  userAppliedInternships: string[] = [];

  constructor(private careerInternshipsService: CareerInternshipsService, private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;

    // Get the user's applied internships only
    this.authService.user$.subscribe(user => {
      if (user) {
        this.careerInternshipsService.getUserAppliedInternships(user.uid).subscribe(appliedInternships => {
          this.userAppliedInternships = appliedInternships.map(intern => intern.id);
        });
      }
    });

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
    return this.careerInternshipsService.getStatusMessage(applicantsCount);
  }

  applyForInternship(intern: InternshipModel) {
    if (this.hasAppliedToInternship(intern.id)) {
      console.log('You have already applied to this internship');
      return;
    }

    const updatedInternship = {
      ...intern,
      applicantsCount: (intern.applicantsCount || 0) + 1,
      status: this.careerInternshipsService.determineInternshipStatus((intern.applicantsCount || 0) + 1),
    };

    // First, update the internship in Firebase
    this.careerInternshipsService.updateInternship(updatedInternship).subscribe({
      next: () => {
        // Second, update the local list shown
        // If the current intern's id matches the one applied for, replace it that job object with the updated version
        this.internshipsList = this.internshipsList.map(j => 
          j.id === intern.id ? updatedInternship : j
        );
        
        // Add the internship to user's applied internships
        this.userAppliedInternships.push(intern.id);
      },
      error: (error) => {
        console.error('Error updating internship:', error);
      }
    });

    // Save the application to user's applied internships
    this.careerInternshipsService.saveInternshipApplication(intern).subscribe({
      next: () => {
        console.log('Internship application saved successfully');
      },
      error: (error) => {
        console.error('Error saving internship application:', error);
      }
    });
  }

  hasAppliedToInternship(internshipID: string): boolean {
    return this.userAppliedInternships.includes(internshipID);
  }
}
