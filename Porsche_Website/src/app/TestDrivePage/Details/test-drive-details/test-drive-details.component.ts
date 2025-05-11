import { Component, OnInit } from '@angular/core';
import { TestDrive } from '../../../Model/testDrive';
import { TestdriveService } from '../../../services/Firebase/testdrive.service';

@Component({
  selector: 'app-test-drive-details',
  templateUrl: './test-drive-details.component.html',
  styleUrl: './test-drive-details.component.scss'
})
export class TestDriveDetailsComponent implements OnInit {

  testDriveArray: TestDrive[] = [];

  showTestDrivesDetails: boolean = false;

  isLoading: boolean = false;

  errorShown: boolean = false;

  constructor(private testDriveService: TestdriveService) { }
  
  ngOnInit() {
    this.viewTestDrive();
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
