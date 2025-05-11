import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
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
  @Output() viewDetails = new EventEmitter<void>();

  phonePattern = "^\\+?[0-9]{11}$";

  isSubmitted: boolean= false;

  defaultSelectionDD1 = '';
  defaultSelectionDD2 = '';

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

  viewTestDriveDetails() {
    this.viewDetails.emit();
  }
}
