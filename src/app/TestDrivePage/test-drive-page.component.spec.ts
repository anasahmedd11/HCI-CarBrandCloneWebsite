import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDrivePageComponent } from './test-drive-page.component';

describe('TestDrivePageComponent', () => {
  let component: TestDrivePageComponent;
  let fixture: ComponentFixture<TestDrivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestDrivePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestDrivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
