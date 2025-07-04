import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InternshipModel } from '../../Model/internship';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CareerInternshipsService {

  private firebaseDatabaseURL = 'https://porsche-website-8a6bb-default-rtdb.firebaseio.com/careerInternships';

  private appliedInternshipsURL = 'https://porsche-website-8a6bb-default-rtdb.firebaseio.com/appliedInternships';

  constructor(private http: HttpClient, private authService: AuthService) { }

  //Get all available internships from the database stored in careerInternships
  getInternships() {
    return this.http.get<{[key: string]: InternshipModel}>(`${this.firebaseDatabaseURL}.json`).pipe(
      map(responseData => {

        const internshipArray: InternshipModel[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            internshipArray.push({...responseData[key], id: key});
          }
        }
        return internshipArray;
      })
    );
  }

  //Get only the internships that user has applied to using userId, stored in appliedInternships
  getUserAppliedInternships(userId: string) {
      return this.http.get<{[key: string]: InternshipModel}>(`${this.appliedInternshipsURL}/${userId}.json`).pipe(
        map(responseData => {
          if (!responseData) {
            return [];
          }
          const internshipsArray: InternshipModel[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              internshipsArray.push({...responseData[key], id: key});
            }
          }
          return internshipsArray;
        })
      );
  }

  getStatusMessage(applicantsCount: number): string {
    if (applicantsCount === 0) {
      return 'Be the first to apply!';
    } else if (applicantsCount === 1) {
      return '1 person has applied';
    }
    else if (applicantsCount <= 10) {
      return `${applicantsCount} people have applied`;
    } else {
      return 'Applications closed';
    }
  }

  determineInternshipStatus(applicantsCount: number): string {
    if (applicantsCount >= 0 && applicantsCount <= 10) {
      return 'Open';
    } else {
      return 'Filled';
    }
  }

  updateInternship(internship: InternshipModel) {
    const { id, ...internshipData } = internship;
    return this.http.patch(`${this.firebaseDatabaseURL}/${id}.json`, internshipData);
  }

  saveInternshipApplication(internship: InternshipModel) {
    return this.authService.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user) {
          throw new Error('User must be logged in to apply for internships');
        }
        //To make sure each internship is saved once per user using its real id not Firebase key in order to avoid the same user
        //applying multiple times and these applications being treated as different applications because of the different Firebase keys.
        return this.http.put(`${this.appliedInternshipsURL}/${user.uid}/${internship.id}.json`, internship);
      })
    );
  }

  // addInternship() {
  //   return this.http.put(`${this.firebaseDatabaseURL}.json`, this.internshipsList);
  // }

  // internshipsList: InternshipModel[] = [
  //   {
  //     id: 1,
  //     title: 'Software Engineering Intern - Vehicle Connectivity',
  //     department: 'Digitalization & IT',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: '6-month Internship',
  //     academicLevel: 'Bachelor/Master',
  //     postingDate: '2023-07-10',
  //     description: 'Work on Porsche Connect services and vehicle software integration. Gain hands-on experience with automotive software stacks.',
  //     applicationDeadline: '2023-08-15'
  //   },
  //   {
  //     id: 2,
  //     title: 'E-Mobility Engineering Intern',
  //     department: 'E-Mobility',
  //     location: 'Weissach, Germany',
  //     status: 'Open',
  //     type: '3-6 month Internship',
  //     academicLevel: 'Master',
  //     postingDate: '2023-07-05',
  //     description: 'Support high-voltage system development and battery technology research for Porsche electric vehicles.',
  //     applicationDeadline: '2023-08-10'
  //   },
  //   {
  //     id: 3,
  //     title: 'Design Intern - Exterior/Interior',
  //     department: 'Design',
  //     location: 'Stuttgart, Germany',
  //     status: 'Filled',
  //     type: '6-month Internship',
  //     academicLevel: 'Bachelor',
  //     postingDate: '2023-06-20',
  //     description: 'Collaborate with Porsche designers on concept development using CAD and physical modeling techniques.',
  //     applicationDeadline: '2023-07-30'
  //   },
  //   {
  //     id: 4,
  //     title: 'Marketing Intern - Digital Campaigns',
  //     department: 'Marketing',
  //     location: 'Berlin, Germany',
  //     status: 'Open',
  //     type: '3-month Internship',
  //     academicLevel: 'Bachelor',
  //     postingDate: '2023-07-15',
  //     description: 'Support digital marketing initiatives and social media campaigns for Porsche product launches.',
  //     applicationDeadline: '2023-08-20'
  //   },
  //   {
  //     id: 5,
  //     title: 'Production Quality Intern',
  //     department: 'Production',
  //     location: 'Leipzig, Germany',
  //     status: 'Filled',
  //     type: '6-month Internship',
  //     academicLevel: 'Bachelor',
  //     postingDate: '2023-07-01',
  //     description: 'Learn quality assurance processes in vehicle production and assembly operations.',
  //     applicationDeadline: '2023-08-05'
  //   },
  //   {
  //     id: 6,
  //     title: 'Data Science Intern - Connected Vehicles',
  //     department: 'R&D',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: '6-month Internship',
  //     academicLevel: 'Master',
  //     postingDate: '2023-07-12',
  //     description: 'Analyze vehicle telemetry data to improve performance and customer experience.',
  //     applicationDeadline: '2023-08-18'
  //   },
  //   {
  //     id: 7,
  //     title: 'Finance Intern - Corporate Strategy',
  //     department: 'Finance',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: '3-month Internship',
  //     academicLevel: 'Bachelor/Master',
  //     postingDate: '2023-07-08',
  //     description: 'Support financial analysis and strategic planning for Porsche business units.',
  //     applicationDeadline: '2023-08-12'
  //   },
  //   {
  //     id: 8,
  //     title: 'Sustainability Intern',
  //     department: 'Corporate Responsibility',
  //     location: 'Stuttgart, Germany',
  //     status: 'Open',
  //     type: '6-month Internship',
  //     academicLevel: 'Bachelor/Master',
  //     postingDate: '2023-07-18',
  //     description: 'Contribute to Porsche\'s sustainability initiatives and carbon neutrality programs.',
  //     applicationDeadline: '2023-08-25'
  //   },
  //   {
  //     id: 9,
  //     title: 'Human Resources Intern - Talent Acquisition',
  //     department: 'HR',
  //     location: 'Stuttgart, Germany',
  //     status: 'Filled',
  //     type: '3-month Internship',
  //     academicLevel: 'Bachelor',
  //     postingDate: '2023-07-03',
  //     description: 'Support recruitment processes and employer branding activities.',
  //     applicationDeadline: '2023-08-08'
  //   },
  //   {
  //     id: 10,
  //     title: 'Autonomous Driving Research Intern',
  //     department: 'Advanced Development',
  //     location: 'Weissach, Germany',
  //     status: 'Filled',
  //     type: '6-month Internship',
  //     academicLevel: 'Master/PhD',
  //     postingDate: '2023-07-20',
  //     description: 'Assist in developing machine learning models for autonomous vehicle systems.',
  //     applicationDeadline: '2023-08-30'
  //   }
  // ]

}
