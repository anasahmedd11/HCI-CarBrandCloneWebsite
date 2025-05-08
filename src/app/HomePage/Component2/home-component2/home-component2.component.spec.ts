import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent2Component } from './home-component2.component';

describe('HomeComponent2Component', () => {
  let component: HomeComponent2Component;
  let fixture: ComponentFixture<HomeComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
