import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent3Component } from './home-component3.component';

describe('HomeComponent3Component', () => {
  let component: HomeComponent3Component;
  let fixture: ComponentFixture<HomeComponent3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
