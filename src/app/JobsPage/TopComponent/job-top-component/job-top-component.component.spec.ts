import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTopComponentComponent } from './job-top-component.component';

describe('JobTopComponentComponent', () => {
  let component: JobTopComponentComponent;
  let fixture: ComponentFixture<JobTopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobTopComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
