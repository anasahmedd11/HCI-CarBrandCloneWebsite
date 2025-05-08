import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent1Component } from './home-component1.component';

describe('HomeComponent1Component', () => {
  let component: HomeComponent1Component;
  let fixture: ComponentFixture<HomeComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
