import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelsDetailsPageComponent } from './carmodels-details-page.component';

describe('CarmodelsDetailsPageComponent', () => {
  let component: CarmodelsDetailsPageComponent;
  let fixture: ComponentFixture<CarmodelsDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarmodelsDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarmodelsDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
