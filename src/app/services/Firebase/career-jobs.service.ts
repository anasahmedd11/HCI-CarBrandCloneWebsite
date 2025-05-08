import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobModel } from '../../Model/jobs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CareerJobsService {

  private firebaseDatabaseURL = 'https://porsche-website-8a6bb-default-rtdb.firebaseio.com/careerJobs';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get<{[key: string]: JobModel}>(`${this.firebaseDatabaseURL}.json`).pipe(
      map(responseData => {

        const jobArray: JobModel[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            jobArray.push({...responseData[key], id: key});
          }
        }
        return jobArray;
      })
    );
  }

  determineJobStatus(applicantsCount: number): string {
    if (applicantsCount >= 0 && applicantsCount <= 5) {
      return 'Open';
    } else if (applicantsCount >= 6 && applicantsCount <= 10) {
      return 'On Hold';
    } else {
      return 'Completed';
    }
  }

  updateJob(job: JobModel) {
    const { id, ...jobData } = job;
    return this.http.patch(`${this.firebaseDatabaseURL}/${id}.json`, jobData);
  }


  // addJob() {
  //   return this.http.put(`${this.firebaseDatabaseURL}.json`, this.jobsList);
  // }

  // jobsList: JobModel[] = [
  //   {
  //     id: 1,
  //     title: 'Software Engineer - Automotive Systems',
  //     department: 'Digitalization & IT',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Professional',
  //     postingDate: '2023-05-15',
  //     description: 'Develop cutting-edge software solutions for Porsche vehicles, working on embedded systems and vehicle connectivity.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Electrical Engineer - High Voltage Systems',
  //     department: 'E-Mobility',
  //     location: 'Weissach, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Experienced',
  //     postingDate: '2023-06-01',
  //     description: 'Design and develop high voltage systems for Porsche electric vehicles, focusing on battery technology and power distribution.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Production Specialist - Assembly',
  //     department: 'Production',
  //     location: 'Leipzig, Germany',
  //     status: 'Filled',
  //     type: 'Shift work',
  //     experienceLevel: 'Entry Level',
  //     postingDate: '2023-04-10',
  //     description: 'Work on the assembly line for Porsche vehicles, ensuring highest quality standards in production processes.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Design Engineer - Exterior',
  //     department: 'Design',
  //     location: 'Stuttgart, Germany',
  //     status: 'On Hold',
  //     type: 'Full-time',
  //     experienceLevel: 'Professional',
  //     postingDate: '2023-05-22',
  //     description: 'Create and develop exterior design concepts for future Porsche models using CAD and physical modeling.',
  //   },
  //   {
  //     id: 5,
  //     title: 'Data Scientist - Connected Car',
  //     department: 'Digitalization & IT',
  //     location: 'Berlin, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Expert',
  //     postingDate: '2023-06-10',
  //     description: 'Develop machine learning models to analyze vehicle data and improve Porsche Connect services.',
  //   },
  //   {
  //     id: 6,
  //     title: 'Aerodynamics Engineer',
  //     department: 'Engineering',
  //     location: 'Weissach, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Professional',
  //     postingDate: '2023-06-15',
  //     description: 'Optimize vehicle aerodynamics for performance and efficiency across Porsche model lines.',
  //   },
  //   {
  //     id: 7,
  //     title: 'Battery Systems Engineer',
  //     department: 'E-Mobility',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Expert',
  //     postingDate: '2023-06-18',
  //     description: 'Lead development of next-generation battery systems for Porsche electric vehicles.',
  //   },
  //   {
  //     id: 8,
  //     title: 'Quality Assurance Specialist - Paint Shop',
  //     department: 'Production',
  //     location: 'Leipzig, Germany',
  //     status: 'Open',
  //     type: 'Shift work',
  //     experienceLevel: 'Experienced',
  //     postingDate: '2023-06-05',
  //     description: 'Ensure premium quality standards in vehicle paint application and finishing.',
  //   },
  //   {
  //     id: 9,
  //     title: 'Autonomous Driving Engineer',
  //     department: 'R&D',
  //     location: 'Stuttgart, Germany',
  //     status: 'On Hold',
  //     type: 'Full-time',
  //     experienceLevel: 'Expert',
  //     postingDate: '2023-05-30',
  //     description: 'Develop autonomous driving features for future Porsche models.',
  //   },
  //   {
  //     id: 10,
  //     title: 'Customer Experience Digital Designer',
  //     department: 'Digitalization',
  //     location: 'Berlin, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Professional',
  //     postingDate: '2023-06-12',
  //     description: 'Design digital interfaces for Porsche customer experiences across platforms.',
  //   },
  //   {
  //     id: 11,
  //     title: 'Chassis Dynamics Engineer',
  //     department: 'Engineering',
  //     location: 'Weissach, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Professional',
  //     postingDate: '2023-06-20',
  //     description: 'Develop and tune chassis systems to deliver the iconic Porsche driving experience.',
  //   },
  //   {
  //     id: 12,
  //     title: 'Interior Design Engineer',
  //     department: 'Design', 
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: 'Full-time',
  //     experienceLevel: 'Senior',
  //     postingDate: '2023-06-08',
  //     description: 'Design and develop premium interior components and systems for Porsche vehicles, focusing on luxury materials, ergonomics, and brand aesthetics.', 
  //   },
  //   {
  //     id: 13,
  //     title: 'Classic Vehicle Restoration Expert',
  //     department: 'Heritage',
  //     location: 'Stuttgart, Germany',
  //     status: 'Filled',
  //     type: 'Full-time',
  //     experienceLevel: 'Senior',
  //     postingDate: '2023-05-25',
  //     description: 'Restore and maintain classic Porsche vehicles to original specifications.',
  //   },
  // ];
}
