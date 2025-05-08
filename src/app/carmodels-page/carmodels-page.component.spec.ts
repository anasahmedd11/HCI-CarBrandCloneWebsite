import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodelsPageComponent } from './carmodels-page.component';

describe('CarmodelsPageComponent', () => {
  let component: CarmodelsPageComponent;
  let fixture: ComponentFixture<CarmodelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarmodelsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarmodelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
