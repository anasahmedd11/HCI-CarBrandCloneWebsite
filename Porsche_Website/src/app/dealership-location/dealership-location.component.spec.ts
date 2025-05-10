import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealershipLocationComponent } from './dealership-location.component';

describe('DealershipLocationComponent', () => {
  let component: DealershipLocationComponent;
  let fixture: ComponentFixture<DealershipLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DealershipLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealershipLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
