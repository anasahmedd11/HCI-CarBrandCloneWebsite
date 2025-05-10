import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTableComponentComponent } from './job-table-component.component';

describe('JobTableComponentComponent', () => {
  let component: JobTableComponentComponent;
  let fixture: ComponentFixture<JobTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobTableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
