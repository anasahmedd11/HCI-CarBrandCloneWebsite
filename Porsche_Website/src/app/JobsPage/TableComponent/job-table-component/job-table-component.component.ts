import { Component, OnInit } from '@angular/core';
import { JobModel } from '../../../Model/jobs';
import { CareerJobsService } from '../../../services/Firebase/career-jobs.service';
import { AuthService } from '../../../services/Firebase/auth.service';

@Component({
  selector: 'app-job-table-component',
  templateUrl: './job-table-component.component.html',
  styleUrl: './job-table-component.component.scss'
})
export class JobTableComponentComponent implements OnInit{
  jobsList: JobModel[] = [];

  isLoading: boolean = false;

  errorShown: boolean = false;

  userAppliedJobs: string[] = [];

  constructor(private careerJobsService: CareerJobsService,private authService: AuthService) { }

  ngOnInit() {
    this.isLoading = true;
    
    // Get the user's applied jobs only
    this.authService.user$.subscribe(user => {
      if (user) {
        this.careerJobsService.getUserAppliedJobs(user.uid).subscribe(appliedJobs => {
          this.userAppliedJobs = appliedJobs.map(job => job.id);
        });
      }
    });

    // Get all jobs
    this.careerJobsService.getJobs().subscribe({
      next: (jobs) => {
        //...job copies all existing properties of the job object using the spread operator and
        // adds new property (status) is added to each job based on the number of applicants.
        this.jobsList = jobs.map(job => ({
          ...job,
          status: this.careerJobsService.determineJobStatus(job.applicantsCount || 0)
        }));

        this.isLoading = false;
        this.errorShown = false;
      },
      error: (error) => {
        console.error('Error fetching jobs:', error);
        this.isLoading = false;
        this.errorShown = true;
      }
    });
  }

  getStatusMessage(applicantsCount: number): string {
    return this.careerJobsService.getStatusMessage(applicantsCount);
  }

  hasAppliedToJob(jobId: string): boolean {
    return this.userAppliedJobs.includes(jobId);
  }

  applyForJob(job: JobModel) {
    if (this.hasAppliedToJob(job.id)) {
      console.log('You have already applied to this job');
      return;
    }

    const updatedJob = {
      ...job,
      applicantsCount: (job.applicantsCount || 0) + 1,
      status: this.careerJobsService.determineJobStatus((job.applicantsCount || 0) + 1),
    };

    // First, update the job in Firebase
    this.careerJobsService.updateJob(updatedJob).subscribe({
      next: () => {
        // Second, update the local list shown
        // If the current job’s id matches the one applied for, replace it that job object with the updated version 
        this.jobsList = this.jobsList.map(j => 
          j.id === job.id ? updatedJob : j
        );
        
        // Add the job to user's applied jobs
        this.userAppliedJobs.push(job.id);
      },
      error: (error) => {
        console.error('Error updating job:', error);
      }
    });

    this.careerJobsService.saveJobApplication(job).subscribe({
      next: () => {
        console.log('Job application saved successfully');
      },
      error: (error) => {
        console.error('Error saving job application:', error);
      }
    });
  }
}
