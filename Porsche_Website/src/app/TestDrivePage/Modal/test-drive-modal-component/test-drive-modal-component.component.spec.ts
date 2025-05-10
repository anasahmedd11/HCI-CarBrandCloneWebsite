import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDriveModalComponentComponent } from './test-drive-modal-component.component';

describe('TestDriveModalComponentComponent', () => {
  let component: TestDriveModalComponentComponent;
  let fixture: ComponentFixture<TestDriveModalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDriveModalComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDriveModalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
