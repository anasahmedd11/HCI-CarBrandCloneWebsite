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

        //Use form data and add extras before sending to Firebase
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

  getTestDrives() {
    return this.authService.user$.pipe(
      switchMap(user => {
        if (!user) {
          return throwError(() => new Error('User must be authenticated to view test drives'));
        }

        return this.http.get<{[key: string]: TestDrive}>(`${this.firebaseDatabaseURL}.json`).pipe(
          //Response will be in form of key value pair, where key is the id of the test drive and value is the test drive object
          //Transform the response into an array of TestDrive objects
          map(responseData => {
            const testDriveArray: TestDrive[] = [];

            for (const key in responseData) {
              //Loop through all the test drives, and check if the userId matches the logged-in user's uid.
              //If yes, add that item to testDriveArray, attaching the Firebase key as id
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
