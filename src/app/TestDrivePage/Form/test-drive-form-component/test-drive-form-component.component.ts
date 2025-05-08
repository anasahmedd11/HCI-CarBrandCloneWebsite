import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestdriveService } from '../../../services/Firebase/testdrive.service';
import { TestDrive } from '../../../Model/testDrive';

@Component({
  selector: 'app-test-drive-form-component',
  templateUrl: './test-drive-form-component.component.html',
  styleUrl: './test-drive-form-component.component.scss'
})
export class TestDriveFormComponentComponent {
  @ViewChild('testDriveForm', { static: true }) testDriveForm: NgForm;

  gendersList = ["Male", "Female", "Rather not to say"];
  phonePattern = "^\\+?[0-9]{10}$";

  isSubmitted: boolean= false;

  defaultSelectionDD1 = 'opt1';
  defaultSelectionDD2 = 'opt1';

  testDriveArray: TestDrive[] = [];

  showTestDrivesDetails: boolean = false;

  isLoading: boolean = false;

  errorShown: boolean = false;

  constructor(private testDriveService: TestdriveService) { }
  
  onSubmit(testDriveForm: NgForm) {
    this.isSubmitted = true;
    //addTestDrive() returns an Observable. Observables are lazy, they only run when you subscribe to them.
    this.testDriveService.addTestDrive(testDriveForm.value).subscribe({
      next: (response) => {
        console.log('Test drive added:', response);
      },
      error: (error) => {
        console.error('Error adding test drive:', error);
      }
    });
    this.testDriveForm.reset();
  }

  viewTestDrive() {
    this.isLoading = true;
    this.showTestDrivesDetails = true;
    this.testDriveService.getTestDrives().subscribe({
      next: (testDriveArray) => {
        this.testDriveArray = testDriveArray;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching test drives:', error);
        this.isLoading = false;
        this.errorShown = true;
      }
    });
  }

  CancelTestDrive(id: string) {
    this.testDriveService.deleteTestDrive(id).subscribe({
      next: () => {
        // Show only the remaining test drives ensuring instant UI update
        this.testDriveArray = this.testDriveArray.filter(test => test.id !== id);
      },
      error: (error) => {
        console.error('Error deleting test drive:', error);
      }
    });
  }
}
