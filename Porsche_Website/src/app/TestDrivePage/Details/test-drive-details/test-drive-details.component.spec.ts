import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveDetailsComponent } from './test-drive-details.component';

describe('TestDriveDetailsComponent', () => {
  let component: TestDriveDetailsComponent;
  let fixture: ComponentFixture<TestDriveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDriveDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
