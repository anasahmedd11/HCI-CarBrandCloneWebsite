import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveFormComponentComponent } from './test-drive-form-component.component';

describe('TestDriveFormComponentComponent', () => {
  let component: TestDriveFormComponentComponent;
  let fixture: ComponentFixture<TestDriveFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDriveFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
