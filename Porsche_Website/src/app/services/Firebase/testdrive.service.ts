import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TestDrive } from '../../Model/testDrive';
import { map, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TestdriveService {

  private firebaseDatabaseURL = 'https://porsche-website-8a6bb-default-rtdb.firebaseio.com/userTestDrive';

  constructor(private http: HttpClient, private authService: AuthService) { }

  addTestDrive(testDrive: TestDrive) {
    return this.authService.user$.pipe(
      switchMap(user => {
        if (!user) {
          return throwError(() => new Error('User must be authenticated to add a test drive'));
        }

        const dataToSend = {
          fullname: testDrive.fullname,
          email: testDrive.email,
          models: testDrive.models,
          year: testDrive.year,
          phonenumber: testDrive.phonenumber,
          timestamp: new Date(),
          userId: user.uid 
        };

        console.log(dataToSend);

        return this.http.post(`${this.firebaseDatabaseURL}.json`, dataToSend);
      })
    );
  }

  //Transforms the object returned by Firebase into an array of TestDrive objects. 
  //Each object will include an additional id field taken from the Firebase key.
  getTestDrives() {
    return this.authService.user$.pipe(
      switchMap(user => {
        if (!user) {
          return throwError(() => new Error('User must be authenticated to view test drives'));
        }

        return this.http.get<{[key: string]: TestDrive}>(`${this.firebaseDatabaseURL}.json`).pipe(
          map(responseData => {
            const testDriveArray: TestDrive[] = [];

            for (const key in responseData) {
              if (responseData.hasOwnProperty(key) && responseData[key].userId === user.uid) {
                testDriveArray.push({...responseData[key], id: key});
              }
            }
            return testDriveArray;
          })
        );
      })
    );
  }

  deleteTestDrive(id: string) {
    return this.http.delete(`${this.firebaseDatabaseURL}/${id}.json`);
  }
 
}
