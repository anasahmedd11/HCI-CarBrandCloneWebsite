import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTopComponentComponent } from './internship-top-component.component';

describe('InternshipTopComponentComponent', () => {
  let component: InternshipTopComponentComponent;
  let fixture: ComponentFixture<InternshipTopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipTopComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipTopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
