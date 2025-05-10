import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent4Component } from './home-component4.component';

describe('HomeComponent4Component', () => {
  let component: HomeComponent4Component;
  let fixture: ComponentFixture<HomeComponent4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
