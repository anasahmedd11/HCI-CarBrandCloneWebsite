import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipTableComponentComponent } from './internship-table-component.component';

describe('InternshipTableComponentComponent', () => {
  let component: InternshipTableComponentComponent;
  let fixture: ComponentFixture<InternshipTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternshipTableComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternshipTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
